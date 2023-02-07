import "./Menu.css";

const Menu = ({ onClick }) => {
  return (
    <div className="Menu">
      <button className="Button" onClick={onClick}>
        PLAY TETRIS
      </button>
    </div>
  );
};

export default Menu;
