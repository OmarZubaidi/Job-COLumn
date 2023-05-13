import { useNavigate } from 'react-router-dom';
import { CustomButton } from './CustomButton';

export function BackButton() {
  const navigate = useNavigate();

  return (
    <CustomButton
      ariaLabel="Back button"
      icon="arrow-left"
      onClick={() => navigate(-1)}
      text="Back"
      variant="secondary"
    />
  );
}
