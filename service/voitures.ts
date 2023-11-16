import axios from 'axios';
import { voitureModel } from '../model/voitureModel';
import router from 'next/router';


export class voituresService {
    constructor() {
        
    }

 static async getAllvoitures() : Promise<voitureModel[]> {
  const resultats : voitureModel[] = []
        try {
          const response = await axios.get('http://localhost:3010/voitures', {
          });
          
          // Gérez la réponse, par exemple en stockant le token dans un état ou dans un cookie
          for (let i = 0; i < response.data.length; i++) {
            const voiture : voitureModel = new voitureModel()
            voiture.id = response.data[i].id
            voiture.nom = response.data[i].nom
            voiture.prix = response.data[i].prix
            voiture.primaryImage = response.data[i].primaryImage
            voiture.year = response.data[i].year
            voiture.options = response.data[i].options
            voiture.kilometrage = response.data[i].kilometrage
            voiture.description = response.data[i].description

            resultats.push(voiture)
          }
          console.log(response.data);

          
      
        } catch (error:any) {
          console.error("Erreur lors de la connexion:", error.response?.data || error.message);
        }
        return resultats
      }

      static async creerVoiture(voiture: voitureModel) {
          try {
            await axios.post("http://localhost:3010/voitures",voiture).then(
              (response) => {
                if(response.status == 201){
                  router.push("/listvoiture");
                } else {
                  router.push("/erreur");
                }
              }
            )
          } catch (error) {
            router.push("/erreur");
          }
      }
      static async modifierVoiture(voiture: voitureModel,id:number) {
          try {
            await axios.put("http://localhost:3010/voitures/" + id,voiture).then(
              (response) => {
                if(response.status == 201){
                  router.push("/listvoiture");
                } else {
                  router.push("/erreur");
                }
              }
            )
          } catch (error) {
            router.push("/erreur");
          }
      }

      static async deleteVoiture(id:number) {
        try {
          await axios.delete("http://localhost:3010/voitures/" + id).then(
            (response) => {
              if(response.status == 200){
                router.push("/list/voiture");
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