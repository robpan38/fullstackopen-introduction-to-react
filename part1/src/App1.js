const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Part = ({ part }) => {
  return (
    <>
      <p>
        {part.name} {part.exercises}
      </p>
    </>
  );
};

const Content = ({ course }) => {
  const parts = course.parts;

  return (
    <>
      <Part part={parts[0]}></Part>
      <Part part={parts[1]}></Part>
      <Part part={parts[2]}></Part>
    </>
  );
};

const Total = ({ course }) => {
  const parts = course.parts;

  return (
    <>
      <p>
        Number of exercises:{" "}
        {parts[0].exercises + parts[0].exercises + parts[0].exercises}
      </p>
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course}></Header>
      <Content course={course}></Content>
      <Total course={course}></Total>
    </div>
  );
};

export default App;
