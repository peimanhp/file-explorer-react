import React from "react";
import newFolder from "../images/new-folder.svg";
import newFile from "../images/new-file.svg";
import editFile from "../images/edit.svg";
import trash from "../images/trash.svg";
import { v4 as uuidv4 } from "uuid";

function Element({
  setId,
  setAddShow,
  setEditShow,
  elementTree,
  setElementTree,
  setPlaceHolder,
}) {
  const handleAddElement = () => {
    setPlaceHolder("");
    setAddShow(true);
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

  return elementTree.map((element) => (
    <div key={uuidv4()} className="btn-wrapper">
      <button className="btn btn-light btn-folder">
        <img className="icons" src={element.icon} alt="element" />
        <p>{element.title}</p>
      </button>
      <div className="operators-wrapper">
        <button
          onClick={handleAddElement}
          className="btn btn-light btn-operators"
        >
          <img className="icons" src={newFolder} alt="new-folder" />
        </button>
        <button className="btn btn-light btn-operators">
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
  ));
}

export default Element;
