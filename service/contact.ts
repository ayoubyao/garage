import axios from 'axios';
import { contactModel } from '../model/contactModel';
import router from 'next/router';
import contact from '../pages/list/contact';
import { promises } from 'dns';


export class contactsService {
    constructor() {
        
    }

 static async getAllcontacts() : Promise<contactModel[]> {
  const resultats : contactModel[] = []
        try {
          const response = await axios.get('http://localhost:3010/contacts', {
          });
          
          // Gérez la réponse, par exemple en stockant le token dans un état ou dans un cookie
          for (let i = 0; i < response.data.length; i++) {
            const contact : contactModel = new contactModel()
            contact.id = response.data[i].id
            contact.name = response.data[i].name
            contact.email = response.data[i].email
            contact.telephone = response.data[i].telephone
            contact.description = response.data[i].description

            resultats.push(contact)
          }
          console.log(response.data);

          
      
        } catch (error:any) {
          console.error("Erreur lors de la connexion:", error.response?.data || error.message);
        }
        return resultats
      }

      static async creerContact(contact: contactModel) {
          try {
            await axios.post("http://localhost:3010/contacts",contact).then(
              (response) => {
                if(response.status == 201){
                  router.push("/listcontact");
                } else {
                  router.push("/erreur");
                }
              }
            )
          } catch (error) {
            router.push("/erreur");
          }
      }

      static async deleteContact(id:number): Promise<number> {
        await axios.delete("http://localhost:3010/contacts/" + id).then(
          (response) => {
            return 200
          }
        ).catch(
          (error) => {
            console.log(error)
            return 0
          }
        )
        return 200
      }
}