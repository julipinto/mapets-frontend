import { Link } from 'react-router-dom';

function Log() {
  return (
    <>
      <h1 className="text-6xl font-bold self-center text-white">Mapet</h1>

      <div className="flex flex-col gap-1 min-h-screen justify-center">
        <Link to="/register">
          <button className="w-full bg-white hover:bg-gray-700 hover:text-white text-gray-900 py-1 px-6 rounded-full transition-colors duration-150">
            Cadastrar
          </button>
        </Link>
        <Link to="/login">
          <button className="w-full bg-transparent border border-white hover:bg-gray-700 text-white py-1 px-6 rounded-full transition-colors duration-150">
            Entrar
          </button>
        </Link>
      </div>
    </>
  );
}

export default Log;
