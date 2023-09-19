import React, { useState } from "react";
import Element from "./components/Element";
import NewElement from "./components/NewElement";
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
  const [placeHolder, setPlaceHolder] = useState("");
  const [id, setId] = useState("");
  const [element, setElement] = useState("");
  const [elementTree, setElementTree] = useState([
    { id: 0, title: "Root", icon: folder, type: "folder", children:[], isOpen: true },
  ]);

  function addElement(title , element) {
    let type = "folder"
    if (!isSame(title, type)) {
      let newElement = {
        id: uuidv4(),
        title,
        icon: folder,
        type: "folder",
        children: [],
        isOpen: true
      };
      console.log(element)
      element.children.push(newElement);      
    }    
  }

  function addFile(title, element) {
    let type = "file"
    if (!isSame(title, type)) {
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

    function isSame(title, type) {
    let same = false;
    for (const el of element.children) {
      if (el.title.toLowerCase() === title.toLowerCase() && el.type === type) {
        same = true;
      }
    }
    if (same) alert("please enter a different title!");
    return same;
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
    } else return (icon = unknownFile);
  }

   return (
     <>
       <Element
         setId={setId}
         elementTree={elementTree}
         setElementTree={setElementTree}
         setAddShow={setAddShow}
         setShowFile={setShowFile}         
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
     </>
   );
}

export default App;
