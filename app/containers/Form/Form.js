import React from 'react';
import { Form, Field } from 'react-final-form';
import MakeAsyncFunction from 'react-redux-promise-listener';

import { reduxPromiseListener } from '../../configureStore';
import { FORM_REQUEST, FORM_SUCCESS, FORM_FAILURE } from './constants';

function trueValid(err) {
  return all => {
    const errors = {};
    Object.keys(err).forEach(key => {
      if (err[key].value === all[key]) {
        errors[key] = err[key].err;
      }
    });
    return errors;
  };
}

const FormComponent = props1 => {
  return (
    <MakeAsyncFunction
      listener={reduxPromiseListener}
      start={FORM_REQUEST}
      resolve={FORM_SUCCESS}
      reject={FORM_FAILURE}
    >
      {onSubmit => (
        <Form
          onSubmit={onSubmit}
          subscription={{ submitting: true, pristine: true }}
          initialValues={{ username: 'test' }}
          validate={trueValid(props1.err)}
          render={({ handleSubmit, values, valid, submitErrors, ...rest }) => (
            <form onSubmit={handleSubmit}>
              <Field
                name="username"
                validate={v => (v === 'test2' ? 'bad test2' : undefined)}
              >
                {({ input, meta }) => (
                  <div>
                    <label>Username</label>
                    <input {...input} type="text" placeholder="Username" />
                    {meta.error && (
                      <span style={{ color: 'red' }}>Error {meta.error}</span>
                    )}
                    {meta.submitError && (
                      <span style={{ color: 'red' }}>
                        Error {meta.submitError}
                      </span>
                    )}
                  </div>
                )}
              </Field>
              <div className="buttons">
                <button type="submit">Submit</button>
              </div>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
          )}
        />
      )}
    </MakeAsyncFunction>
  );
};

export default FormComponent;
