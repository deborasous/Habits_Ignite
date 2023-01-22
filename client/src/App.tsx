import { Habits } from "./components/Habits";

import "./styles/global.css";

function App() {
  return (
    <div className="App">
      <Habits completed={3} />
      <Habits completed={10} />
      <Habits completed={15} />
      <Habits completed={9} />
    </div>
  );
}

export default App;
