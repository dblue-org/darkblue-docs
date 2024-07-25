/// <reference path="../../theme.d.ts" />

import React from 'react';
import type { Props } from '@theme/Admonition/Type/Inference';

export default function AdmonitionTypeInference(props: Props): JSX.Element {
    return (<dl className="math-inference">
        <dt>{props.title}</dt>
        <dd>
            {props.children}
        </dd>
    </dl>);
}
