/// <reference path="../../theme.d.ts" />

import React from 'react';
import type { Props } from '@theme/Admonition/Type/Block';

const infimaClassName = 'alert alert--block';

export default function AdmonitionTypeBlock(props: Props): JSX.Element {
    return (<div className={infimaClassName}>
        {props.title && <div className="admonition-block-title">{props.title}</div>}
        {props.children}
    </div>);
}
