import { Link } from 'react-router-dom';

function Register() {
  return (
    <>
      <header>
        <div className="flex justify-between items-center">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="m9 18l-6-6l6-6l1.4 1.4L6.8 11H21v2H6.8l3.6 3.6L9 18Z"
              ></path>
            </svg>
          </Link>
          <span className="text-white">Cadastro</span>
        </div>
      </header>

      <div className="flex flex-col gap-3 my-9">
        <div className="bg-white rounded-3xl">
          <form className="flex flex-col gap-2 p-4">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              className="border-gray-300 border-b rounded-md p-2"
            />

            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              className="border-gray-300 border-b rounded-md p-2"
            />

            <label htmlFor="password">Senha</label>
            <input
              type="password"
              name="password"
              id="password"
              className="border-gray-300 border-b rounded-md p-2"
            />

            <label htmlFor="password">Confirmar senha</label>
            <input
              type="password"
              name="password"
              id="password"
              className="border-gray-300 border-b rounded-md p-2"
            />
          </form>
        </div>

        <div className="flex flex-col gap-1 justify-center">
          <Link to="/">
            <button className="w-full bg-transparent border border-white hover:bg-gray-700 text-white py-1 px-6 rounded-full transition-colors duration-150">
              Cadastrar
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Register;
