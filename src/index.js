import React from 'react';
import cn from 'classnames';

import renderSection1 from './section1.js';

import styles from './UntitledPage.module.scss';

function UntitledPage(props) {
  return (
    <main className={cn(styles.main, 'untitled-page')}>
      <div className={styles.main__cell}>{renderSection1(props)}</div>
    </main>
  );
}

export default UntitledPage;
