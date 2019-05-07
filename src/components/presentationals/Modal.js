import React from 'react';
import { connect } from 'react-redux';
import '../../styles/modal.scss';

import { setLogInModal, setSignUpModal } from '../../store/actions/modals';

function Modal({ children, bgColor, width, height, setLogInModalStatus, setSignUpModalStatus }) {
  const quittingModals = () => {
    setLogInModalStatus(false);
    setSignUpModalStatus(false);
  };

  return (
    <div className="modal-wrapper">
      <a className="modal-close" onClick={() => quittingModals()}>
        X
      </a>
      <div className="modal-container" 
      style={{ width, 
        height, 
        backgroundColor: bgColor
        }}>
        {children}
      </div>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  setLogInModalStatus: (status) => dispatch(setLogInModal(status)),
  setSignUpModalStatus: (status) => dispatch(setSignUpModal(status)),
});

export default connect(null, mapDispatchToProps)(Modal);