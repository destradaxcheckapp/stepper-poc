import React from 'react';
import styles from '../step.module.scss';

const LossHistory = React.forwardRef((props, ref) => {
  return (
    <div className={styles.step} ref={ref}>
      <h1>Loss History</h1>
    </div>
  );
});

export default LossHistory;
