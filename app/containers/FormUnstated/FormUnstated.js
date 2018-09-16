import React from 'react';
import { Form, Field } from 'react-final-form';
import { Provider, Subscribe, Container } from 'unstated';

const fakeError = () =>
  new Promise(r => setTimeout(r, 5000, { username: 'fakeError' }));

class CounterContainer extends Container {
  state = {
    count: 0,
  };

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  submit = async () => {
    await fakeError();
    return { username: 'fff' };
  };
}

const FormComponent = props => {
  return (
    <Subscribe to={[CounterContainer]}>
      {counter => (
        <Form
          onSubmit={counter.submit}
          render={({ handleSubmit, values }) => (
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
    </Subscribe>
  );
};

export default () => (
  <Provider>
    <FormComponent />
  </Provider>
);
