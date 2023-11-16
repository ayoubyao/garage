import React, { useEffect, useState } from "react";
import { horaireModel } from "../model/horaireModel";
import { Console, error } from "console";
import { horairesService } from "../service/horaire";

interface Props {}
const HomePage: React.FunctionComponent<Props> = (Props) => {
  const [horaires, setHoraires] = useState(() => {
    const tabHoraires : horaireModel[] = []

    return tabHoraires
  });

  useEffect(() => {
horairesService.getAllhoraires().then(
  (horaires) => {
    setHoraires(horaires)
  }
)  
  }, []);

  return (
    <div>
      <h1>Horaires d'ouverture</h1>

      <ul>
        {horaires.map((horaires:horaireModel) => (
          <li key={horaires.id}>
            {horaires.jour}: {horaires.fermeture} : {horaires.fermeture}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;



