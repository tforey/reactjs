import React, { useState } from "react";
import PropTypes from "prop-types";
import style from "./TemplateName.module.css";
interface ITemplateNameProps {
    style?:{}
}
const initialState={}
const TemplateName: React.FC<ITemplateNameProps> = (props) => {
  const[state,setstate] = useState(initialState)

  return (
    <div className={style.TemplateName} 
        data-testid="TemplateName"
        style={props.style}>
      templateName
    </div>
  );
};

TemplateName.propTypes = {
  style: PropTypes.object,
};
TemplateName.defaultProps = {};
export default TemplateName;
