import { useState } from "react";
import { PropTypes } from "prop-types";

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }
  return <div>button press history: {props.allClicks.join("")}</div>;
};

History.propTypes = {
  allClicks: PropTypes.array,
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

Button.propTypes = {
  handleClick: PropTypes.func,
  text: PropTypes.string,
};

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
    setTotal(left + right);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
    setTotal(left + right);
  };

  return (
    <div>
      <div>
        {left}
        <Button handleClick={handleLeftClick} text="left" />
        <Button handleClick={handleRightClick} text="right" />
        {right}
        <history allClicks={allClicks} />
      </div>
    </div>
  );
};

export default App;
