import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  //js code
  const [principle,setPrinciple]=useState(0);
  const[Interest,setInterest]=useState(0);
  const[Rate,setRate]=useState(0);
  const[Year,setYear]=useState(0);
  const[IsPrinciple,setIsPrinciple]=useState(true)
  const[israte,setIsRate]=useState(true);
  const[isyear,setIsYear]=useState(true);

  const handlesubmit=(e)=>{
  e.preventDefault();
  console.log("== Principle amount===");
  console.log(principle);
  console.log("==rate of Interest==");
  console.log(Rate);
  console.log("==Total years==");
  console.log(Year);
  let result=principle*Year*Rate/100;
  console.log(result);
  setInterest(result)
  }
  function clearValues(){
   setPrinciple(0);
   setInterest(0);
   setRate(0);
   setYear(0);
  }
  const validate =(e)=>{
    const{value,name}=e.target;
    console.log(name);
   /*  console.log("==value=="value); */
   //regular expression to check whether particular pattern
   //should have foerward slash at the beginning of the end
   //start of the expression is indicated by ^(raised)
   //ending of the expression indicated by $
   //if it match match we get an array as return else  null
   //!! is used to covert rewsult to expression to regular expression
   if(!!value.match(/^[0-9]+$/)){
    if(name=='principle'){
    setPrinciple(value);
    setIsPrinciple(true)
   }
   else if (name ==='rate'){
    setRate(value);
    setIsRate(true);

   }
  }
   else{
    if(name === 'principle'){
    setPrinciple(value);
    setIsPrinciple(false)
   }
   else if(name ==='rate'){
   setRate(value)
  setIsRate(false)
  }
}
  }
  return (

    <div className='d-flex justify-content-center align-items-center w-100 mt-5' style={{height:"90vh"}}>
      <div style={{width:"500px"}} className='bg-light p-5 rounded'>
      <h2>Simple interest</h2>
      <p>Calculate your simple interest easily</p>
      <div style={{height:"150px"}} className='flex-column mt-5 bg-warning d-flex justify-content-center align-items-center w-100 rounded'>
        <h3>{'\u20B9'}{Interest}</h3>
        <p>Total Simple interest</p>
      </div>
      <form action=''className='mt-5' onSubmit={(e)=> handlesubmit(e)}>
        <div className='mb-5'>
        <TextField name="principle" id="outlined-basic" label="principle amount" variant="outlined"className='w-100' value={principle} 
        onChange={(e)=>validate(e)} />
        </div>
        {! IsPrinciple &&
        <div>
          <p className='text-danger'>Invalid input</p>
          </div>}
        <div className='mb-5'>
        <TextField  name="rate"id="outlined-basic" label="Rate of interest (pa)% " variant="outlined"className='w-100' value={Rate} 
        onChange={(e)=>validate(e)}
        />
        </div>
        {! israte &&
        <div className='mb-3'>
        <TextField id="outlined-basic" label="Year(yr)" variant="outlined"className='w-100' value={Year} onChange={(e)=>setYear(e.target.value) }/>
        </div>}
        <div className='mb-5'>
        <Stack direction="row" spacing={2}>
          <Button disabled={!IsPrinciple || !israte || !isyear} style={{height:"50px",width:"200px"}} variant="contained" className='bg-success'type='submit'>CALCULATE</Button>
          <Button style={{height:"50px",width:"200px"}} variant="contained" className='bg-grey'>RESET</Button>
          </Stack>
        </div>
      </form>
    </div>
    </div>
  );
}

export default App;
