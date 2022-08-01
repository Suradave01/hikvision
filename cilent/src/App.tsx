import React from "react";
import ShowStream from "./components/ShowStream";
import StreamButton from "./components/StreamButton";
import ShowPicture from "./components/ShowPicture";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3030";

const App = () => {
  return (
    <div
      id="body"
      style={{
        margin: "20px",
      }}
    >
      <ShowPicture />
      {/* <ShowStream /> */}
      {/* <StreamButton /> */}
    </div>
  );
};

export default App;
