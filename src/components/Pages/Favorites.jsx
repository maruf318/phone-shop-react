import { useEffect, useState } from "react";
import PhoneCard from "./PhoneCard";
import FavoritesCard from "./FavoritesCard";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [noFound, setNoFound] = useState(false);
  // const favoriteItem = JSON.parse(localStorage.getItem("favorites"));
  useEffect(() => {
    const favoriteItem = JSON.parse(localStorage.getItem("favorites"));
    if (favoriteItem) {
      setFavorites(favoriteItem);
    } else {
      setNoFound("No data found");
    }
  }, []);
  // console.log(favorites);
  const handleRemove = () => {
    localStorage.clear();
    setFavorites([]);
    setNoFound("No data found");
  };

  return (
    <div>
      {noFound ? (
        <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
      ) : (
        <div>
          {favorites.length > 0 && (
            <button
              onClick={handleRemove}
              className="p-4 bg-green-200 block mx-auto"
            >
              Delete All favorites
            </button>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {favorites.map((phone) => (
              <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>
            ))}
          </div>
          {favorites.length > 4 && (
            <button className="p-4 bg-green-200 block mx-auto">See All</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Favorites;
