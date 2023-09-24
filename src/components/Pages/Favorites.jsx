import { useEffect, useState } from "react";
import PhoneCard from "./PhoneCard";
import FavoritesCard from "./FavoritesCard";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [noFound, setNoFound] = useState(false);
  const [isShow, setEachShow] = useState(false);
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
  console.log(isShow);

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
            {isShow
              ? favorites.map((phone) => (
                  <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>
                ))
              : favorites
                  .slice(0, 2)
                  .map((phone) => (
                    <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>
                  ))}
          </div>
          {favorites.length > 2 && (
            <button
              onClick={() => setEachShow(!isShow)}
              className="p-4 bg-green-200 block mx-auto"
            >
              {isShow ? "Show Less" : "Show More"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Favorites;
