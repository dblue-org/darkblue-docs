/// <reference path="../../theme.d.ts" />

import type {Props} from "@theme/Admonition/Type/Memo";
import React, {ReactNode} from "react";
import Memo from "../../../components/Memo";

const DEFAULT_TITLE: string = '笔记';

export default function AdmonitionTypeMemo(props: Props): JSX.Element {
    let title: ReactNode;
    let theme ='default';
    if (props.title && typeof(props.title) == 'string') {
        const idx = props.title.lastIndexOf('#');
        if(idx >= 0) {
            title = idx != 0 ?props.title.substring(0, idx) : DEFAULT_TITLE;
            theme = props.title.substring(idx+1);
        } else {
            title = props.title
        }
    } else {
        title = props.title ? props.title : DEFAULT_TITLE;
    }
    return (
        <Memo title={title} icon="material-symbols:stylus-note" theme={theme}>
            {props.children}
        </Memo>
    );
}