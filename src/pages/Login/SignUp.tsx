import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { validationSchemaSignup } from "../../Validations/ValidationForm";
import axios from "axios";
import { API } from "../../Constants";

interface User {
  firstName: string;
  name: string;
  address: string;
  email: string;
  password: string;
}

function SignUp() {
  const navigate = useNavigate();

  async function handleSignUp(user: User) {
    await axios
      .post(`${API}/utilisateur/adduser`, {
        name: user.name,
        prenom: user.firstName,
        adresse: user.address,
        email: user.email,
        password: user.password,
        billet: [],
        role: "USER",
      })
      .then(() => {
        navigate("/login"); 
      });
      
      
      
  }

  return (
    <section
      className="gradient-custom"
      style={{
        background:
          "linear-gradient(24deg, rgba(63,142,251,1) 0%, rgba(169,255,225,1) 100%)",
        minHeight: "100vh",
      }}
    >
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div
              className="card shadow-2-strong card-registration"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body p-4 p-md-5">
                <h2 className="mb-4 pb-2 pb-md-0 mb-md-5">Inscription</h2>
                <Formik
                  initialValues={{
                    firstName: "",
                    name: "",
                    address: "",
                    email: "",
                    password: "",
                  }}
                  validationSchema={validationSchemaSignup}
                  onSubmit={(values, { setSubmitting }) => {
                    handleSignUp(values);
                    setSubmitting(false);
                  }}
                >
                  {({ isSubmitting }) => {
                    return (
                      <Form>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <Field
                                type="text"
                                name="firstName"
                                id="firstName"
                                className="form-control form-control-lg"
                              />
                              <label className="form-label" htmlFor="firstName">
                                Prénom(s)
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <Field
                                type="text"
                                name="name"
                                id="lastName"
                                className="form-control form-control-lg"
                              />
                              <label className="form-label" htmlFor="lastName">
                                Nom
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-4 d-flex align-items-center">
                            <div className="form-outline datepicker w-100">
                              <Field
                                type="text"
                                name="address"
                                className="form-control form-control-lg"
                                id="address"
                              />
                              <label htmlFor="address" className="form-label">
                                Adresse
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-4 pb-2">
                            <div className="form-outline">
                              <Field
                                type="email"
                                name="email"
                                id="emailAddress"
                                className="form-control form-control-lg"
                              />
                              <label
                                className="form-label"
                                htmlFor="emailAddress"
                              >
                                Email
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4 pb-2">
                            <div className="form-outline">
                              <Field
                                type="password"
                                name="password"
                                id="password"
                                className="form-control form-control-lg"
                              />
                              <label className="form-label" htmlFor="password">
                                Mot de passe
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 pt-2">
                          <Field
                            className="btn btn-info btn-lg btn-block"
                            type="submit"
                            value="S'inscrire"
                          />
                        </div>
                        <p>
                          Vous avez un compte ?{" "}
                          <Link to={"/login"} className="link-info ">
                            Se Connecter
                          </Link>
                        </p>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
