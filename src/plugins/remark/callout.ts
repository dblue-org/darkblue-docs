import type { List, ListItem, Paragraph, Text } from 'mdast';
import type { Node, Parent } from 'unist';
import type { MdxJsxTextElement } from 'mdast-util-mdx';
import {toString} from 'mdast-util-to-string';

type PluginOptions = {
    className?: string;
    itemClassName?: string;
};

const defaultOptions: PluginOptions = {
    className: 'callout-list',
    itemClassName: 'callout-list-item'
}

const calloutRegex = /^(\[#)(\d{1,2})(] )/;

type Target = [node: List, index: number, parent: Parent];
type ItemTarget = [node: ListItem, index: number, parent: Parent];

function transformNode<NewNode extends Node>(
    node: Node,
    newNode: NewNode,
): NewNode {
    Object.keys(node).forEach((key) => {
        delete node[key];
    });
    Object.keys(newNode).forEach((key) => {
        node[key] = newNode[key];
    });
    return node as NewNode;
}

async function processCalloutListItem([node, index, parent]: ItemTarget, options: PluginOptions) {
    const jsxNode = node as unknown as MdxJsxTextElement;
    const attributes: MdxJsxTextElement['attributes'] = [];

    attributes.push({
        type: 'mdxJsxAttribute',
        name: 'className',
        value: options.itemClassName
    });

    if (node.children[0].type == 'paragraph') {
        const paragraph = node.children[0];
        const text = paragraph.children[0] as Text;

        const matches = text.value.match(calloutRegex);
        if (matches.length >= 3) {
            const idx = matches[2];
            attributes.push({
                type: 'mdxJsxAttribute',
                name: 'data-index',
                value: idx
            });
        }

        text.value = text.value.replace(calloutRegex, '');
    }

    transformNode(jsxNode, {
        type: 'mdxJsxTextElement',
        name: 'li',
        attributes,
        //children: (node.children[0] as Paragraph).children,
        children: node.children
    });
}

async function processCalloutList([node, index, parent]: Target, options: PluginOptions){

    const children = node.children;

    let has = false;
    let i = 0;
    children.forEach((child) => {
        if (hasCallout(child)) {
            has = true;
            processCalloutListItem([child, i, node], options);
        }
        i++;
    })

    if (has) {
        const attributes: MdxJsxTextElement['attributes'] = [];
        const jsxNode = node as unknown as MdxJsxTextElement;
        attributes.push({
            type: 'mdxJsxAttribute',
            name: 'className',
            value: options.className
        });



        transformNode(jsxNode, {
            type: 'mdxJsxTextElement',
            name: 'ul',
            attributes,
            children: node.children,
        });
    }
}

function hasCallout(node: ListItem): boolean {
    const textNodes = node.children.filter(
        ({type}) => !['html', 'jsx'].includes(type),
    );

    const itemText = toString(
        textNodes.length > 0 ? textNodes : node,
    );

    if (calloutRegex.test(itemText)) {
        return true;
    }

    return false;
}

export default function plugin(options: PluginOptions) {

    return async (root, vfile) => {
        const {visit} = await import('unist-util-visit');

        const promises: Promise<void>[] = [];
        visit(root, 'list', (node: List, index, parent) => {
            return promises.push(
                processCalloutList([node, index, parent!], Object.assign(defaultOptions, options))
            );
        });
        await Promise.all(promises);
    };
}