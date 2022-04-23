// Package imports

// Local imports
import BackButton from '../smol/buttons/backButton';
import Divider from '../smol/divider';
import './error.scss';

function Error () {
  return (
    <main>
      <div className='error'>
        Error 404: Page not found
        <Divider />
        <BackButton />
      </div>
    </main>
  );
}

export default Error;
