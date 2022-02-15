import { useState } from "react";

const App2 = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });

  return (
    <div>
      {clicks.left}
      <button
        onClick={() => {
          let newClicks = { left: clicks.left + 1, right: clicks.right };
          setClicks(newClicks);
        }}
      >
        left
      </button>
      <button
        onClick={() => {
          let newClicks = { left: clicks.left, right: clicks.right + 1 };
          setClicks(newClicks);
        }}
      >
        right
      </button>
      {clicks.right}
    </div>
  );
};

export default App2;
