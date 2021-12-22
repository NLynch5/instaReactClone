import React, { useState, useEffect } from "react";

const Api = async () => {
  const [pics, setPics] = useState([]);
  //useState const name must have a capital letter
  try {
    const response = await fetch("https://picsum.photos/v2/list/8");
    const data = await response.json();
    setPics(data);
    //return data;
  } catch (err) {
    console.log(err);
  }

  useEffect(() => {
    Api(); //call the API in an anonymous function with the useEffect
  }, []);

  return (
    <div>
      {pics.map((items, index) => {
        //map the array of items from the top of the pics api
        return (
          <img className="mainImage" scr={items.download_url} key={index}></img>
          //need to point to the correct line required in the API object, in this example download_url and don't forget to add a key.
        );
      })}
    </div>
  );
};

export default Api;
