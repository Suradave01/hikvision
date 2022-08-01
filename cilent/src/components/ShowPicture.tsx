import React from "react";
import axios from "axios";

const ShowPicture = () => {
  React.useEffect(() => {
    axios.get(`/picture`).then((res) => {
      setPicture(res.data);
    });
  });
  const [picture, setPicture] = React.useState("");
  return <div>{picture}</div>;
};

export default ShowPicture;
