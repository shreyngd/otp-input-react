import { useState } from 'react';
import styles from  './App.module.scss';
import OTPInput from './OTPInput';

function App() {
  const [opt,setOtp] = useState('');
  const [optvalid,setOtpValid] = useState(false);

  return (
    <div className={styles.App}>
       <div>
        <OTPInput 
          inputLength={4}
          placeHolderChar="*"
          onChange={(otp,isValid) => {
            setOtp(otp);
            setOtpValid(isValid);
          }}
        />
       </div>
       <div className={styles.data}>
         <div>{opt}</div>
         <div>{optvalid ? 'Valid' : 'Invalid'}</div>
       </div>
    </div>
  );
}

export default App;
