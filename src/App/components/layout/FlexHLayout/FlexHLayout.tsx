import React, { useState } from "react";
import PropTypes from "prop-Types";
import style from "./FlexHLayout.module.css";
interface IFlexHLayoutProps {
    style?:{}
}
const initialState={}
const FlexHLayout: React.FC<IFlexHLayoutProps> = (props) => {
  const[state,setstate] = useState(initialState)

  return (
    <div className={style.FlexHLayout} 
        data-testid="FlexHLayout"
        style={props.style}>
      flexHLayout
    </div>
  );
};

FlexHLayout.propTypes = {
  style: PropTypes.object,
};
FlexHLayout.defaultProps = {};
export default FlexHLayout;
