import React, { useState, useEffect } from "react";
import Button from "./Button";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);

  const clearList = () => {
    setPeople([]);
  };
  const refresh = () => {
    setPeople(people);
  };
  useEffect(() => {
    refresh();
  }, []);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} clearList={clearList} refresh={refresh} />
        <Button people={people} clearList={clearList} refresh={refresh} />
      </section>
    </main>
  );
}

export default App;
