import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { lifecycle, withProps } from 'recompose';

import Form from './Form';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { getData } from './selectors';
import { requestForm, requestFormSuccess } from './actions';

const withReducer = injectReducer({ key: 'form', reducer });
const withSaga = injectSaga({ key: 'form', saga });

const mapStateToProps = createStructuredSelector({
  data: getData,
});

export function mapDispatchToProps(dispatch) {
  return {
    onSubmitForm: v => {
      dispatch(requestForm(v));
    },
    testRequest: (v = {}) => {
      dispatch(requestFormSuccess(v));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withProps(() => ({
    err: {
      username: { value: 'test', err: 'bad test' },
    },
  })),
  // lifecycle({
  //   componentDidMount() {
  //     this.test = 'asd';
  //   },
  // }),
)(Form);
