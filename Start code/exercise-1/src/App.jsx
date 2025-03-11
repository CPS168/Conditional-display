import Scores from "./components/Scores.jsx"
import Header from "./components/Header.jsx"
import {HTML_RESULTS} from './data.js'

function App() {
  return (
    <>
      <Header name = "CPS"/>

      <main className="scores-container">
        <Scores courseName = "HTML" courseResults = {HTML_RESULTS}/>
      </main>
    </>
  );
}

export default App;
