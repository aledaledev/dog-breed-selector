import {styled,createTheme, Box} from "@mui/material"
import { useEffect, useContext, useState } from "react";
import { fetchBreeds } from "../helpers/fetchBreeds";
import { fetchRandomBreed } from "../helpers/fetchRandomBreed";
import { BreedContext } from "../context/BreedContext";

const useApp = () => {
  const { dataBreeds, setDataBreeds, setBreeds } = useContext(BreedContext);
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");
  const darkTheme = createTheme({
    palette: {
      mode,
    },
  });
  const { favoritesBreeds } = dataBreeds;
  useEffect(() => {
    fetchBreeds(setBreeds);
    fetchRandomBreed(setDataBreeds, dataBreeds);
  }, []);

  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  const CustomBox = styled(Box)({
    display: "flex",
    gap: "1.5rem",
    margin: "3rem 0",
  });

  return {darkTheme, mode , setMode,favoritesBreeds,CustomBox}
};

export default useApp;
