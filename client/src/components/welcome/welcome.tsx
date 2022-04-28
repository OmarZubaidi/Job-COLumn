import { useNavigate } from 'react-router-dom';

import { useUserContext } from '../contexts/user';
import {
  footer,
  headerAndLogo,
} from '../helpers/index';
import {
  userForm,
  welcomeMessage,
  introduction,
  functionality,
  privacyDisclosure
} from '../helpers/welcome';

import './welcome.scss';

function Welcome () {
  const navigate = useNavigate();

  const [user, setUser] = useUserContext();

  function onValueChange (value) {
    setUser({
      ...user,
      salary: value
    });
  }

  return (
    <div className='welcome'>
      {headerAndLogo}
      <main className='welcome-container'>
        {welcomeMessage}
        {introduction}
        {functionality}
        {privacyDisclosure}
        {userForm({
          defaultValue: user.salary,
          onValueChange: onValueChange,
          buttonOnClick: () => navigate('/jobs')
        })}
      </main>
      {footer}
    </div>
  );
}

export default Welcome;
