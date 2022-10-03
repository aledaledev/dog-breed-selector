import {
  CardContent,
  CardActions,
  Typography,
  Skeleton,
  Checkbox,
} from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import styles from "../App.module.css";
import useBreedCard from "../hooks/useBreedCard";

const BreedCard = () => {
  const { removeFavorite, addFavorite , favorite , getNewUrl, breed, image, id, CustomBox} = useBreedCard()
  return (
    <CardContent>
      <CardActions sx={{ padding: 0 }}>
        {image ? (
          <img
            className={styles.img}
            src={image}
            alt={breed}
            loading="lazy"
            onClick={getNewUrl}
          />
        ) : (
          <Skeleton variant="rounded" width={400} height={300} />
        )}
      </CardActions>

      <CustomBox>
        <Typography variant="h5" component="div">
          {breed || "Select a breed"}
        </Typography>
        {id && (
          <Checkbox
            onChange={() => favorite()? removeFavorite(): addFavorite()}
            checked={favorite()}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite color="error" />}
          />
        )}
      </CustomBox>
    </CardContent>
  );
};

export default BreedCard;
