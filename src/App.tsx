import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Header from "./components/header/Header";
import { Question } from "./components/question/Question";
import { Participants } from "./components/participants/Participants";
import { Wheel } from "./components/wheel/Wheel";

const Main = styled.main`
  display: flex;
  justify-content: space-around;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

function App() {
  const [names, setNames] = useState<string[]>([]);

  const handleAddName = (name: string) => {
    if (names.length < 100) {
      setNames([...names, name]);
    }
  };

  const handleRemoveName = (index: number) => {
    setNames(names.filter((_, i) => i !== index));
  };

  const shuffleNames = () => {
    const shuffledNames = [...names].sort(() => Math.random() - 0.5);
    setNames(shuffledNames);
  };

  const sortNames = () => {
    const sortedNames = [...names].sort((a, b) => a.localeCompare(b));
    setNames(sortedNames);
  };

  return (
    <>
      <Header />
      <Question />
      <Main>
        <Participants
          handleAddName={handleAddName}
          handleRemoveName={handleRemoveName}
          shuffleNames={shuffleNames}
          sortNames={sortNames}
          names={names}
        />
        <Wheel participants={names} />
      </Main>
    </>
  );
}

export default App;
