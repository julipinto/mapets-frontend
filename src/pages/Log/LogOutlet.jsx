import { Outlet } from 'react-router-dom';

function HomeOutlet() {
  return (
    <main
      className="bg-no-repeat bg-cover bg-center bg-fixed min-h-screen"
      style={{ backgroundImage: '/assets/images/doggo.jpg' }}
    >
      <div className="flex flex-col min-h-screen bg-gray-800 bg-opacity-50 p-2">
        <Outlet />
      </div>
    </main>
  );
}

export default HomeOutlet;
