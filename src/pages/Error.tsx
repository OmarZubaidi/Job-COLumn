import { BackButton } from '../components';
import './error.scss';

export function Error() {
  return (
    <main>
      <div className="error">
        Error 404: Page not found
        <BackButton />
      </div>
    </main>
  );
}
