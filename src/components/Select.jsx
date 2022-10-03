import { Autocomplete, TextField } from "@mui/material";
import { useContext } from "react";
import { BreedContext } from "../context/BreedContext";
const Select = () => {
  const {breeds, handleChangeBreed} = useContext(BreedContext)
  return (
    <Autocomplete
      disablePortal
      options={breeds}
      sx={{
        width: "auto",
        padding: "1rem",
        marginTop:"1rem"
      }}
      onChange={handleChangeBreed}
      renderInput={(params) => <TextField {...params} label="Breeds" />}
    />
  );
};
export default Select;