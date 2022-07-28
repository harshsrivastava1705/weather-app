import React from "react";
import ReactLoading from "react-loading";
import "./loader.css";
export default function Loader() {
  return (
    <div>
      <ReactLoading
        id="load"
        type="spin"
        color="#0000FF"
        height={400}
        width={300}
      />
    </div>
  );
}
