import React from "react";
import Bdblogo from "../assets/headerbdb.svg"

const Headerbdb = () => {
  return (
    <React.Fragment>
                  <img
              src={Bdblogo}
              style={{ height:"100%" , width: "100%" }}
              alt="logo-BdB"
            />
    </React.Fragment>

  );
};

export default Headerbdb;