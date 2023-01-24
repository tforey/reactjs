import React, { useState } from "react";
import PropTypes from "prop-Types";
import style from "./MemeForm.module.css";
interface IMemeFormProps {
    style?:{}
}
const initialState={}
const MemeForm: React.FC<IMemeFormProps> = (props) => {
  const[state,setstate] = useState(initialState)

  return (
    <div className={style.MemeForm} 
        data-testid="MemeForm"
        style={props.style}>
      memeForm
    </div>
  );
};

MemeForm.propTypes = {
  style: PropTypes.object,
};
MemeForm.defaultProps = {};
export default MemeForm;
