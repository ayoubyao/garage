import { FunctionComponent, useEffect, useState } from "react";
import { temoignageModel } from "../../model/temoignageModel";
import router, { Router } from "next/router";
import { temoignagesService } from "../../service/temoignage";
import { Button, Link } from "@mui/material";
import Menu from "../menu";

interface Props {}

const temoignage: FunctionComponent<Props> = () => {
  const [temoignages, setTemoignages] = useState(() => {
    const tabTemoignages: temoignageModel[] = [];

    return tabTemoignages;
  });

  const creetemoignage = () => {
    router.push("/edit/edittemoignage");
  };

  const deleteTemoignage = (id: number) => {

    temoignagesService.deleteTemoignage(id) 
  }

// //   const modificationTemoignage = (id:any) => {

// //     const temoignage = temoignages.find(t => t.id == id)
// //     const temoignageString = JSON.stringify(temoignages); // Sérialisez l'objet en JSON
// //     router.push({
// //       pathname: '/edittemoignage',
// //       query: { temoignage: temoignageString }, // Passez la chaîne JSON comme paramètre
// //     });
// //   };

  useEffect(() => {
    temoignagesService.getAlltemoignages().then((temoignages) => {
      setTemoignages(temoignages);
    });
  }, []);



  return (
    <div>
      <Menu />
      <Button variant="outlined"><Link href="/">Home Page</Link></Button>
      <Button variant="outlined"><Link href="/home">Acceuil</Link></Button>
      <table className="table table-striped">
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>temoignage</th>
        <th>Isapproved</th>
        <th>datecreation</th>
        
        {temoignages.map((temoignage: temoignageModel) => (
          <tr>
            <td>{temoignage.id}</td>
            <td>{temoignage.name}</td>
            <td>{temoignage.email}</td>
            <td>{temoignage.temoignage}</td>
            <td>{temoignage.Isapproved}</td>
            <td>{temoignage.temoignage}</td>
            <td><Button variant="outlined" onClick={() => {deleteTemoignage(temoignage.id)} }>supprimer</Button></td>
          </tr>
        ))}
      </table>
      <Button variant="outlined" style={{marginLeft: "500px"}} onClick={creetemoignage}>creation d'un temoignage</Button>
    </div>
  );
};

export default temoignage;
