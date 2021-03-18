import React from "react";

const Button = ({ people, clearList, refresh }) => {
  return (
    <button onClick={people.length >= 1 ? clearList : refresh}>
      {people.length >= 1 ? "clearList" : "refresh"}
    </button>
  );
};

export default Button;
