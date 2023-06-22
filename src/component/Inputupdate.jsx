import React from "react";
import '.././index.css'

const Inputupdate = ({type, value}) => {
  return (
    <>
<div class="form-group">
  <input type={type} class="form-control" required/>
  <label class="form-label">{value}</label>
</div>



    </>
  );
};

export default Inputupdate;
