
import Modal from 'react-bootstrap/Modal';
function Signin(signinShow,setSigninShow){

    return(
        <Modal
        size="sm"
        show={signinShow}
        onHide={setSigninShow}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Small Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    );
}

export default Signin;