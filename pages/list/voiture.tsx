import { FunctionComponent, useEffect, useState } from "react";
import { voitureModel } from "../../model/voitureModel";
import { voituresService } from "../../service/voitures";
import router, { Router } from "next/router";
import { Button, Link } from "@mui/material";
import Menu from "../menu";

interface Props {}

const voiture: FunctionComponent<Props> = () => {
  const [voitures, setVoitures] = useState(() => {
    const tabHoraires: voitureModel[] = [];

    return tabHoraires;
  });

  const creevoiture = () => {
    router.push("/edit/editvoiture");
  };

  const modificationVoiture = (id: any) => {
    const car = voitures.find((t) => t.id == id);
    const carString = JSON.stringify(car); // Sérialisez l'objet en JSON
    router.push({
      pathname: "/edit/editvoiture",
      query: { car: carString }, // Passez la chaîne JSON comme paramètre
    });
  };

  const deleteVoiture = (id: number) => {

    voituresService.deleteVoiture(id) 
  }

  useEffect(() => {
    voituresService.getAllvoitures().then((voitures) => {
      setVoitures(voitures);
    });
  }, []);

  return (
    <div>
      <Menu />
      <table className="table table-striped">
        <th>id</th>
        <th>nom</th>
        <th>prix</th>
        <th>primaryImage</th>
        <th>year</th>
        <th>kilometrage</th>
        <th>options</th>
        <th>action</th>
        <th>description</th>

        {voitures.map((voiture: voitureModel) => (
          <tr>
            <td>{voiture.id}</td>
            <td>{voiture.nom}</td>
            <td>{voiture.prix}</td>
            <td>{voiture.primaryImage}</td>
            <td>{voiture.year}</td>
            <td>{voiture.kilometrage}</td>
            <td>{voiture.options} </td>
            <td>{voiture.description} </td>

            <td>
              <Button
                variant="outlined"
                onClick={() => {
                  modificationVoiture(voiture.id);
                }}
              >
                modifier
              </Button>
              <Button variant="outlined" onClick={() => {deleteVoiture(voiture.id)}} >supprimer</Button>
            </td>
          </tr>
        ))}
      </table>
      <Button
        variant="outlined"
        style={{ marginLeft: "500px" }}
        onClick={creevoiture}
      >
        creation d'une voiture
      </Button>
    </div>
  );
};

export default voiture;
