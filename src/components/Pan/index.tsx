import React, {ReactNode} from 'react';
import styles from './styles.module.css';
import {Row, Col, DescriptionsProps, Descriptions} from "antd";

export interface PanProps {
    type: string
    icon: ReactNode
    url: string
    password: string
}

export default function Pan({type, icon, url, password}: PanProps) {
    const items: DescriptionsProps['items'] = [
        {
            key: '1',
            label: '链接',
            children: <a href={url}>{url}</a>,
        },
        {
            key: '2',
            label: '提取码',
            children: <p>{password}</p>,
        }
    ];

    return (
        <div className={styles.container}>
            <Row gutter={16}>
                <Col span={3}>
                    <div className={styles.imageContainer}>
                        {icon}
                    </div>

                </Col>
                <Col span={21}>
                    <div className={styles.title}>{type}分享链接</div>
                    <div>
                        <span className={styles.key}>分享链接：</span>
                        <span className={styles.desc}>
                            <a href={url}>{url}</a>
                        </span>
                    </div>
                    <div>
                        <span className={styles.key}>密码：</span>
                        <span className={styles.desc}>{password}</span>
                    </div>
                </Col>
            </Row>
        </div>
    );
}