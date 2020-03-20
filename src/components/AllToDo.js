import React from "react";

const AllToDo = props => {
  return (
    <div>
      {props.lists.map(oneList => {
        return (
          <div key={oneList._id}>
            <h2>{oneList.title}</h2>
            <p>{oneList.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AllToDo;