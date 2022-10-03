import { createContext, useEffect, useState } from "react";
export const BreedContext = createContext();

const BreedProvider = ({ children }) => {
  const [dataBreeds, setDataBreeds] = useState({
    currentBreed:{},
    favoritesBreeds:JSON.parse(localStorage.getItem("favoritesBreeds"))||[]
  });
  const [breeds, setBreeds] = useState([]);

  const {favoritesBreeds} = dataBreeds

  const handleChangeBreed = (e) => {
    if (!e.target.innerText) return;
    const currentBreed = breeds.filter(
      (breed) => e.target.innerText === breed.label
    )[0];
    setDataBreeds({...dataBreeds, currentBreed});
  };

  useEffect(()=>{
    localStorage.setItem('favoritesBreeds', JSON.stringify(favoritesBreeds))  
  },[favoritesBreeds])

  const data = { dataBreeds, setDataBreeds, breeds, setBreeds, handleChangeBreed};
  return <BreedContext.Provider value={data}>{children}</BreedContext.Provider>;
};
export default BreedProvider;