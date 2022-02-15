import { useState } from "react";

/**
 * left and right in different states
 */

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  } else {
    return <div>button press history: {allClicks.join(" ")}</div>;
  }
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

function App() {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAllClicks] = useState([]);

  return (
    <div>
      {left}
      <Button
        text="left"
        handleClick={() => {
          setLeft(left + 1);
          setAllClicks(allClicks.concat("L"));
        }}
      />

      <Button
        text="right"
        handleClick={() => {
          setRight(right + 1);
          setAllClicks(allClicks.concat("R"));
        }}
      />
      {right}

      <br></br>
      <History allClicks={allClicks} />
    </div>
  );
}

export default App;
