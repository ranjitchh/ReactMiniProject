import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/ranjitchh").then((response) => {
      response.json().then((data) => {
        setData(data);
        console.log(data);
      });
    });
  }, []);
  return (
    <>
     <div className="bg-gray-700 flex items-center flex-col">
       
      <h2 className="text-white text-2xl">Github Followers: {data.followers}</h2>
      <img src={data.avatar_url} alt="" />
     </div>
    </>
  );
}

export default Github;
