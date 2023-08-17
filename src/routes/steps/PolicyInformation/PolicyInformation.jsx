import React from 'react';
import styles from '../step.module.scss';

const PolicyInformation = React.forwardRef((props, ref) => {
  return (
    <div className={styles.step} ref={ref}>
      <h1>Policy Information</h1>
    </div>
  );
});

export default PolicyInformation;
