function Home() {
  return (
    <>
      <header className="flex items-center justify-between w-full text-center border-b border-grey p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2.5em"
          height="2.5em"
          viewBox="0 0 24 24"
          className="text-gray-500"
        >
          <path
            fill="currentColor"
            d="M11 13v3q0 .425.288.713T12 17q.425 0 .713-.288T13 16v-3h3q.425 0 .713-.288T17 12q0-.425-.288-.713T16 11h-3V8q0-.425-.288-.713T12 7q-.425 0-.713.288T11 8v3H8q-.425 0-.713.288T7 12q0 .425.288.713T8 13h3Zm1 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"
          ></path>
        </svg>

        <div className="flex flex-col items-center">
          <img
            className="w-12 h-12 rounded-full mx-auto"
            src="assets/images/mustache.png"
            alt=""
          ></img>
          <span className="text-sm">Sr. Bigode</span>
        </div>

        <div className="flex flex-col items-center">
          <img
            className="w-12 h-12 rounded-full mx-auto"
            src="assets/images/dudu.png"
            alt=""
          ></img>
          <span className="text-sm">Dudu</span>
        </div>

        <div className="flex flex-col items-center">
          <img
            className="w-12 h-12 rounded-full mx-auto"
            src="assets/images/popcorn.png"
            alt=""
          ></img>
          <span className="text-sm">Pipoca</span>
        </div>
      </header>

      <img src="assets/images/tracker.png" />
    </>
  );
}

export default Home;
