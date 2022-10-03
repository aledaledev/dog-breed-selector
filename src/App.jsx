import {
  Box,
  Card,
  IconButton,
  Tooltip,
  Paper,
  Typography,
  CssBaseline
} from "@mui/material";
import { Delete, ModeNight } from "@mui/icons-material";
import { ThemeProvider } from "@mui/material/styles";
import Select from "./components/Select";
import BreedCard from "./components/BreedCard";
import FavoriteBreedCard from "./components/FavoriteBreedCard";
import useApp from "./hooks/useApp";

const App = () => {
  const { darkTheme, mode ,setMode,favoritesBreeds,CustomBox } = useApp()
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <IconButton
          sx={{ position: "absolute", right: "9px", top: "6px" }}
          aria-label="fingerprint"
          onClick={() => setMode(mode === "dark" ? "light" : "dark")}
        >
          <ModeNight
            
          />
        </IconButton>

        <CustomBox sx={{flexDirection:{xs:"column", md:"row"},justifyContent: "center", 
        alignItems:"center"}}>
          <Card sx={{ width: "368px", height: "min-content" }}>
            <Select />
            <BreedCard />
          </Card>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: ".5rem",
            }}
          >
            {Boolean(favoritesBreeds.length) && (
              <Paper
                elevation={1}
                sx={{
                  display: "flex",
                  padding: ".5rem",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width:"368px",
                  margin:"0 auto"
                }}
              >
                <Typography component="span" variant="h5" pl=".75rem">
                  Favorites
                </Typography>
                <Tooltip title="remove all">
                  <IconButton
                    aria-label="delete"
                    onClick={() => {
                      setDataBreeds({ ...dataBreeds, favoritesBreeds: [] });
                    }}
                  >
                    <Delete />
                  </IconButton>
                </Tooltip>
              </Paper>
            )}
            <Box sx={{overflowY:"scroll", maxHeight:"28rem"}}>
              {favoritesBreeds.map((item) => <FavoriteBreedCard key={item.id} item={item}/>)}
            </Box>
          </Box>
        </CustomBox>
      </ThemeProvider>
    </>
  );
};
export default App;
