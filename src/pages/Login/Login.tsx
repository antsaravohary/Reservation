import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import ReactLogo from "../../assets/react.svg";
import { validationSchemaLogin } from "../../Validations/ValidationForm";
import { AuthContext } from "../../contexts/AuthContext";

function Login() {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleLogin = (email: string, password: string) => {
    const loggedIn = login(email, password);
    if (loggedIn) navigate("/reservation/concerts");
  };

  return (
    <section className="vh-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-black">
            <div className="px-5 ms-xl-4">
              <i
                className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
                style={{ color: "#709085" }}
              ></i>
              <span className="h1 fw-bold mb-0">Logo</span>
            </div>

            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchemaLogin}
                onSubmit={(values, { setSubmitting }) => {
                  setSubmitting(false);
                }}
              >
                {({ isSubmitting, values }) => {
                  return (
                    <Form style={{ width: "23rem" }}>
                      <h2
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Conexion
                      </h2>

                      <div className="form-outline mb-4">
                        <Field
                          type="email"
                          name="email"
                          id="form2Example18"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form2Example18">
                          Adresse Email
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <Field
                          type="password"
                          name="password"
                          id="form2Example28"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form2Example28">
                          Mot de Passe
                        </label>
                      </div>

                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-info btn-lg btn-block"
                          type="button"
                          onClick={() =>
                            handleLogin(values.email, values.password)
                          }
                        >
                          Se Connecter
                        </button>
                      </div>

                      <p className="small mb-5 pb-lg-2">
                        <a className="text-muted" href="#!">
                          Mot de passe oublié ?
                        </a>
                      </p>
                      <p>
                        Vous n'avez pas un compte ?{" "}
                        <Link to={"/signup"} className="link-info">
                          S'inscrire
                        </Link>
                      </p>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
          <div className="col-sm-6 px-0 d-none d-sm-block">
            <img
              src={ReactLogo}
              alt="Login image"
              className="w-100 vh-100"
              style={{ objectFit: "cover", objectPosition: "left" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
