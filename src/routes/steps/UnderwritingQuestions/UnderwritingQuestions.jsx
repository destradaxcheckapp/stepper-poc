import React from 'react';
import styles from '../step.module.scss';

const UnderwritingQuestions = React.forwardRef((props, ref) => {
  return (
    <div className={styles.step} ref={ref}>
      <h1>Underwriting Questions</h1>
    </div>
  );
});

export default UnderwritingQuestions;
