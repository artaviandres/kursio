import React from 'react';
import { connect } from 'react-redux';
import '../../styles/modal.scss';

import { setLogInModal, setSignUpModal } from '../../store/actions/modals';

function Modal({ children, width, height, setLogInModalStatus, setSignUpModalStatus, onClose, style, closeTop }) {
  const quittingModals = () => {
    onClose && onClose();
    setLogInModalStatus(false);
    setSignUpModalStatus(false);
  };

  return (
    <div className="modal-wrapper">
      <a className="modal-close" onClick={() => quittingModals()} style={{ top: closeTop }}>
        X
      </a>
      <div className="modal-container" style={style}>
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