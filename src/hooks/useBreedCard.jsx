import { styled, Box } from "@mui/material";
import { fetchSelectedBreed } from "../helpers/fetchSelectedBreed";
import { useContext } from "react";
import { BreedContext } from "../context/BreedContext";

const useBreedCard = () => {
  const { dataBreeds, setDataBreeds } = useContext(BreedContext);
  const { id, label: breed, img:image } = dataBreeds.currentBreed;

  const getNewUrl = () => fetchSelectedBreed(id, setDataBreeds, dataBreeds);

  const removeFavorite = () => {
    setDataBreeds({
      ...dataBreeds,
      favoritesBreeds: [...dataBreeds.favoritesBreeds].filter(
        (item) => item.id !== id
      ),
    });
  };

  const addFavorite = () => {
    setDataBreeds({
      ...dataBreeds,
      favoritesBreeds: [
        ...dataBreeds.favoritesBreeds,
        { ...dataBreeds.currentBreed, favorite: true },
      ],
    });
  };

  const favorite = () => dataBreeds.favoritesBreeds.some((item) => item.id === id)

  const CustomBox = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "1rem 0 0 0",
  });

  return {dataBreeds, addFavorite, removeFavorite, favorite , getNewUrl , breed, id, image, CustomBox};
};
export default useBreedCard;
