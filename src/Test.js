import React, { useState } from "react";

const Test = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  console.log("list ", list);

  const deleteHandler = (value) => {
    console.log("delete", value);
    var filterList = list.filter((item) => 
      item !== value
    );
    setList(filterList);      
    console.log(filterList);
  };
  

  return (
    <div>
      Hello
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(name);
          setName("");
          setList([...list, name]);
        }}
      >
        <input
          type="text"
          value={name}
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
      {list.map((value, index) => (
        <div key={index}>
          <h1>{value}</h1>
          <button onClick={() => deleteHandler(value)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default Test;
