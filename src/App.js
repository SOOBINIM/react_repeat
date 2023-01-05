import CounterContainer from "./containers/CounterContainer";
import TodoContainer from "./containers/TodoContainer";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<CounterContainer />} />
        <Route path="/todo" element={<TodoContainer />} />
      </Routes>
    </div>
  )
}

export default App;

