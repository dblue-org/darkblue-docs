/// <reference path="../../theme.d.ts" />

import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import type {Props} from '@theme/Admonition/Type/Success';
import AdmonitionLayout from '@theme/Admonition/Layout';
import AbstractIcon from '@site/static/img/admonition/abstract.svg';

const infimaClassName = 'alert alert--info';

const defaultProps = {
  icon: <AbstractIcon />,
  title: (
    <Translate
      id="theme.admonition.success"
      description="The default label used for the Abstrac admonition (:::abstract)">
      abstract
    </Translate>
  ),
};

export default function AdmonitionTypeAbstract(props: Props): JSX.Element {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(infimaClassName, props.className)}>
      {props.children}
    </AdmonitionLayout>
  );
}
