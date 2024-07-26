import React from 'react';
import Giscus from '@giscus/react';

export const GiscusComment = ({}) => {
    return (
        <div style={{ paddingTop: 50 }}>
            <Giscus
                id="GiscusComments"
                // 以下部分参考 Giscus 生成的代码填写
                repo="dblue-org/darkblue-docs"
                repoId="R_kgDOMYWZZA"
                category="General"
                categoryId="DIC_kwDOMYWZZM4ChL0v"
                mapping="pathname"
                strict="1"
                term="如果您对本文或本项目有任何建议或意见，欢迎在评论区留言。"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme="light"
                lang="zh-Hans"
            />
        </div>
    );
};

export default GiscusComment;