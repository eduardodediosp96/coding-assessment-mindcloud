import "./App.css";
import StepListComponent from "./components/StepList";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faIcons } from "./common/faIcons";

library.add(...faIcons);

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <StepListComponent />
    </div>
  );
}

export default App;
