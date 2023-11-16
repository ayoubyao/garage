import Link from "next/link";
import { FunctionComponent } from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
interface MenuFrontProps {
    
}
 
const MenuFront: FunctionComponent<MenuFrontProps> = () => {
    return ( <div>
              <nav className="navbar navbar-dark bg-dark justify-content-between">
        <a className="navbar-brand">Garage V.Paroot</a>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{display:"none"}}
          />
           <Button variant="contained" type="submit" color="error"><Link href="/login">connexion</Link></Button>
        </form>
      </nav>
    </div> );
}
 
export default MenuFront;