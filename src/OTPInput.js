import { createRef, useRef } from "react";
import styles from "./OTPInput.module.scss";

const BKSPC = 8;
const L_ARR = 37;
const R_ARR = 39;
const SPACE = 32;

export default function OTPInput({
  inputLength = 4,
  placeHolderChar = "*",
  inputClass = styles.input,
  inputType = 'numeric',
  onChange = (otp, isValid, event) => console.log(otp)
}) {
  const inputs = [];
  const refList = useRef([]);

  const inputTypeNumericCondition = (keyCode) => (keyCode >= 48 && keyCode <= 57);
  const inputTypeAlphabeticCondition = (keyCode) => (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122);
  const inputTypeAlphaNumericCondition = (keyCode) => inputTypeAlphabeticCondition(keyCode) || inputTypeNumericCondition(keyCode);
  let inputTypeCondition = inputTypeNumericCondition;
  if(inputType === 'alpha'){
      inputTypeCondition = inputTypeAlphabeticCondition;
  }
  if(inputType === 'alphaNumeric'){
      inputTypeCondition = inputTypeAlphaNumericCondition;
  }

  const verifyAndCallChangeHandler = (otp,e) => {
      // to check otp length validity
      onChange(otp,otp.length === inputLength,e);
  }

  const keyDownEvent = (e) => {
    if (inputTypeCondition(e.keyCode)  && e.code !== 'KeyV') {
        setTimeout(() => {
            if (e.target.nextSibling) {
                e.target.nextSibling.focus();
            }
            const otp = inputs.map(el => el.ref.current.value).join('');
            verifyAndCallChangeHandler(otp,e);
    });

    } else if (
      (e.keyCode === R_ARR || e.keyCode === SPACE) &&
      e.target.nextSibling
    ) {
      e.preventDefault();
      e.target.nextSibling.focus();
      e.target.nextSibling.select();
    } else if (e.keyCode === BKSPC) {
      e.preventDefault();
      e.target.value = "";
      if (e.target.previousSibling) {
        e.target.previousSibling.focus();
        e.target.previousSibling.select();
      }
    } else if (e.keyCode === L_ARR && e.target.previousSibling) {
      e.preventDefault();
      e.target.previousSibling.focus();
      e.target.previousSibling.select();
    } else if(e.code !== 'KeyV'){
      e.preventDefault();
    }
  };

  const handlePaste = (e,index) => {
    e.preventDefault();
    const pastedData = e.clipboardData
    .getData('text/plain')
    .slice(0, inputLength - index + 1 )
    .split('')
    .filter(c => inputTypeCondition(c.charCodeAt(0)));

    
    if(pastedData.length){
        let j = 0;
         let i= index;

        while(j < pastedData.length && i < inputLength){
            inputs[i].ref.current.value = pastedData[j];
            i++;
            j++
        }
        inputs[i-1].ref.current.focus();
    }
    
  }


  for (let i = 0; i < inputLength; i++) {
      refList.current[i] = createRef();
        inputs.push(
      <input
        ref={refList.current[i]}
        className={inputClass}
        maxLength={1}
        autoFocus={i === 0}
        key={i}
        placeholder={placeHolderChar}
        onKeyDown={(e) => keyDownEvent(e, i)}
        onPaste={(e) => handlePaste(e,i)}
      />
    );
  }

  return (
    <div>
      {inputs.length > 0 ? inputs : "Input Length of component cannot be 0"}
    </div>
  );
}
