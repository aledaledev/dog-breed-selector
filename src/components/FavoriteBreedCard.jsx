import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Link
} from "@mui/material";
import { useContext } from "react";
import { BreedContext } from "../context/BreedContext";

const FavoriteBreedCard = ({ item }) => {
  const {dataBreeds, setDataBreeds} = useContext(BreedContext)
  return (
    <Card
      sx={{
        display: "flex",
        width: "368px",
        maxHeight:"10rem",
        margin: ".5rem",
        justifyContent: "space-between",
        flexDirection: "row-reverse",
      }}
    >
      
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Link
            underline="hover"
            sx={{ cursor: "pointer" }}
            component="div"
            variant="subtitle1"
            textAlign="right"
            onClick={() => setDataBreeds({...dataBreeds, currentBreed:{...item}})}
          >
            {item.label}
          </Link>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            component="div"
            textAlign="right"
          >
            {item.temperament}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: "10rem" }}
        image={item.img}
        alt="Live"
      />
      
    </Card>
  );
};

export default FavoriteBreedCard;
