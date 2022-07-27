import {IFormValues} from "../CartForm";
import email from "@emailjs/browser";

export const emailSend = (data:IFormValues, randomNumb: number) => {


  const templateParams = {
    telephone: data.telephone,
    email: data.email,
    name: data.name,
    rand: randomNumb
  }
  email.send('service_qo99xbs','template_jfri8gu', {...templateParams}, 'Asv5hTc7-2qTnv5Fo')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
      console.log('FAILED...', err);
    })
}