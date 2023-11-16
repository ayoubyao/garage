import { useRouter } from "next/router";
import Menu from "./menu";
import { Box, Typography } from "@mui/material";

function Home() {
  const router = useRouter();
  const { profil } = router.query;
  const { firstname } = router.query;
  const { lastname } = router.query;
  return (
    <div>
      <Menu />
      <Box sx={{ paddingLeft: 30 }}>
          <Typography variant="h2" gutterBottom>
          Bienvenue {firstname} {lastname}
          </Typography>
          vous etes {profil?.toString() == "1" ? " administrateur" : "employe"}
        </Box>
      
    </div>
  );
}

export default Home;
