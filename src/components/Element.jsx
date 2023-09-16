import React, { useEffect, useRef, useState } from "react";
import newFolder from "../images/new-folder.svg";
import newFile from "../images/new-file.svg";
import editFile from "../images/edit.svg";
import trash from "../images/trash.svg";
import { v4 as uuidv4 } from "uuid";

function Element({
  setId,
  setAddShow,
  setShowFile,
  setEditShow,
  elementTree,
  setElementTree,
  setPlaceHolder,
  setElement,
  element,
  isRoot,
  setIsRoot,
}) {
  const [fatherEl, setFatherEl] = useState(null);

  useEffect(() => {
    setFatherEl(element);
  }, [element]);

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

  const handleEdit = (element) => {
    setId(element.id);
    setPlaceHolder(element.title);
    setEditShow(true);
  };

  const handleDelete = (id) => {
    if (id === 0) {
      alert("you can not delete Root");
      return;
    }
    const filtered = elementTree.filter((element) => element.id !== id);
    setElementTree(filtered);
  };

  return elementTree.map((element) => {
    return (
      <div key={uuidv4()}>
        {
          <div className="ms-4">
            {element.type === "folder" ? (
              <div key={uuidv4()} className="btn-wrapper">
                <button className="btn btn-light btn-folder">
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
                    onClick={() => handleEdit(element)}
                    className="btn btn-light btn-operators"
                  >
                    <img className="icons" src={editFile} alt="edit-file" />
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
                    onClick={() => handleEdit(element)}
                    className="btn btn-light btn-operators"
                  >
                    <img className="icons" src={editFile} alt="edit-file" />
                  </button>
                  <button
                    onClick={() => handleDelete(element.id)}
                    className="btn btn-light btn-operators"
                  >
                    <img className="icons" src={trash} alt="trash" />
                  </button>
                </div>
              </div>
            )}
            {element.children && (
              <Element
                elementTree={element.children}
                setId={setId}                
                setElementTree={setElementTree}
                setAddShow={setAddShow}
                setShowFile={setShowFile}
                setEditShow={setEditShow}
                setPlaceHolder={setPlaceHolder}
                setElement={setElement}
                element={element}
                isRoot={setIsRoot}
                setIsRoot={setIsRoot}
              />
            )}
          </div>
        }
      </div>
    );
  });
}

export default Element;
