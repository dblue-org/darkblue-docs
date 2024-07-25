import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className={clsx('hero__title')}>
                    {siteConfig.title}
                </Heading>
                <p className={clsx('hero__subtitle')}>{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className={clsx('button button--secondary', styles.buttonMargin)}
                        to="/docs/project-docs/quick-start">
                        快速开始 - 10min ⏱️
                    </Link>
                    <Link className="button button--success"
                          to="https://angular.darkblue.dblue.org/">预览</Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
