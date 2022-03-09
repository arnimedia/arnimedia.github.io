import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Vision',
    link: 'docs/vision',
    description: (
      <>
        Learn about the orginal vision of Minima and why it exists.
      </>
    ),
  },
  {
    title: 'Learn',
    link: 'docs/vision',
    description: (
      <>
        An in-depth introduction to the Minima protocol and it’s architecture.
      </>
    ),
  },
  {
    title: 'Run a node',
    link: 'docs/vision',
    description: (
      <>
        Learn how to install and run a validating and constructing Minima node on your device.
      </>
    ),
  },
  {
    title: 'Earn Rewards',
    link: 'docs/vision',
    description: (
      <>
        Learn about the Minima Incentive Program
      </>
    ),
  },
  {
    title: 'Ambassador',
    link: 'docs/vision',
    description: (
      <>
        Learn how to become a Minima ambassador and what Rewards you could earn
      </>
    ),
  },
  {
    title: 'Tokenomics',
    link: 'docs/vision',
    description: (
      <>
        Find out how a fixed supply of 1 Billion coins have been distributed.
      </>
    ),
  },
];

// Remove SVG on deploy

function Feature({Svg, title, link, description}) {
  return (
    <div className={clsx('col col--4')}>
      <a class="navbar__link" href={link}>
        <div class="card">
            <div className={clsx('card__header', styles.card__header__min)}>
              <h3><p>{title}</p></h3>
            </div>
            <div class="card__body">
              <p>{description}</p>
            </div>
        </div>
      </a>
      {/* <div className="text--left">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--left padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div> */}
    </div>
  );
}

export default function HomepageFeatures() {
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
