import React, { useState } from "react";
import "./App.css";

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

const Max = ({ voted, anecdotes, text }) => {
  if (voted.length === 0) {
    return (
      <div>
        <p>There are currently no votes</p>
      </div>
    );
  } else {
    const maxVoted = Math.max(...voted);
    return (
      <div>
        <h1>{text}</h1>
        <p>{anecdotes[voted.indexOf(maxVoted)]}</p>
        <p>with {maxVoted} votes</p>
      </div>
    );
  }
};

const Anecdote = ({ anecdotes, selected, voted, text }) => {
  return (
    <div>
      <h1>
        {text} {selected}
      </h1>
      <p>{anecdotes[selected]}</p>
      <p>this anecdote has {voted[selected]}</p>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [voted, setVoted] = useState([]);

  const getRandomInt = () => Math.floor(Math.random() * 7);

  const fillArray = () => {
    const temp = new Array(7).fill(0);
    return temp;
  };

  const updateVote = () => {
    if (voted.length === 0) {
      return fillArray();
    } else {
      const copy = [...voted];
      copy[selected] += 1;
      return copy;
    }
  };

  return (
    <div>
      {console.log(voted)}
      <Anecdote
        anecdotes={anecdotes}
        selected={selected}
        voted={voted}
        text="Anecdote of the day: "
      />
      <Button
        onClick={() => setSelected(getRandomInt())}
        text="Next Anecdote"
      />
      <Button onClick={() => setVoted(updateVote())} text="Vote" />
      <Max
        voted={voted}
        anecdotes={anecdotes}
        text={"Anecdote with most votes: "}
      />
    </div>
  );
};

export default App;
