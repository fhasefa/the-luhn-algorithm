
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  let [input, setInput] = useState("")
  let [check, setCheck] = useState('Check Credit Card')

  function handleChange(evt) {
    setInput(evt.target.value)
    console.log(input)
    // console.log(evt.target.value)
  }

useEffect(() => {
  checkCardNum()
}, [input])

  // for (let j = 0; j < luhnAllDigits.length; j++) {
  //   luhnSum = luhnSum + luhnAllDigits[j]
  // }

// console.log(luhnSum)

// ((luhnSum %10)=== 0 && input.length > 1) ? setCheck('Credit Card is Valid') : setCheck('Credit Card is Invalid')

function checkCardNum() {
  let reverse= input.split("").reverse().join("")

  let inputArr = reverse.split('')
  // console.log(inputArr)

  

  let luhnArr = [];
  // console.log(luhnArr)
  // console.log(input)
  // console.log(input.split("").reverse().join(""))

  for (let i = 0; i < inputArr.length; i++) {
    (i % 2=== 0) ? luhnArr.push(inputArr[i]): luhnArr.push(inputArr[i]*2);
  }

  // console.log(luhnArr)

  let luhnAllDigits = luhnArr.join('').split('')
  
  // console.log(luhnAllDigits);

  let luhnSum = 0

  luhnAllDigits.forEach((x) => luhnSum += Number(x))

luhnSum === 0? setCheck('Enter Credit Card'):     
 luhnSum%10 === 0 && luhnSum>20? setCheck('Card is Valid'):  
 setCheck('Card is Invalid')
}

// if ((luhnSum %10)=== 0 && input.length > 1) {
//   setCheck('Credit Card is Valid')
// } else {setCheck('Credit Card is Invalid')}

  // function validCard(num) {
  //   if (num % 10 == 0) {
  //     return ('Valid')
  //   }
  // } else {return ('Not Valid')}

  // validCard()

  return (
    <div className="App">
      <h1>The Luhn Algorithm</h1>
      <h3>Enter a valid Credit card number</h3>
      <input value={input} onChange={handleChange}/> {/*input element with two input "methods" value and onChange*/}
      {/* <div>reverse: {reverse}</div> */}
      {/* <div>luhnArr: {luhnArr}</div> */}
      {/* <div>sum: {luhnSum}</div> */}
      <div>{check}</div>
    </div>
  );
}

export default App;
