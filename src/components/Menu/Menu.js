/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import "./Menu.css";

const Menu = ({ onClick }) => {
  return (
    <div className="Menu">
      <button className="StartButton" onClick={onClick}>
        PLAY TETRIS
      </button>
    </div>
  );
};

export default Menu;
