/// <reference path="../../theme.d.ts" />

import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import type {Props} from '@theme/Admonition/Type/Success';
import AdmonitionLayout from '@theme/Admonition/Layout';
import ExampleIcon from '@site/static/img/admonition/example.svg';

const infimaClassName = 'alert alert--primary';

const defaultProps = {
  icon: <ExampleIcon />,
  title: (
    <Translate
      id="theme.admonition.bug"
      description="The default label used for the Example admonition (:::example)">
      example
    </Translate>
  ),
};

export default function AdmonitionTypeExample(props: Props): JSX.Element {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(infimaClassName, props.className)}>
      {props.children}
    </AdmonitionLayout>
  );
}
