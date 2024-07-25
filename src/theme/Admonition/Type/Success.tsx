/// <reference path="../../theme.d.ts" />

import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import type {Props} from '@theme/Admonition/Type/Success';
import AdmonitionLayout from '@theme/Admonition/Layout';
import SuccessIcon from '@site/static/img/admonition/success.svg';

const infimaClassName = 'alert alert--success';

const defaultProps = {
  icon: <SuccessIcon />,
  title: (
    <Translate
      id="theme.admonition.success"
      description="The default label used for the Success admonition (:::success)">
      success
    </Translate>
  ),
};

export default function AdmonitionTypeSuccess(props: Props): JSX.Element {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(infimaClassName, props.className)}>
      {props.children}
    </AdmonitionLayout>
  );
}
