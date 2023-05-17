import { Link } from 'react-router-dom';

function MyPets() {
  return (
    <div className="px-2">
      <header className="flex justify-between py-2">
        <span className="text-lg font-bold">Meus Pets</span>

        <button className="flex items-center gap-1 text-xs bg-gray-500 rounded-full px-2 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 14q.425 0 .713-.288T13 13v-2h2q.425 0 .713-.288T16 10q0-.425-.288-.713T15 9h-2V7q0-.425-.288-.713T12 6q-.425 0-.713.288T11 7v2H9q-.425 0-.713.288T8 10q0 .425.288.713T9 11h2v2q0 .425.288.713T12 14Zm0 7.625q-.2 0-.4-.075t-.35-.2Q7.6 18.125 5.8 15.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.4-1.8 5.163t-5.45 5.987q-.15.125-.35.2t-.4.075Z"
            ></path>
          </svg>
          Cadastrar coleira
        </button>
      </header>

      <div>
        {[
          {
            name: 'Totodaia',
            age: 3,
            img: '../assets/images/totodaia.png',
          },
          {
            name: 'Whisk',
            age: 1,
            img: '../assets/images/whisk.png',
            hasCollar: true,
          },
        ].map((pet, index) => (
          <div key={index} className="flex items-center gap-2 py-2">
            <img src={pet.img} alt="" className="rounded-full" />
            <div className="flex flex-col">
              <span className="font-semibold">{pet.name}</span>
              <span>{pet.age} anos</span>
              <div className="flex gap-3 items-center">
                <div className="flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M7 22.5q-.425 0-.713-.288T6 21.5V17H5q-.825 0-1.413-.588T3 15V7.5q-.425 0-.713-.288T2 6.5q0-.425.288-.713T3 5.5h3V4h-.5q-.425 0-.713-.288T4.5 3q0-.425.288-.713T5.5 2h3q.425 0 .713.288T9.5 3q0 .425-.288.713T8.5 4H8v1.5h3q.425 0 .713.288T12 6.5q0 .425-.288.713T11 7.5V15q0 .825-.588 1.413T9 17H8v4.5q0 .425-.288.713T7 22.5ZM5 15h4v-1.5H7.25q-.3 0-.525-.225T6.5 12.75q0-.3.225-.525T7.25 12H9v-1.5H7.25q-.3 0-.525-.225T6.5 9.75q0-.3.225-.525T7.25 9H9V7.5H5V15Zm10 7q-.825 0-1.413-.588T13 20v-6.5q0-.725.25-1.2t.525-.825q.275-.35.5-.562t.225-.413V10q-.425 0-.713-.287T13.5 9q0-.425.288-.713T14.5 8h5q.425 0 .713.288T20.5 9q0 .425-.288.713T19.5 10v.5q0 .2.25.45t.55.6q.275.35.488.825T21 13.5V20q0 .825-.588 1.413T19 22h-4Zm0-8h4v-.5q0-.375-.225-.65t-.5-.6q-.275-.325-.525-.725T17.5 10.5V10h-1v.5q0 .6-.238 1t-.512.725q-.275.325-.513.613T15 13.5v.5Zm0 3h4v-1.5h-4V17Zm0 3h4v-1.5h-4V20Zm0-3h4h-4Z"
                    ></path>
                  </svg>
                  <span className="text-xs">Vacinas</span>
                </div>

                <div className="flex gap-1 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className={
                      pet.hasCollar ? 'text-green-500' : 'text-gray-500'
                    }
                  >
                    <path
                      fill="currentColor"
                      d="M12 22.95q-.425 0-.713-.287T11 21.95v-1q-3.125-.35-5.363-2.587T3.05 13h-1q-.425 0-.712-.288T1.05 12q0-.425.288-.713T2.05 11h1q.35-3.125 2.588-5.363T11 3.05v-1q0-.425.288-.712T12 1.05q.425 0 .713.288T13 2.05v1q3.125.35 5.363 2.588T20.95 11h1q.425 0 .713.288t.287.712q0 .425-.287.713T21.95 13h-1q-.35 3.125-2.587 5.363T13 20.95v1q0 .425-.288.713T12 22.95ZM12 19q2.9 0 4.95-2.05T19 12q0-2.9-2.05-4.95T12 5Q9.1 5 7.05 7.05T5 12q0 2.9 2.05 4.95T12 19Z"
                    ></path>
                  </svg>
                  <Link to={pet.hasCollar && '/home'}>
                    <span className="text-xs">
                      {pet.hasCollar ? 'Rastrear' : '+ Coleira'}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full bg-blue-500 rounded-full py-1 text-white mt-56">
        Adicionar Pet
      </button>
    </div>
  );
}

export default MyPets;
