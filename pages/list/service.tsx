import { FunctionComponent, useEffect, useState } from "react";
import { serviceModel } from "../../model/serviceModel";
import router, { Router } from "next/router";
import { servicesService } from "../../service/service";
import { Button, Link } from "@mui/material";
import Menu from "../menu";

interface Props {}

const service: FunctionComponent<Props> = () => {
  const [services, setServices] = useState(() => {
    const tabServices: serviceModel[] = [];

    return tabServices;
  });

  const creeservice = () => {
    router.push("/edit/editservice");
  };

  const deleteService = (id: number) => {

    servicesService.deleteService(id) 
  }

  useEffect(() => {
    servicesService.getAllservices().then((services) => {
      setServices(services);
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
        <th>titre</th>
        <th>description</th>

        {services.map((service: serviceModel) => (
          <tr>
            <td>{service.id}</td>
            <td>{service.titre}</td>
            <td>{service.description}</td>
            <td>
              <Button variant="outlined" onClick={() => {deleteService(service.id)} }>supprimer</Button>
            </td>
          </tr>
        ))}
      </table>
      <Button variant="outlined" style={{marginLeft: "500px"}} onClick={creeservice}>creation d'un service</Button>
    </div>
  );
};

export default service;
