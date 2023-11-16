
import axios from 'axios';

export class UserService {
    constructor() {
        
    } 

 static async handleLogin(email:string, password:string) {
        try {
          const response = await axios.post('http://localhost:3010/auth/login', {
            email,
            password
          });
          
          // Gérez la réponse, par exemple en stockant le token dans un état ou dans un cookie
          console.log(response.data);
          return response.data
      
        } catch (error:any) {
          console.error("Erreur lors de la connexion:", error.response?.data || error.message);
          return null
        }
      }

}
