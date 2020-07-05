import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap/'


export class ModalShow extends Component {
    
    render() {
        return (
            <Modal centered size="sm" show={this.props.showModal} aria-labelledby="example-modal-sizes-title-sm">
              <Modal.Body>
                  <center>Successfully added data</center>
              </Modal.Body>
              <Modal.Footer>
                  <Button onClick={this.props.hideModal}>Close</Button>
              </Modal.Footer>
            </Modal>
        )
    }
}

export default ModalShow
