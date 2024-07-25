import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';
import AdmonitionTypSuccess from '@theme/Admonition/Type/Success';
import AdmonitionTypAbstract from '@theme/Admonition/Type/Abstract';
import AdmonitionTypQuestion from '@theme/Admonition/Type/Question';
import AdmonitionTypeBug from './Type/Bug';
import AdmonitionTypExample from '@theme/Admonition/Type/Example';
import AdmonitionTypMemo from "@theme/Admonition/Type/Memo";
import AdmonitionTypeTranslate from '@theme/Admonition/Type/Translate';
import AdmonitionTypeBlock from '@theme/Admonition/Type/Block';
import AdmonitionTypeSolution from '@theme/Admonition/Type/Solution';
import AdmonitionTypeTheorem from '@theme/Admonition/Type/Theorem';
import AdmonitionTypeInference from '@theme/Admonition/Type/Inference';

const AdmonitionTypes = {
    ...DefaultAdmonitionTypes,
    abstract: AdmonitionTypAbstract,
    success: AdmonitionTypSuccess,
    question: AdmonitionTypQuestion,
    bug: AdmonitionTypeBug,
    example: AdmonitionTypExample,
    memo: AdmonitionTypMemo,
    translate: AdmonitionTypeTranslate,
    trans: AdmonitionTypeTranslate,
    block: AdmonitionTypeBlock,
    solution: AdmonitionTypeSolution,
    theorem: AdmonitionTypeTheorem,
    infer: AdmonitionTypeInference
};

export default AdmonitionTypes;