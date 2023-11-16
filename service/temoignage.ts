import axios from 'axios';
import { temoignageModel } from '../model/temoignageModel';
import router from 'next/router';
import temoignage from '../pages/list/temoignage';


export class temoignagesService {
    constructor() {
        
    }

 static async getAlltemoignages() : Promise<temoignageModel[]> {
  const resultats : temoignageModel[] = []
        try {
          const response = await axios.get('http://localhost:3010/temoignages', {
          });
          
          // Gérez la réponse, par exemple en stockant le token dans un état ou dans un cookie
          for (let i = 0; i < response.data.length; i++) {
            const temoignage : temoignageModel = new temoignageModel()
            temoignage.id = response.data[i].id
            temoignage.name = response.data[i].name
            temoignage.email = response.data[i].email
            temoignage.temoignage = response.data[i].temoignage
            temoignage.Isapproved = response.data[i].Isapproved
            temoignage.datecreation = response.data[i].datecreation

            resultats.push(temoignage)
          }
          console.log(response.data);

          
      
        } catch (error:any) {
          console.error("Erreur lors de la connexion:", error.response?.data || error.message);
        }
        return resultats
      }

      static async creerTemoignage(temoignage: temoignageModel) {
          try {
            await axios.post("http://localhost:3010/temoignages",temoignage).then(
              (response) => {
                if(response.status == 201){
                  router.push("/list/temoignage");
                } else {
                  router.push("/erreur");
                }
              }
            ).catch(
              (error) => {
                console.log("error creation temoignages : " + error)
              }
            ) 
          } catch (error) {
            router.push("/erreur");
          }
      }

      static async deleteTemoignage(id:number) {
        try {
          await axios.delete("http://localhost:3010/temoignages/" + id).then(
            (response) => {
              if(response.status == 200){
                router.push("/list/temoignage");
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
      
}