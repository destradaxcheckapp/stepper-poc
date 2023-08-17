import clsx from 'clsx';
import styles from './Stepper.module.scss';

const Stepper = ({ steps = [], activeStep, onChangeStep }) => {
  return (
    <ul className={styles.stepper}>
      {steps.map(({ key, label, disabled }) => (
        <li
          key={key}
          className={clsx(styles.step, { [styles.active]: activeStep === key, [styles.disabled]: disabled })}
          onClick={() => !disabled && onChangeStep?.(key)}
        >
          {label}
        </li>
      ))}
    </ul>
  );
};

export default Stepper;
