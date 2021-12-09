
# React OTP Input

A dynamic OTP Input component


## Demo

https://shreyngd.github.io/otp-input-react/

## Features

- Error prop is not added. Validity of input is checked internally when user types or pastes anything.
- Added dynamic legth of input boxes.
- Support for alphabetic, numeric or alphanumeric OTP.
- Support for overriding default styles.


## Installation and running locally

Install my-project with npm

```bash
  yarn
  yarn start  
```
    
## Props

| Props           	| UseCase                                                                              	| default          	| Allowed                                	|
|-----------------	|--------------------------------------------------------------------------------------	|------------------	|----------------------------------------	|
| inputLength     	| To pass the length of number of input boxes to the component to take input from user 	| 4                	| Integer > 0                            	|
| placeHolderChar 	| To show placeholder character in input box. The length of string should be 1.        	| "*"              	| String                                 	|
| inputClass      	| To pass custom styles. Pass the className in this prop to override default class     	| defaultClassName 	| String                                 	|
| inputType       	| To tell the component about what is the acceptable input                             	| "numeric"        	| "alpha" \| "alphaNumeric" \| "numeric" 	|
| onChange        	| Callback function to return the otp and the validity of the OTP                      	| console.log      	| Function                               	|

## Deployment

To deploy this project run

```bash
  npm run deploy
```




## Usage/Examples

```javascript
import OTPInput from './OTPInput';

function App() {
  return 
      <OTPInput 
          inputLength={4}
          placeHolderChar="*"
          onChange={(otp,isValid) => {
            setOtp(otp);
            setOtpValid(isValid);
          }}
        />
}
```

For alphabetic Input

```javascript
import OTPInput from './OTPInput';

function App() {
  return 
      <OTPInput 
          inputLength={4}
          placeHolderChar="*"
          inputType="alpha"
          onChange={(otp,isValid) => {
            setOtp(otp);
            setOtpValid(isValid);
          }}
        />
}
```
