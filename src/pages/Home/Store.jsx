function Store() {
  return (
    <div className="px-2">
      <header className="flex justify-between py-2">
        <span className="text-lg font-bold">Loja</span>
      </header>

      <main className="flex-1 flex flex-col gap-3 overflow-y-scroll">
        {[
          {
            bgImg: '../assets/images/hotel.png',
            text: 'Pet Hotel - Conforto e segurança',
          },
          {
            bgImg: '../assets/images/foog.png',
            text: '10% de desconto em rações',
          },
          {
            bgImg: '../assets/images/vet.png',
            text: 'Clinicas veterinárias parceiras',
          },
        ].map((item, index) => (
          <div
            key={index}
            className="h-36 rounded-2xl"
            style={{ backgroundImage: `url(${item.bgImg}) cover no-repeat` }}
          >
            <div className="flex bg-gradient-to-t from-black bg-opacity-25 w-full h-full p-2 rounded-2xl">
              <span className="text-white pt-24">{item.text}</span>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Store;
