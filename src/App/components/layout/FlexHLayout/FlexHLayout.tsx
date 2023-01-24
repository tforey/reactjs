import React, { ReactElement } from "react";
import PropTypes from "prop-types";
import style from "./FlexHLayout.module.css";
interface IFlexHLayoutProps {
  style?: {};
  children: Array<ReactElement>;
}
const FlexHLayout: React.FC<IFlexHLayoutProps> = (props) => {
  return (
    <div
      className={style.FlexHLayout}
      data-testid="FlexHLayout"
      style={props.style}
    >
      {props.children}
    </div>
  );
};

FlexHLayout.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any.isRequired,
};

FlexHLayout.defaultProps = {};
export default FlexHLayout;
