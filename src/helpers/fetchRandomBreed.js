export const fetchRandomBreed = async (setDataBreeds, dataBreeds) => {
  const res = await fetch(`https://api.TheDogAPI.com/v1/images/search`);
  const data = await res.json();
  setDataBreeds({
    ...dataBreeds,
    currentBreed: {
      label: null,
      id: null,
      img: data[0].url,
      temperament: null,
    },
  });
};
