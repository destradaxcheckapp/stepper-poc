import { useState } from 'react';
import Stepper from '../../Stepper';
import Page from '../Page/Page';
import BusinessInfo from '../steps/BusinessInfo';
import ClassesPayroll from '../steps/ClassesPayroll';
import LossHistory from '../steps/LossHistory';
import Officers from '../steps/Officers';
import PolicyInformation from '../steps/PolicyInformation';
import UnderwritingQuestions from '../steps/UnderwritingQuestions';

const MultiComponent = () => {
  const [activeStep, setActiveStep] = useState('business-info');

  const stepComponents = {
    'business-info': BusinessInfo,
    'classes-payroll': ClassesPayroll,
    'underwriting-questions': UnderwritingQuestions,
    'loss-history': LossHistory,
    officers: Officers,
    'policy-information': PolicyInformation
  };

  const Component = stepComponents[activeStep] || (() => null);

  return (
    <Page>
      <Page.Sidebar>
        <Stepper
          activeStep={activeStep}
          onChangeStep={setActiveStep}
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
        <Component />
      </Page.Content>
    </Page>
  );
};

export default MultiComponent;
