import React, { useState } from "react";

import newFolder from "../images/new-folder.svg";
import newFile from "../images/new-file.svg";
import trash from "../images/trash.svg";

import { v4 as uuidv4 } from "uuid";

function Element({
  setId,
  setAddShow,
  setShowFile,
  elementTree,
  setElementTree,
  setPlaceHolder,
  setElement,
  element,
}) {
  const [count, setCount] = useState(0);

  const handleAddElement = (element) => {
    setPlaceHolder("");
    setAddShow(true);
    setElement(element);
  };

  const handleAddFile = (element) => {
    setElement(element);
    setPlaceHolder("");
    setShowFile(true);
  };

  const handleToggleFolder = (element) => {
    if (count % 2 === 0) element.isOpen = false;
    else element.isOpen = true;
    setCount(count + 1);    
  };

  const handleDelete = (id) => {
    if (id === 0) {
      alert("you can not delete Root");
      return;
    }
    const filtered = element.children.filter((el) => el.id !== id);
    element.children = filtered;
    setPlaceHolder(element.title);
  };

  return elementTree.map((element) => {
    return (
      <div key={uuidv4()}>
        {
          <div className="ms-4">
            {element.type === "folder" ? (
              <div key={uuidv4()} className="btn-wrapper">
                <button
                  onClick={() => handleToggleFolder(element)}
                  className="btn btn-light btn-folder"
                >
                  <img className="icons" src={element.icon} alt="element" />
                  <p>{element.title}</p>
                </button>
                <div className="operators-wrapper">
                  <button
                    onClick={() => {
                      handleAddElement(element);
                    }}
                    className="btn btn-light btn-operators"
                  >
                    <img className="icons" src={newFolder} alt="new-folder" />
                  </button>
                  <button
                    onClick={() => handleAddFile(element)}
                    className="btn btn-light btn-operators"
                  >
                    <img className="icons" src={newFile} alt="new-file" />
                  </button>
                  <button
                    onClick={() => handleDelete(element.id)}
                    className="btn btn-light btn-operators"
                  >
                    <img className="icons" src={trash} alt="trash" />
                  </button>
                </div>
              </div>
            ) : (
              <div key={uuidv4()} className="btn-wrapper">
                <button className="btn btn-light btn-folder">
                  <img className="icons" src={element.icon} alt="element" />
                  <p>{element.title}</p>
                </button>
                <div className="operators-wrapper">
                  <button
                    onClick={() => handleDelete(element.id)}
                    className="btn btn-light btn-operators"
                  >
                    <img className="icons" src={trash} alt="trash" />
                  </button>
                </div>
              </div>
            )}
            {element.children && element.isOpen === true && (
              <Element
                elementTree={element.children}
                setId={setId}
                setElementTree={setElementTree}
                setAddShow={setAddShow}
                setShowFile={setShowFile}
                setPlaceHolder={setPlaceHolder}
                setElement={setElement}
                element={element}
              />
            )}
          </div>
        }
      </div>
    );
  });
}

export default Element;
