import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

type InputFormProps = {
  onSearch: (city: string) => void;
};

export function InputForm({onSearch} : InputFormProps ) {

  const [location, setLocation] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  }
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(location);
    setLocation("");
  };

  return (
    <section className="flex flex-col justify-center items-center p-3">
      <form action="" onSubmit={handleSubmit} className="flex items-center justify-center">
        <input
          type="text"
          className="rounded-2xl bg-black border-black shadow-lg mx-2 p-2 text-white text-center border-2"
          placeholder="Enter your city"
          value={location}
          onChange={ handleChange }
        />
        <button
          type="submit"
          className="rounded-full bg-white p-2 border-2 border-black text-black shadow-lg hover:bg-black  hover:text-white"
        >
          <IoIosSearch size={20} />
        </button>
      </form>
    </section>
  );
}
