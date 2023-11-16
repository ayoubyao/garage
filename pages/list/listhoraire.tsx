import { FunctionComponent, useEffect, useState } from "react";
import { horaireModel } from "../../model/horaireModel";
import router, { Router } from "next/router";
import { horairesService } from "../../service/horaire";
import { Button, Link } from "@mui/material";
import Menu from "../menu";

interface Props {}

const horaire: FunctionComponent<Props> = () => {
  const [horaires, setHoraires] = useState(() => {
    const tabHoraires: horaireModel[] = [];

    return tabHoraires;
  });

  const creehoraire = () => {
    router.push("/edit/edithoraire");
  };

  const deleteHoraire = (id: number) => {

    horairesService.deleteHoraire(id) 
  }

  useEffect(() => {
    horairesService.getAllhoraires().then((horaires) => {
      setHoraires(horaires);
    });
  }, []);

  return (
    <div>
      <Menu />
      <Button variant="outlined">
        <Link href="/home">Acceuil</Link>
      </Button>
      <table className="table table-striped">
        <th>id</th>
        <th>ouverture</th>
        <th>fermeture</th>
        <th>jour</th>

        {horaires.map((horaire: horaireModel) => (
          <tr>
            <td>{horaire.id}</td>
            <td>{horaire.ouverture}</td>
            <td>{horaire.fermeture}</td>
            <td>{horaire.jour}</td>
            <td>
              <Button variant="outlined" onClick={() => {deleteHoraire(horaire.id)} }>supprimer</Button>
            </td>
          </tr>
        ))}
      </table>
      <Button variant="outlined" style={{marginLeft: "500px"}} onClick={creehoraire}>creation d'une horaire</Button>
    </div>
  );
};

export default horaire;
