/// <reference path="../../theme.d.ts" />

import React from 'react';
import type { Props } from '@theme/Admonition/Type/Solution';

const infimaClassName = 'alert alert--solution';

export default function AdmonitionTypeSolution(props: Props): JSX.Element {
    return (<div className={infimaClassName}>
        <div className="admonition-solution-title">{props.title || 'Solution'}</div>
        {props.children}
    </div>);
}
