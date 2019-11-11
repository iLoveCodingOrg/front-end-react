import React from 'react'
import Modal from 'react-modal'
import ProgressBar from '../../ProgressBar'

export default function SignupModal({ isModalOpen, closeModal }) {
  Modal.setAppElement('#app')
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      style={{
        content: {
          minWidth: '320px',
          maxWidth: '700px',
          padding: '0px',
          top: '10px',
          left: '0px',
          right: '0px',
          bottom: 'auto',
          margin: '0px auto auto',
          maxHeight: '500px',
          overflow: 'scroll',
        },
        overlay: {
          backgroundColor: 'rgba(0,0,0, 0.50)',
        },
      }}
    >
      <div className="p-3 t-center">
        <button
          type="button"
          onClick={closeModal}
          className="p-absolute h2 b-0 color-gray-light f-300 p--25"
          style={{ top: 0, right: 0 }}
        >
          X
        </button>
        <ProgressBar percent={50} className="mb-2" />
        <h2>Where should we send a link to the training? Enter your best email so you get it!</h2>
        <input
          autoFocus
          name="first_name"
          type="text"
          placeholder="First Name"
          className="mb-1"
        />
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          className="mb-1"
        />
        <input
          type="submit"
          value="Access the training Now >>"
          className="btn btn-primary btn-block"
        />
        <small className="color-gray">We DO NOT tolerate SPAM and will never share your email.</small>
      </div>
    </Modal>
  )
}
