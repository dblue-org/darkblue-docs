/// <reference path="../../theme.d.ts" />

import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import type {Props} from '@theme/Admonition/Type/Translate';
import AdmonitionLayout from '@theme/Admonition/Layout';
import {Icon} from '@iconify/react';

const infimaClassName = 'alert alert--primary';

//dashicons:translation

const defaultProps = {
  icon: <Icon icon="dashicons:translation" height="24"/>,
  title: (
    <Translate
      id="theme.admonition.translate"
      description="The default label used for the Translate admonition (:::translate)">
      Translate
    </Translate>
  ),
};

export default function AdmonitionTypeTranslate(props: Props): JSX.Element {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(infimaClassName, props.className)}>
      {props.children}
    </AdmonitionLayout>
  );
}
