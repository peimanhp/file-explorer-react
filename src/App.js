import React, { useState } from "react";
import Element from "./components/Element";
import NewElement from "./components/NewElement";
import EditElement from "./components/EditElement";
import { v4 as uuidv4 } from "uuid";

import folder from "./images/folder.svg";
import html from "./images/html5.svg";
import css from "./images/css3.svg";
import js from "./images/js.svg";
import txt from "./images/text.svg";
import unknownFile from "./images/unknownFile.svg";

import "./App.css";
import NewFile from "./components/NewFile";

function App() {
  const [addShow, setAddShow] = useState(false);
  const [showFile, setShowFile] = useState(false);
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

  function addFile(title) {
    let extention = null;
    let icon = null;
    if (title.indexOf(".") > -1) {
      extention = title.split(".").pop();
      console.log(extention);
      switch (extention) {
        case "html":
          icon = html;
          break;
        case "css":
          icon = css;
          break;
        case "js":
          icon = js;
          break;
        case "txt":
          icon = txt;
          break;
      }
    } else icon = unknownFile;
    console.log(icon);
    let newFile = {
      id: uuidv4(),
      title,
      icon,
    };
    setElementTree([...elementTree, newFile]);
  }

  function editElement(id, title) {
    if (id === 0) {
      alert("You can not edit Root");
      return;
    }
    const updatedElementTree = elementTree.map((element) => {
      if (id === element.id) {
        return { ...element, title };
      }
      return element;
    });
    setElementTree(updatedElementTree);
  }

  return (
    <>
      <Element
        setId={setId}
        elementTree={elementTree}
        setElementTree={setElementTree}
        setAddShow={setAddShow}
        setShowFile={setShowFile}
        setEditShow={setEditShow}
        setPlaceHolder={setPlaceHolder}
      />
      <NewElement show={addShow} setShow={setAddShow} addElement={addElement} />
      <NewFile show={showFile} setShow={setShowFile} addFile={addFile} />
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
