import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root')

const TestimonialsPopup = ({ isOpen, onRequestClose, content }) => {
  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={{
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)'

            },
        }}>
            <button onClick={onRequestClose} style={{float: 'right'}}>Close Modal</button>
            <div>{content}</div>
    </Modal>
  )
}

export default TestimonialsPopup