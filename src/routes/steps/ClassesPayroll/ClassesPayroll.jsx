import React from 'react';
import styles from '../step.module.scss';

const ClassesPayroll = React.forwardRef((props, ref) => {
  return (
    <div className={styles.step} ref={ref}>
      <h1>Classes & Payroll</h1>
    </div>
  );
});

export default ClassesPayroll;
