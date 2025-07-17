export default function EmailBox() {
  return (
    <form className="flex items-center bg-white rounded-md overflow-hidden shadow-md max-w-2xl w-full px-3">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-grow px-4 py-5 text-sm text-gray-700 placeholder-gray-400 bg-transparent outline-none"
      />
      <button
        type="submit"
        className="bg-blue text-white text-sm font-medium px-5 py-2 rounded-md "
      >
        Subscribe
      </button>
    </form>
  );
}
