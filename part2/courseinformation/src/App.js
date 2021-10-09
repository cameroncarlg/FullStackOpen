import React from "react";
import Courses from "./components/Course";
import data from "./data";

const App = () => {
  return (
    <div>
      <Courses courses={data} />
    </div>
  );
};

// Adding comments for repo

export default App;
