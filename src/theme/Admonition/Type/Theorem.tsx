/// <reference path="../../theme.d.ts" />

import React from 'react';
import type { Props } from '@theme/Admonition/Type/Theorem';

export default function AdmonitionTypeTheorem(props: Props): JSX.Element {
    return (<dl className="math-theorem">
        <dt>{props.title}</dt>
        <dd>
            {props.children}
        </dd>
    </dl>);
}
