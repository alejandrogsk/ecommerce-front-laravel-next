/**
 * This custom hook handle the inputs form a form
 */

 import React from 'react';

 const useForm = ( initialState = {} ) => {
     
     const [values, setValues] = React.useState(initialState);
 
     const reset = ()=> {
         setValues( initialState );
     }
 
     const handleInputChange = (e) => {
         setValues({
             ...values,
             [ e.target.name ]: e.target.value
         });
     }
 
     return [ values, handleInputChange, reset ];
 }
 
 export default useForm;