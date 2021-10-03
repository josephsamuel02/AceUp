
import { Typography, Container,
    Button, TextField, Radio,RadioGroup,
    FormControlLabel, FormLabel
  } from "@material-ui/core";
  import { Link } from "react-router-dom";
  

import { useState, useRef, useContext  } from 'react';





const RegisterUser = () => {


    const nameInput = useRef();
    const emailInput = useRef();
    const phoneInput = useRef();
    const genderInput = useRef();
    const addressInput = useRef();
    const birthInput = useRef();
  
  
  const rednotice = <div className='alart'> * this field is requird</div>;
  
const [ lnk, setLnk ] = useState("/RegisterUser");
const [ alt, setLalt ] = useState(false);



const me = () => { 
    // e.preventDefault();
  
   let newinfo = {
      name:nameInput.current.value,
      email:emailInput.current.value,
      phone:phoneInput.current.value,
      gender:genderInput.current.value,
      address:addressInput.current.value,
      birthday:birthInput.current.value,
  
  }
  
  
  if( 
      nameInput.current.value 
      && emailInput.current.value &&
      phoneInput.current.value !== ''
  ){
   
 
     setLnk("/Home");
  
  }else{
    setLnk("/RegisterUser")
    setLalt(true)
  // return null
  }
  
  
  }
  


return ( <div className="registeruser">
       
       

    <Container className="formcontainer">
              

    <form noValidate autoComplete='off'>

    <br/> 
    <Typography
          // variant='h6'
          fontSize='small'
          // component=''
          color='textSecondary'
          >
           CREATE AN ACCOUNT
        </Typography>
    
        
        
        
        <br/> <br/>

        
        <FormLabel  > Stared (*) fields are required </FormLabel><br/> <br/>
        <TextField
        
        variant='outlined'
        label='Full Name'
        color='primary'
        fullWidth
        required
        inputRef={nameInput}
        />         
        { alt && rednotice}
        
        <br/> <br/>

        <TextField
        label='Email'
        type='email'
        variant='outlined'
        color='primary'
        fullWidth
        required
        inputRef={emailInput}
        />
        { alt && rednotice}
        
        
        <br/> <br/>
        
        
        <TextField
        
        label='Phone'
        variant='outlined'
        type="number"
        color='primary'
        required
        fullWidth
        inputRef={phoneInput}
        />
        { alt && rednotice}
        
      
          
         <br/> <br/>     
       
        <TextField
        
        label='Residential Adress'
        variant='outlined'
        color='primary'
        fullWidth
        inputRef={addressInput}
        />
         <br/> <br/>


        
        <FormLabel  >Gender</FormLabel>
        <RadioGroup  >
        <FormControlLabel inputRef={genderInput} value='male' control={ <Radio />} label='Male'/>
        <FormControlLabel value='female'  control={ <Radio />} label='Female'/>
        </RadioGroup>
        

        <br/> <br/>
         <FormLabel  >Date of Birth</FormLabel>
         <br/> <br/>
       
        
       <TextField
        
        type='date'
        variant='outlined'
        color='primary'
        fullWidth
        required
        inputRef={birthInput}
        />

        <br/> <br/>
        
         <br/>
        
        <Link to={lnk}> <Button
        type='submit'
        variant='contained'
        color='primary'
        fullWidth
        onClick={() => me()}
        >
         Submit
        </Button> </Link> 
    
      
    {/* <Link to={lnk}> <button
        type='submit'
        variant='contained'
        color='primary'
        fullWidth
        onClick={() => me()}
        >
         Submit
        </button> </Link>  */}

        <br/> <br/>   
        <br/> 

   


</form>

        
  
        </Container>
        
        <br/> <br/>

    </div> );
}
 
export default RegisterUser;