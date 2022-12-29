import * as Yup from "yup";

export const validationSchemaLogin = Yup.object().shape({
  email: Yup.string()
    .email("Adresse e-mail non valide")
    .required("Adresse e-mail obligatooire"),
  password: Yup.string()
    .required("Le mot de passe est obligatoire")
    .min(8, "Le mot de passe doit contenir au moins 8 caractères"),
});

export const validationSchemaSignup = Yup.object().shape({
  firstName: Yup.string().required(),
  name: Yup.string().required(),
  address: Yup.string().required(),
  email: Yup.string()
    .email("Adresse e-mail non valide")
    .required("Adresse e-mail obligatooire"),
  password: Yup.string().required(),
});
