import { Route, Switch, useHistory, useParams, useRouteMatch, Redirect } from 'react-router-dom';
import Stepper from '../../Stepper';
import Page from '../Page/Page';
import BusinessInfo from '../steps/BusinessInfo';
import ClassesPayroll from '../steps/ClassesPayroll';
import LossHistory from '../steps/LossHistory';
import Officers from '../steps/Officers';
import PolicyInformation from '../steps/PolicyInformation';
import UnderwritingQuestions from '../steps/UnderwritingQuestions';

const WithRouter = () => {
  const history = useHistory();
  const { path, url } = useRouteMatch();
  console.log(`🚀 ~ url:`, url);
  console.log(`🚀 ~ path:`, path);
  const { stepKey } = useParams();

  const activeStep = stepKey;
  console.log(`🚀 ~ activeStep:`, activeStep);

  const handleChangeStep = nextStep => {
    history.push(`/router/${nextStep}`);
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
        <Switch>
          <Route path="/router/business-info">
            <BusinessInfo />
          </Route>
          <Route path="/router/classes-payroll">
            <ClassesPayroll />
          </Route>
          <Route path="/router/underwriting-questions">
            <UnderwritingQuestions />
          </Route>
          <Route path="/router/loss-history">
            <LossHistory />
          </Route>
          <Route path="/router/officers">
            <Officers />
          </Route>
          <Route path="/router/policy-information">
            <PolicyInformation />
          </Route>
          <Route exact path="/router">
            <Redirect to="/router/business-info" />
          </Route>
        </Switch>
      </Page.Content>
    </Page>
  );
};

export default WithRouter;
