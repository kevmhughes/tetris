/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/self-closing-comp */
import "./BoardCell.css";

const BoardCell = ({ cell }) => (
  <div className={`BoardCell ${cell.className}`}>
    <div className="Sparkle"></div>
  </div>
);

export default BoardCell;
