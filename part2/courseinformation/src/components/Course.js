const Part = ({ course }) => {
  return (
    <li>
      <h2>{course.name}</h2>
      <ul>
        {course.parts.map((part) => (
          <li key={part.id}>
            {part.name} {part.exercises}
          </li>
        ))}
      </ul>
    </li>
  );
};

const Header = () => {
  return (
    <div>
      <h1>Web development Curriculum</h1>
    </div>
  );
};

const Content = ({ courses }) => {
  return (
    <div>
      <ul>
        {courses.map((course) => {
          return (
            <div key={course.id}>
              <Part course={course} />
              <Total course={course} />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

const Total = ({ course }) => {
  const total = course.parts.reduce((acc, curr) => {
    return acc + curr.exercises;
  }, 0);

  return (
    <div>
      <h3>Total of {total} exercises</h3>
    </div>
  );
};

const Courses = ({ courses }) => {
  return (
    <div>
      <Header courses={courses} />
      <Content courses={courses} />
    </div>
  );
};

export default Courses;
