// pages/form/[step].js
import { useRouter } from 'next/router';
import Step1 from '../../components/step1';
import Step2 from '../../components/step2';
import Step3 from '../../components/step3';

const DynamicFormPage = () => {
  const router = useRouter();
  const { step } = router.query;

  // Convert the step to a number
  const currentStep = parseInt(step);

  // Render the appropriate page based on the current step
  return (
    <div>
      {currentStep === 1 && <Step1 />}
      {currentStep === 2 && <Step2 />}
      {currentStep === 3 && <Step3 />}
    </div>
  );
};

export default DynamicFormPage;
