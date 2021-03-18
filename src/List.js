import React from "react";

const List = ({ people }) => {
  return (
    <>
      {React.Children.toArray(
        people.map((person) => {
          const { name, age, image } = person;
          return (
            <article className="person">
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age}</p>
              </div>
            </article>
          );
        })
      )}
    </>
  );
};

export default List;
