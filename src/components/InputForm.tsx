import { IoIosSearch } from "react-icons/io";

export function InputForm() {
  return (
    <section className="flex flex-col justify-center items-center p-3">
      <form action="" className="flex items-center justify-center">
        <input
          type="text"
          className="rounded-2xl shadow-lg mx-2 p-2 text-center"
          placeholder="Enter your city"
        />
        <button
          type="submit"
          className="rounded-full bg-white p-2 text-gray-400 shadow-lg hover:bg-gray2  hover:text-white"
        >
          <IoIosSearch size={20} />
        </button>
      </form>
    </section>
  );
}
