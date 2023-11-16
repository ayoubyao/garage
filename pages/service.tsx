import React, { useEffect, useState } from "react";
import { serviceModel } from "../model/serviceModel";
import { Console, error } from "console";
import { servicesService } from "../service/service";

interface Props {}
const HomePage: React.FunctionComponent<Props> = (Props) => {
  const [services, setServices] = useState(() => {
    const tabServices: serviceModel[] = [];

    return tabServices;
  });

  useEffect(() => {
    servicesService.getAllservices().then((services) => {
      setServices(services);
    });
  }, []);

  return (
    <div>
      <h1>les services</h1>

      <ul>
        {services.map((services: serviceModel) => (
          <li key={services.id}>
            {services.titre}: {services.description} : 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
