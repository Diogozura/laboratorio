import * as React from 'react';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';

interface MyFormValues {
    firstName: string;
    email: string;
    password: string
}

export default function MyApp () {
    const initialValues: MyFormValues = {
        firstName: '',
        email: '',
        password: ''
    };
  return (
    <div>
      <h1>My Example</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="First Name" />
          <Field id="email" type="email" name="email" placeholder="email" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};