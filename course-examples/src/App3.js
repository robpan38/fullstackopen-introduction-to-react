import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Display = ({ value }) => {
  return <div>{value}</div>;
};

const App3 = () => {
  const [value, setValue] = useState(10);

  const handleClick = () => {
    console.log("clicked the button");
    setValue(0);
  };

  // function that returns a function lol
  const hello = (newValue) => () => {
    console.log("value now", newValue);
    setValue(newValue);
  };

  return (
    <div>
      <Display value={value} />
      {/* with function that returns another function */}
      {/* <button onClick={hello(1000)}>thousand</button>
      <button onClick={hello(0)}>reset</button>
      <button onClick={hello(value + 1)}>increment</button> */}

      {/* with normal functions */}
      <Button text="thousand" handleClick={() => setValue(1000)} />
      <Button text="reset" handleClick={() => setValue(0)} />
      <Button text="increment" handleClick={() => setValue(value + 1)} />
    </div>
  );
};

export default App3;
