import React from 'react';
import clsx from 'clsx';
import type { Props } from '@theme/CodeBlock/Line';

import styles from './styles.module.css';
import type { TokenInputProps, TokenOutputProps } from 'prism-react-renderer';

export default function CodeBlockLine(
    {
        line,
        classNames,
        showLineNumbers,
        getLineProps,
        getTokenProps
    }: Props): JSX.Element {
    if (line.length === 1 && line[0]!.content === '\n') {
        line[0]!.content = '';
    }

    const lineProps = getLineProps({
        line,
        className: clsx(classNames, showLineNumbers && styles.codeLine)
    });

    const lineTokens = line.map((token, key) => {
        return (<span key={key} {...getCommentCalloutTokenProps({token, key}, getTokenProps)} />)
    });

    return (
        <span {...lineProps}>
              {showLineNumbers ? (
                  <>
                      <span className={styles.codeLineNumber}/>
                      <span className={styles.codeLineContent}>{lineTokens}</span>
                  </>
              ) : (
                  lineTokens
              )}
            <br/>
        </span>
    );
}

const commentCalloutRegex = /^(\/\/\s+)(<)(\d{1,2})(>)$/;

function getCommentCalloutTokenProps(input: TokenInputProps, original: Function): TokenOutputProps {
    if (input.token.types[0] === 'comment' && input.token.content.match(commentCalloutRegex)) {
        const matches = input.token.content.match(commentCalloutRegex)
        return {
            className: styles.commentCallout,
            children: matches[3]
        }
    } else {
        return original(input);
    }
}