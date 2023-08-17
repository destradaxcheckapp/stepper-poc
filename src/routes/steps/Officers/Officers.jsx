import React from 'react';
import styles from '../step.module.scss';

const Officers = React.forwardRef((props, ref) => {
  return (
    <div className={styles.step} ref={ref}>
      <h1>Officers</h1>
    </div>
  );
});

export default Officers;
