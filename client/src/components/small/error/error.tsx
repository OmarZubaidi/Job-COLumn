import Back from '../buttons/backButton';
import './error.scss';

function Error () {
  return (
      <div className='error'>
        <div className='marginBottom'>
        Error 404: Page not found
        </div>
        <Back/>
      </div>
  );
}

export default Error;
