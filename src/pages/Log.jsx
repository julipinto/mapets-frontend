function Log() {
  return (
    <div className="flex flex-col gap-1 min-h-screen justify-center">
      <button className="w-full bg-white hover:bg-gray-700 hover:text-white text-gray-900 py-1 px-6 rounded-full transition-colors duration-150">
        Cadastrar
      </button>
      <button className="w-full bg-transparent border border-white hover:bg-gray-700 text-white py-1 px-6 rounded-full transition-colors duration-150">
        Entrar
      </button>
    </div>
  );
}

export default Log;
