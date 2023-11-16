import { FunctionComponent, useEffect, useState } from "react";
import { contactModel } from "../../model/contactModel";
import router, { Router } from "next/router";
import { contactsService } from "../../service/contact";
import { Button, Link } from "@mui/material";
import Menu from "../menu";

interface Props {}

const contact: FunctionComponent<Props> = () => {
  const [contacts, setContacts] = useState(() => {
    const tabContacts: contactModel[] = [];

    return tabContacts;
  });

  const creecontact = () => {
    router.push("/edit/editcontact");
  };

//   const modificationTemoignage = (id:any) => {

//     const temoignage = temoignages.find(t => t.id == id)
//     const temoignageString = JSON.stringify(temoignages); // Sérialisez l'objet en JSON
//     router.push({
//       pathname: '/edittemoignage',
//       query: { temoignage: temoignageString }, // Passez la chaîne JSON comme paramètre
//     });
//   };

  useEffect(() => {
    contactsService.getAllcontacts().then((contacts) => {
      setContacts(contacts);
    });
  }, []);

  const deleteContact = (id: number) => {

    contactsService.deleteContact(id).then(
      (reponse) => {
        if(reponse == 200){
          router.push("/list/contact");
        } else {
          router.push("/erreur");
        }
      }
      )
  }



  return (
    <div>
    <Menu />
      <Button variant="outlined">
        <Link href="/home">Acceuil</Link>
      </Button>
      <table className="table table-striped">
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>temoignage</th>
        <th>Isapproved</th>
        <th>datecreation</th>
        
        {contacts.map((contact: contactModel) => (
          <tr>
            <td>{contact.id}</td>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.telephone}</td>
            <td>{contact.description}</td>
            <td><Button variant="outlined" onClick={() => {deleteContact(contact.id)} }>supprimer</Button></td>
          </tr>
        ))}
      </table>
      <Button  variant="outlined" style={{marginLeft: "500px"}}  onClick={creecontact}>creation d'un contact</Button>
    </div>
  );
};

export default contact;
