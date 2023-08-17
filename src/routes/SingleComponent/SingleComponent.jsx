import React, { useState } from 'react';
import Stepper from '../../Stepper';
import Page from '../Page/Page';
import BusinessInfo from '../steps/BusinessInfo';
import ClassesPayroll from '../steps/ClassesPayroll';
import LossHistory from '../steps/LossHistory';
import Officers from '../steps/Officers';
import PolicyInformation from '../steps/PolicyInformation';
import UnderwritingQuestions from '../steps/UnderwritingQuestions';
import styles from './SingleComponent.module.scss';

const SingleComponent = () => {
  const [activeStep, setActiveStep] = useState('business-info');

  const refsByStep = {
    'business-info': React.useRef(),
    'classes-payroll': React.useRef(),
    'underwriting-questions': React.useRef(),
    'loss-history': React.useRef(),
    officers: React.useRef(),
    'policy-information': React.useRef()
  };

  const handleChangeStep = nextStep => {
    const ref = refsByStep[nextStep];

    if (ref) {
      ref.current.scrollIntoView({ behavior: 'smooth'});
    }

    setActiveStep(nextStep);
  };

  return (
    <Page>
      <Page.Sidebar>
        <Stepper
          activeStep={activeStep}
          onChangeStep={handleChangeStep}
          steps={[
            { key: 'business-info', label: 'Business info' },
            { key: 'classes-payroll', label: 'Classes & Payroll', disabled: true },
            { key: 'underwriting-questions', label: 'Underwriting Questions' },
            { key: 'loss-history', label: 'Loss History' },
            { key: 'officers', label: 'Officers' },
            { key: 'policy-information', label: 'Policy Information' }
          ]}
        />
      </Page.Sidebar>

      <Page.Content>
        <div className={styles.singleComponent}>
          <BusinessInfo ref={refsByStep['business-info']} />
          <ClassesPayroll ref={refsByStep['classes-payroll']} />
          <UnderwritingQuestions ref={refsByStep['underwriting-questions']} />
          <LossHistory ref={refsByStep['loss-history']} />
          <Officers ref={refsByStep['officers']} />
          <PolicyInformation ref={refsByStep['policy-information']} />
        </div>
      </Page.Content>
    </Page>
  );
};

export default SingleComponent;
