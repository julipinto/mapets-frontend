import { Link, useNavigate } from 'react-router-dom';
import api from '../../hooks/useApi';

function Register() {
  const navigate = useNavigate();

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

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const { name, email, password } = e.target;

          const response = await api.post(
            `?q=insertUser`,
            JSON.stringify({
              name: name.value,
              email: email.value,
              password: password.value,
            }),
            { contentType: 'application/json' }
          );

          console.log(response);
          if (response.data.ok) navigate('/');
          else alert(response.data.error);
        }}
        className="flex flex-col gap-3 my-9 p-4"
      >
        <div className="flex flex-col bg-white rounded-3xl p-2 gap-1">
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
            autoComplete="on"
            className="border-gray-300 border-b rounded-md p-2"
          />

          <label htmlFor="password">Confirmar senha</label>
          <input
            type="password"
            name="confirmpassword"
            id="confirmpassword"
            autoComplete="on"
            className="border-gray-300 border-b rounded-md p-2"
          />
        </div>

        <div className="flex flex-col gap-1 justify-center">
          <button
            type="submit"
            className="w-full bg-transparent border border-white hover:bg-gray-700 text-white py-1 px-6 rounded-full transition-colors duration-150"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </>
  );
}

export default Register;
