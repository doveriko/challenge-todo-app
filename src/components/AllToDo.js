import React from "react";
import { Link } from "react-router-dom";

const AllToDo = props => {
  return (
    <div>
      {props.lists.map(oneList => {
        return (
          <div key={oneList._id}>
            <h2>{oneList.title}</h2>
            <Link to={`/${oneList._id}`}>
              <button>See details</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AllToDo;
