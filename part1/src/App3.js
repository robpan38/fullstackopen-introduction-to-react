import { useState } from "react";

const Display = ({ counter }) => {
  return (
    <div>
      {counter}
    </div>
  );
}

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
}

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  return (
    <>
      <Display counter={counter}></Display>
      <Button text="plus" onClick={increaseByOne}></Button>
      <Button text="zero" onClick={setToZero}></Button>
      <Button text="minus" onClick={decreaseByOne}></Button>
    </>
  );
};

export default App;
