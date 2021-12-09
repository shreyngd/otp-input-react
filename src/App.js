import styles from  './App.module.scss';
import OTPInput from './OTPInput';

function App() {
  return (
    <div className={styles.App}>
        <OTPInput 
          inputLength={4}
          placeHolderChar="*"
        />
    </div>
  );
}

export default App;
