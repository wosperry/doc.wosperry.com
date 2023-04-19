import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '王者荣耀',
    Svg: require('@site/static/img/cat.svg').default,
    description: (
      <>
        再打两把，打完就睡
      </>
    ),
  },
  {
    title: '英雄联盟',
    Svg: require('@site/static/img/cat.svg').default,
    description: (
      <>
        不行，这把不过瘾，不赢一把睡不着
      </>
    ),
  },
  {
    title: '绝地求生',
    Svg: require('@site/static/img/cat.svg').default,
    description: (
      <>
        你们都是垃圾，我是最垃圾的
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
