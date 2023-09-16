import React, { useState } from "react";
import Element from "./components/Element";
import NewElement from "./components/NewElement";
import EditElement from "./components/EditElement";
import { v4 as uuidv4 } from "uuid";

import folder from "./images/folder.svg";

import "./App.css";

function App() {
  const [addShow, setAddShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [placeHolder, setPlaceHolder] = useState("");
  const [id, setId] = useState("");
  const [elementTree, setElementTree] = useState([
    { id: 0, title: "Root", icon: folder },
  ]);

  function addElement(title) {
    let newElement = {
      id: uuidv4(),
      title,
      icon: folder,
    };
    setElementTree([...elementTree, newElement]);
  }

  function editElement(id, title) {
    if (id === 0) {
      alert("You can not edit Root");
      return;
    }
    const updatedElementTree = elementTree.map((element) => {
      if (id === element.id) {
        return {...element, title}
      }
      return element;
    })
    setElementTree(updatedElementTree);
  }

  return (
    <>
      <Element
        setId={setId}
        elementTree={elementTree}
        setElementTree={setElementTree}
        setAddShow={setAddShow}
        setEditShow={setEditShow}
        setPlaceHolder={setPlaceHolder}
      />
      <NewElement show={addShow} setShow={setAddShow} addElement={addElement} />
      <EditElement
        id={id}
        show={editShow}
        setShow={setEditShow}
        editElement={editElement}
        placeHolder={placeHolder}
      />
    </>
  );
}

export default App;
