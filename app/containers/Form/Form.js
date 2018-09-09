import React from 'react';
import { Form, Field } from 'react-final-form';

const FormComponent = props => {
  console.log({ props });
  return (
    <Form
      onSubmit={props.onSubmitForm}
      initialValues={{ username: 'test' }}
      render={({
        handleSubmit,
        reset,
        submitting,
        pristine,
        validating,
        values,
      }) => (
        <form onSubmit={handleSubmit}>
          <Field name="username">
            {({ input, meta }) => (
              <div>
                <label>Username</label>
                <input {...input} type="text" placeholder="Username" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <div className="buttons">
            <button type="submit" disabled={submitting || validating}>
              Submit
            </button>
          </div>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    />
  );
};

export default FormComponent;
