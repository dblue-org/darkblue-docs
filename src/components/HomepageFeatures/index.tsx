import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
};

type PrimaryFeature = {
    title: string;
    src: string;
    position: string;
    description: string[];
}

const FeatureList: PrimaryFeature[] = [
    {
        title: '功能丰富',
        src: 'img/features/home.png',
        position: 'left',
        description: [
            '组织架构及用户管理：部门增删改查、用户增删改查、用户详情、用户的启用禁用以及重置用户密码等功能。在用户详情中可以查看用户拥有的所有权限，包括为用户分配的角色和用户所属用户组拥有的角色为用户赋予的权限。',
            '角色权限管理：角色增删改查、权限增删改查、为角色分配权限、可以在角色详情中查看角色关联的用户，可以在权限详情中查看权限关联的角色',
            '菜单管理：菜单的增删改查，目前支持 PC 端菜单管理和 APP 菜单管理，可以通过配置屏蔽 APP 菜单管理。',
            '资源管理：资源就是后台暴露的接口，通过资源和权限绑定可以在后台控制接口的访问，提供更加健壮的安全防护。',
            '日志管理：目前支持登录日志和操作日志的查看，操作日志的记录只需要通过一个简单的注解即可实现。',
            '系统配置：提供参数配置和数据字典管理两个配置能力',
            '缓存管理：系统中的基础信息通过领域事件做了持久缓存，从缓存管理模块可以查看哪些数据做了缓存，同时可以手动刷新这些缓存',
            '更多功能，敬请期待...'
        ]
    }, {
        title: '更详细的详情页面',
        src: 'img/features/details.png',
        position: 'right',
        description: [
            '在详情页面中，您可以观察到所有数据的来龙去脉。只要跟此数据有引用关系的数据，都在详情页面中做了展示。',
            '同时在详情页面中还可以对数据进行操作，避免了详情页面查看数据，表格中修改数据的麻烦。',
            '详情页面中关联的数据也提供了直接跳转其详情页面的功能，可以更加快捷的查看各种数据。'
        ]
    }, {
        title: '丰富的自定义组件',
        src: 'img/features/components.png',
        position: 'left',
        description: [
            '在前端项目中自定义了大量组件，以便您可以在各种场景中使用。',
            '表单组件：其中表单组件有用户选择、部门选择、职位选择、字段选择等组件。',
            '布局组件：布局组件提供了分栏布局，详情页的内容分块组件，表单搜索自适应布局组件等',
            '后续会补充更多实用组件，敬请期待...'
        ]
    }

];


function PrimaryFeature({title, src, position, description}: PrimaryFeature) {
    return (
        <div className={clsx('row', styles.featureRow)}>
            {(position == 'left') ? (
                <>
                    <div className={clsx('col col--4')}>
                        <h3 className={styles.title}>{title}</h3>
                        <ul className={styles.primaryFeatures}>
                            {description.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className={clsx('col col--8')}>
                        <div className={styles.featureImage}>
                            <img src={src} alt={title}/>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className={clsx('col col--8', styles.featureImage)}>
                        <div className={styles.featureImage}>
                            <img src={src} alt={title}/>
                        </div>
                    </div>
                    <div className={clsx('col col--4')}>
                        <h3 className={styles.title}>{title}</h3>
                        <ul className={styles.primaryFeatures}>
                            {description.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>

                </>
            )
            }
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <PrimaryFeature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
