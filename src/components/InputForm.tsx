import { IoIosSearch } from "react-icons/io";

export function InputForm() {
  return (
    <section className="flex flex-col justify-center items-center p-3">
      <form action="" className="flex items-center justify-center">
        <input
          type="text"
          className="rounded-2xl bg-black shadow-lg mx-2 p-2 text-white text-center border-2"
          placeholder="Enter your city"
        />
        <button
          type="submit"
          className="rounded-full bg-white p-2 border-2 border-black text-black shadow-lg hover:bg-gray-600  hover:text-white"
        >
          <IoIosSearch size={20} />
        </button>
      </form>
    </section>
  );
}
