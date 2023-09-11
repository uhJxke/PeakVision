import React from 'react';

import renderSection1 from './section1.js';

import styles from './section1.module.scss';

function renderSection1Local(props) {
  return (
    <section className={styles.section1}>
      <div className={styles.flex_row}>
        <h1 className={styles.big_title}>What’s New</h1>
        <div className={styles.flex_row__cell}>
          <div
            className={styles.box1}
            style={{ '--src': `url(${require('./633e6112c776227600b1e328a3b06b59.png')})` }}>
            <div className={styles.flex_row1}>
              <h3 className={styles.subtitle}>Fractures</h3>

              <div className={styles.box2}>
                <div className={styles.text}>TV-PG</div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={styles.box11}
          style={{ '--src': `url(${require('./e82deafe9f05d16083ab3f5331835bf9.png')})` }}>
          <div className={styles.flex_row1}>
            <h3 className={styles.subtitle1}>The Origins</h3>

            <div className={styles.box2}>
              <div className={styles.text}>TV-PG</div>
            </div>
          </div>
        </div>

        <div
          className={styles.box3}
          style={{ '--src': `url(${require('./9b4ba1ebe33fde6d8a8c7b226e60f2f0.png')})` }}>
          <div className={styles.flex_col}>
            <img
              className={styles.image3}
              src={require('./f8324936436df7d9eaa14a62af631013.png')}
              alt="alt text"
            />
            <div className={styles.flex_col__cell}>
              <h3 className={styles.subtitle2}>Winter Storm</h3>
            </div>
            <div className={styles.flex_col__cell1}>
              <div className={styles.box21}>
                <div className={styles.text}>TV-PG</div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={styles.box11}
          style={{ '--src': `url(${require('./341abd2d4a6804f35e822785a982a3e6.png')})` }}>
          <div className={styles.flex_row1}>
            <h3 className={styles.subtitle3}>Shadowed</h3>

            <div className={styles.box2}>
              <div className={styles.text}>TV-PG</div>
            </div>
          </div>
        </div>
      </div>

      {renderSection1(props)}
    </section>
  );
}

export default renderSection1Local;
