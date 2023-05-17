function Stories() {
  return (
    <div className="px-2">
      <header className="flex justify-between items-center py-2">
        <div className="flex gap-1 items-center">
          <img className="rounded-full" src="../assets/images/cenoura1.png" />
          <span className="font-semibold">Cenoura</span>
        </div>
        <span className="text-xs">Há 30 minutos</span>
      </header>
      <main>
        <img className="rounded-md" src="../assets/images/cenoura2.png" />
        <span>Uma tarde com muitos au-aus com a família 🐕</span>
      </main>
    </div>
  );
}

export default Stories;
