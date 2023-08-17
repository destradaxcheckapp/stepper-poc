import React from 'react';
import styles from '../step.module.scss';

const BusinessInfo = React.forwardRef((props, ref) => {
  return (
    <div className={styles.step} ref={ref}>
      <h1>Business Info</h1>
    </div>
  );
});

export default BusinessInfo;
