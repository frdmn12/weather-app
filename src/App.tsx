import Background from "./components/Background";
import { CurrentWeather } from "./components/CurrentWeather";
import { InputForm } from "./components/InputForm";

function App() {
  return (
    <div className="relative z-10">
      <Background />
      <main className=" flex flex-col flex-center nav-height relative z-20">
        <InputForm />
        <CurrentWeather
          temperature={12}
          description="Yes its raining"
          humidity={12}
          location="mumbai"
          wind={10}
        />
      </main>
    </div>
  );
}

export default App;
