import React, { useState } from "react";
import Element from "./components/Element";
import { v4 as uuidv4 } from "uuid";

import folder from "./images/folder.svg";

import "./App.css";
import NewModal from "./components/NewModal";

function App() {
  const [show, setShow] = useState(false);
  const [modalHeading, setModalHeading] = useState("");
  const [placeHolder, setPlaceHolder] = useState("");
  const [elementTree, setElementTree] = useState([
    {id: 0, title: "Root", icon: folder },
  ]);

  function addElement(title) {
    let newElement = {
      id: uuidv4(),
      title,
      icon: folder,
    };
    console.log('added')
    setElementTree([...elementTree, newElement]);
  };

  console.log(elementTree);

  return (
    <>
      <Element
        elementTree={elementTree}
        setShow={setShow}
        setModalHeading={setModalHeading}
        setPlaceHolder={setPlaceHolder}
      />
      <NewModal
        show={show}
        setShow={setShow}
        addElement={addElement}
        modalHeading={modalHeading}
        placeHolder={placeHolder}
      />
    </>
  );
}

export default App;
