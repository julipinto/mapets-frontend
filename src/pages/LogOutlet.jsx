import { Outlet } from 'react-router-dom';

function HomeOutlet() {
  return (
    <main className="bg-[url('./assets/images/doggo.jpg')] bg-no-repeat bg-cover bg-center bg-fixed min-h-screen">
      <div className="flex flex-col items-center min-h-screen bg-gray-800 bg-opacity-50 p-2">
        <div>
          <h1 className="text-6xl font-bold text-white">Mapet</h1>
          <Outlet />
        </div>
      </div>
    </main>
  );
}

export default HomeOutlet;
