import { Button } from "@mui/material";
import Link from "next/link";
import { FunctionComponent } from "react";

interface menuProps {}

const Menu: FunctionComponent<menuProps> = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
      <Button variant="outlined"><Link href="/">Home</Link></Button>
        <span className="navbar-brand mb-0 h2"></span>
        <Button variant="contained" color="error">
          {" "}
          <Link href="/list/listhoraire">horaire</Link>
        </Button>
        <Button variant="contained" color="error">
          <Link href="/list/voiture">voiture</Link>
        </Button>
        <Button variant="contained" color="error">
          {" "}
          <Link href="/list/temoignage">temoignage</Link>
        </Button>
        <Button variant="contained" color="error">
          <Link href="/list/contact">contact</Link>
        </Button>
        <Button variant="contained" color="error">
          <Link href="/list/service">service</Link>
        </Button>
      </nav>
      
    </div>
  );
};

export default Menu;
