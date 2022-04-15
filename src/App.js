import { createContext, useState } from "react";
import Stepper from "./components/Stepper";
export const FormContext = createContext();

function App() {
  const [activeStepIndex, setActiveStepIndex] = useState(2);
  return (
    <FormContext.Provider value={{ activeStepIndex }}>
      <div className="w-screen h-screen flex flex-col items-center justify-start">
        <Stepper />
      </div>
    </FormContext.Provider>
  );
}

export default App;
