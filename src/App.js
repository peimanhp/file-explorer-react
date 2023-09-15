import React, { useState } from "react";
import Element from "./components/Element";
import NewElement from "./components/NewElement";
// import EditElement from "./components/EditElement";
import { v4 as uuidv4 } from "uuid";

import folder from "./images/folder.svg";

import "./App.css";

function App() {
  const [show, setShow] = useState(false);
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

  return (
    <>
      <Element
        elementTree={elementTree}
        setElementTree={setElementTree}
        setShow={setShow}
        setPlaceHolder={setPlaceHolder}
      />
      <NewElement show={show} setShow={setShow} addElement={addElement} />
      {/* <EditElement
        show={show}
        setShow={setShow}
        addElement={addElement}
        placeHolder={placeHolder}
      /> */}
    </>
  );
}

export default App;
