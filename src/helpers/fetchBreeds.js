export const fetchBreeds = async (setBreeds) => {
  const res = await fetch("https://api.thedogapi.com/v1/breeds");
  const data = await res.json();
  setBreeds(
    data.map((breed) => {
      const { id, name, image, temperament } = breed;
      return {
        label: name,
        id,
        img: image.url,
        temperament,
      };
    })
  );
};
