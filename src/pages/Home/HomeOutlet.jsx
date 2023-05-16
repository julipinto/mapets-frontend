import { Link, Outlet, useLocation } from 'react-router-dom';

function HomeOutlet() {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <header className="flex justify-between w-full text-center border-b border-grey p-4">
        <img src="assets/logo.png" width={18} />
        <div className="flex gap-1">
          <svg
            className="text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            width="1.3em"
            height="1.3em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M5 19q-.425 0-.713-.288T4 18q0-.425.288-.713T5 17h1v-7q0-2.075 1.25-3.688T10.5 4.2v-.7q0-.625.438-1.063T12 2q.625 0 1.063.438T13.5 3.5v.7q2 .5 3.25 2.113T18 10v7h1q.425 0 .713.288T20 18q0 .425-.288.713T19 19H5Zm7 3q-.825 0-1.413-.588T10 20h4q0 .825-.588 1.413T12 22Z"
            ></path>
          </svg>
          <svg
            className="text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            width="1.3em"
            height="1.3em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 14q-.425 0-.713-.288T18 13v-2h-2q-.425 0-.713-.288T15 10q0-.425.288-.713T16 9h2V7q0-.425.288-.713T19 6q.425 0 .713.288T20 7v2h2q.425 0 .713.288T23 10q0 .425-.288.713T22 11h-2v2q0 .425-.288.713T19 14ZM9 12q-1.65 0-2.825-1.175T5 8q0-1.65 1.175-2.825T9 4q1.65 0 2.825 1.175T13 8q0 1.65-1.175 2.825T9 12Zm-7 8q-.425 0-.713-.288T1 19v-1.8q0-.85.438-1.563T2.6 14.55q1.55-.775 3.15-1.163T9 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T17 17.2V19q0 .425-.288.713T16 20H2Z"
            ></path>
          </svg>
        </div>
      </header>
      <main className="flex-1 overflow-y-scroll">
        <Outlet />
      </main>
      <footer className="flex justify-between w-full text-center border-t border-grey p-4">
        <Link to="/home">
          <div
            className={`flex flex-col items-center ${
              pathname === '/home' ? 'text-blue-700' : 'text-gray-400'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.7em"
              height="1.7em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.988 5.438T12 22Zm-3-9h2v-2.75h2V13h2V8.25l-3-2l-3 2V13Z"
              ></path>
            </svg>
            <span className="text-sm">Home</span>
          </div>
        </Link>

        <Link to="/my-pets">
          <div
            className={`flex flex-col items-center ${
              pathname === '/my-pets' ? 'text-blue-700' : 'text-gray-400'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.7em"
              height="1.7em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4.5 12.125q-1.05 0-1.775-.725T2 9.625q0-1.05.725-1.775T4.5 7.125q1.05 0 1.775.725T7 9.625q0 1.05-.725 1.775t-1.775.725Zm4.5-4q-1.05 0-1.775-.725T6.5 5.625q0-1.05.725-1.775T9 3.125q1.05 0 1.775.725t.725 1.775q0 1.05-.725 1.775T9 8.125Zm6 0q-1.05 0-1.775-.725T12.5 5.625q0-1.05.725-1.775T15 3.125q1.05 0 1.775.725t.725 1.775q0 1.05-.725 1.775T15 8.125Zm4.5 4q-1.05 0-1.775-.725T17 9.625q0-1.05.725-1.775t1.775-.725q1.05 0 1.775.725T22 9.625q0 1.05-.725 1.775t-1.775.725Zm-12.85 10q-1.125 0-1.888-.863T4 19.226q0-1.3.888-2.275t1.762-1.925q.725-.775 1.25-1.687t1.25-1.713q.55-.65 1.275-1.075T12 10.125q.85 0 1.575.4t1.275 1.05q.7.8 1.238 1.725t1.262 1.725q.875.95 1.762 1.925T20 19.225q0 1.175-.763 2.038t-1.887.862q-1.35 0-2.675-.225T12 21.675q-1.35 0-2.675.225t-2.675.225Z"
              ></path>
            </svg>
            <span className="text-sm">Meus Pets</span>
          </div>
        </Link>

        <Link to="/store">
          <div
            className={`flex flex-col items-center ${
              pathname === '/store' ? 'text-blue-700' : 'text-gray-400'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.7em"
              height="1.7em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 4c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2zm2-6c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm4 6c0 .55-.45 1-1 1s-1-.45-1-1V8h2v2z"
              ></path>
            </svg>
            <span className="text-sm">Loja</span>
          </div>
        </Link>

        <div className="flex flex-col justify-center text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.7em"
            height="1.7em"
            viewBox="0 0 24 24"
          >
            <g
              id="feElipsisH0"
              fill="none"
              fillRule="evenodd"
              stroke="none"
              strokeWidth="1"
            >
              <g id="feElipsisH1" fill="currentColor">
                <path
                  id="feElipsisH2"
                  d="M18 14a2 2 0 1 1 0-4a2 2 0 0 1 0 4ZM6 14a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm6 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4Z"
                ></path>
              </g>
            </g>
          </svg>
        </div>
      </footer>
    </div>
  );
}

export default HomeOutlet;
