import React from 'react';
 import { useFormik } from 'formik';

 const SignupForm = () => {
   // Pass the useFormik() hook initial form values and a submit function that will
   // be called when the form is submitted
   const formik = useFormik({
     initialValues: {
       email: '',
       data: '',
       valor:''
     },
     onSubmit: values => {
       console.log(JSON.stringify(values, null, 2));

     },
   });
   return (
     <form onSubmit={formik.handleSubmit}>
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
       {/* <InputMask mask="99/99/9999" name="data" value={formik.values.data} onChange={formik.handleChange} /> */}
    
       <pre>{JSON.stringify(formik.values, null, 2)}</pre>
       <button type="submit">Submit</button>
     </form>
   );
};
 
export default SignupForm