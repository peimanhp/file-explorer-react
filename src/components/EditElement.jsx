import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function EditElement({
  show,
  setShow,
  placeHolder,
  
}) {
  const [title, setTitle] = useState("");

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Update Title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            setShow(false);
          }}
        >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              placeholder={placeHolder ? placeHolder : null}
              autoFocus
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            setShow(false);
          }}
        >
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditElement;
