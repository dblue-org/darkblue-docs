/// <reference path="../../theme.d.ts" />

import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import type {Props} from '@theme/Admonition/Type/Success';
import AdmonitionLayout from '@theme/Admonition/Layout';
import BugIcon from '@site/static/img/admonition/bug.svg';

const infimaClassName = 'alert alert--danger';

const defaultProps = {
  icon: <BugIcon />,
  title: (
    <Translate
      id="theme.admonition.bug"
      description="The default label used for the Bug admonition (:::bug)">
      bug
    </Translate>
  ),
};

export default function AdmonitionTypeBug(props: Props): JSX.Element {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(infimaClassName, props.className)}>
      {props.children}
    </AdmonitionLayout>
  );
}
