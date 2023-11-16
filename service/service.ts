import axios from 'axios';
import { serviceModel } from '../model/serviceModel';
import router from 'next/router';

export class servicesService {
    constructor() {
        
    }

    static async creerService(service: serviceModel) {
        try {
            await axios.post("http://localhost:3010/services",service).then(
              (response) => {
                if(response.status == 201){
                  router.push("/list/service");
                } else {
                  router.push("/erreur");
                }
              }
            ).catch(
              (error) => {
                console.log("error creation services : " + error)
              }
            ) 
          } catch (error) {
            router.push("/erreur");
          }
    }

    static async deleteService(id:number) {
        try {
          await axios.delete("http://localhost:3010/services/" + id).then(
            (response) => {
              if(response.status == 200){
                router.push("/list/service");
              } else {
                router.push("/erreur");
              }
            }
          ).catch(
            (error) => {
              console.log(error)
              router.push("/erreur");
            }
          )
        } catch (error) {
          
        }
      }
 
 static async getAllservices() : Promise<serviceModel[]> {
  const resultats : serviceModel[] = []
        try {
          const response = await axios.get('http://localhost:3010/services', {
          });
          
          // Gérez la réponse, par exemple en stockant le token dans un état ou dans un cookie
          for (let i = 0; i < response.data.length; i++) {
            const service : serviceModel = new serviceModel()
            service.id = response.data[i].id
            service.titre = response.data[i].titre
            service.description = response.data[i].description

            resultats.push(service)
          }
          console.log(response.data);

          
      
        } catch (error:any) {
          console.error("Erreur lors de la connexion:", error.response?.data || error.message);
        }
        return resultats
      }

}