// Local imports
import Back from '../buttons/backButton';

// Styling
import './error.scss';

function Error() {
  return (
    <main>
      <div className='error'>
        Error 404: Page not found
        <Back />
      </div>
    </main>
  );
}

export default Error;
