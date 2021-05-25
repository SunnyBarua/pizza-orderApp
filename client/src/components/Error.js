import React from "react";

const Error = ({ error }) => {
  return (
    <div style={{position:"absolute",left:"45%",top:"50%"}}>
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    </div>
  );
};

export default Error;
