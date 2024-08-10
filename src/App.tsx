import { CurrentWeather } from "./components/CurrentWeather";
import { InputForm } from "./components/InputForm";

function App() {
  return (
    <main className="bg-gray1 flex flex-col items-center p-3">
      <InputForm />
      <CurrentWeather temperature={12} description="hello" humidity={12} location="mumbai"/>
    </main>
  );
}

export default App;
