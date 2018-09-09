import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Form from './Form';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { getData } from './selectors';
import { requestForm } from './actions';

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
)(Form);
