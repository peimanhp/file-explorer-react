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
  const [element, setElement] = useState("");
  const [elementTree, setElementTree] = useState([
    { id: 0, title: "Root", icon: folder, type: "folder", children:[] },
  ]);

  function addElement(title , element) {
    if (!isSame(title)) {
      let newElement = {
        id: uuidv4(),
        title,
        icon: folder,
        type: "folder",
        children: [],
      };
      console.log(element)
      element.children.push(newElement);      
    }    
  }

  function addFile(title, element) {
    if (!isSame(title)) {
      let newFile = {
        id: uuidv4(),
        title,
        icon: getIcon(title),
        type: "file",
        children: [],
      };
      element.children.push(newFile);      
    }
  }

    function isSame(title) {
    let same = false;
    for (const element of elementTree) {
      if (element.title === title) {
        same = true;
      }
    }
    if (same) alert("please enter a different title!");
    return same;
  }

  function editElement(id, title) {
    if (id === 0) {
      alert("You can not edit Root");
      return;
    }
    const updatedElementTree = elementTree.map((element) => {
      if (id === element.id) {
        return { ...element, title, icon: getIcon(title) };
      }
      return element;
    });
    setElementTree(updatedElementTree);
  }

  function getIcon(fileName) {
    let extention = null;
    let icon = null;
    if (fileName.indexOf(".") > -1) {
      extention = fileName.split(".").pop();
      switch (extention) {
        case "html":
          return (icon = html);
        case "css":
          return (icon = css);
        case "js":
          return (icon = js);
        case "txt":
          return (icon = txt);
        default:
          return (icon = unknownFile);
      }
    } else return (icon = folder);
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
         setElement={setElement}
         element={element}         
       />
       <NewElement
         show={addShow}
         setShow={setAddShow}
         addElement={addElement}
         element={element}
       />
       <NewFile
         show={showFile}
         setShow={setShowFile}
         addFile={addFile}
         element={element}
       />
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
