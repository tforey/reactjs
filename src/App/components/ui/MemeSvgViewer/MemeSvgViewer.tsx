import React, { useState } from "react";
import PropTypes from "prop-types";
import style from "./MemeSvgViewer.module.css";
interface IMemeSvgViewerProps {
    style?:{}
}
const initialState={}
const MemeSvgViewer: React.FC<IMemeSvgViewerProps> = (props) => {
  const[state,setstate] = useState(initialState)

  return (
    <div className={style.MemeSvgViewer} 
        data-testid="MemeSvgViewer"
        style={props.style}>
      memeSvgViewer
    </div>
  );
};

MemeSvgViewer.propTypes = {
  style: PropTypes.object,
};
MemeSvgViewer.defaultProps = {};
export default MemeSvgViewer;
