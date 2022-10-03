export const fetchSelectedBreed = async (id, setDataBreeds, dataBreeds) => {
  const res = await fetch(`https://api.TheDogAPI.com/v1/images/search?breed_ids=${id}`);
  const data = await res.json();
  setDataBreeds({
    ...dataBreeds,
    currentBreed: { ...dataBreeds.currentBreed, img: data[0].url },
  });
};
