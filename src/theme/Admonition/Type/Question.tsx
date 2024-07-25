/// <reference path="../../theme.d.ts" />

import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import type {Props} from '@theme/Admonition/Type/Success';
import AdmonitionLayout from '@theme/Admonition/Layout';
import QuestionIcon from '@site/static/img/admonition/question.svg';

const infimaClassName = 'alert alert--info';

const defaultProps = {
  icon: <QuestionIcon />,
  title: (
    <Translate
      id="theme.admonition.success"
      description="The default label used for the Question admonition (:::question)">
      question
    </Translate>
  ),
};

export default function AdmonitionTypeQuestion(props: Props): JSX.Element {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(infimaClassName, props.className)}>
      {props.children}
    </AdmonitionLayout>
  );
}
