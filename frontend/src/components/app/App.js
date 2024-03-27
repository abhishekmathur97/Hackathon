import { useState } from 'react';
import styles from './App.module.css';
import Calculator from '../calculator/Calculator';
import LoginForm from '../login-form/LoginForm';

const App = () => {
  const [user, setUser] = useState('');
  return (
    <div className={styles.app}>
      {
        !user ? <LoginForm/> : <Calculator/>
      }
    </div>
  );
}

export default App;
