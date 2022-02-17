import { useState } from "react";
import "./App.css";

const Button = ({ handle, text }) => {
  return <button onClick={handle}>{text}</button>;
};

const GiveFeedback = ({ handles }) => {
  return (
    <>
      <h1>give feedback</h1>
      <br></br>
      <div>
        <Button handle={handles[0]} text="good"></Button>
        <Button handle={handles[1]} text="neutral"></Button>
        <Button handle={handles[2]} text="bad"></Button>
      </div>
    </>
  );
};

const StatisticValue = ({ valueName, value }) => {
  return (
    <tr>
      <td>{valueName}</td>
      <td>
        {value} {valueName === "positive" ? "%" : ""}
      </td>
    </tr>
  );
};

const DisplayFeedback = ({ feedbacks }) => {
  return (
    <>
      <h1>statistics</h1>
      {feedbacks[feedbacks.length - 1].value !== 0 ? (
        <table>
          <StatisticValue
            valueName={feedbacks[0].name}
            value={feedbacks[0].value}
          ></StatisticValue>

          <StatisticValue
            valueName={feedbacks[1].name}
            value={feedbacks[1].value}
          ></StatisticValue>

          <StatisticValue
            valueName={feedbacks[2].name}
            value={feedbacks[2].value}
          ></StatisticValue>

          <StatisticValue
            valueName={feedbacks[feedbacks.length - 1].name}
            value={feedbacks[feedbacks.length - 1].value}
          ></StatisticValue>

          <StatisticValue
            valueName={feedbacks[3].name}
            value={feedbacks[3].value}
          ></StatisticValue>

          <StatisticValue
            valueName={feedbacks[4].name}
            value={feedbacks[4].value}
          ></StatisticValue>
        </table>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = () => {
    return good + neutral + bad;
  };

  const percentageOfPositiveFeedback = () => {
    return (100 * good) / total();
  };

  const average = () => {
    return (good - bad) / total();
  };

  const feedbackValues = [
    {
      name: "good",
      value: good,
    },
    {
      name: "neutral",
      value: neutral,
    },
    {
      name: "bad",
      value: bad,
    },
    {
      name: "average",
      value: average(),
    },
    {
      name: "positive",
      value: percentageOfPositiveFeedback(),
    },
    {
      name: "total",
      value: total(),
    },
  ];

  const handles = [
    () => {
      setGood(good + 1);
    },
    () => {
      setNeutral(neutral + 1);
    },
    () => {
      setBad(bad + 1);
    },
  ];

  return (
    <div className="app">
      <GiveFeedback handles={handles} />
      <DisplayFeedback feedbacks={feedbackValues} />
    </div>
  );
};

export default App;
