import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import createUser from "../../api/authentication/signup";

function Signup() {
  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Nom d'utilisateur manquant")
      .min(3, "3 caractères mnimum")
      .max(15, "15 caractères maximum"),
    email: yup.string().required("Email manquant").email("Email invalide"),
    password: yup
      .string()
      .required("Mot de passe manquant")
      .min(6, "Le mot de passe doit faire au minimum 6 caractères"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Mot de passe incorrect"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const navigate = useNavigate();
  const submit = handleSubmit(async (credentials) => {
    try {
      const response = await createUser(credentials);
      if (response?.code === "ERR_BAD_REQUEST") {
        console.log(response);
      } else {
        navigate("/signin");
      }
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div className="d-flex justify-content-center p-5">
      <div className="w-15"></div>
      <div className="border rounded p-4 shadow">
        <h2>S'enregistrer</h2>
        <Form onSubmit={submit}>
          <Form.Group className="mb-3" controlId="SignupUserEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              className="shadow-sm"
              type="name"
              placeholder="Entrez votre adresse Mail"
              {...register("email")}
            />
            <p style={{ color: "red" }}>{errors.email?.message}</p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="Signupname">
            <Form.Label>Nom d'utilisateur</Form.Label>
            <Form.Control
              className="shadow-sm"
              type="name"
              placeholder="Entrez le nom d'utilisateur"
              {...register("name")}
            />
            <p style={{ color: "red" }}>{errors.name?.message}</p>
          </Form.Group>

          <Form.Group className="mb-3" controlId="SignupPassword">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              className="shadow-sm"
              type="password"
              placeholder="Entrez un mot de passe"
              {...register("password")}
            />
            <p style={{ color: "red" }}>{errors.password?.message}</p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="SignupPasswordValidation">
            <Form.Label>Confirmez mot de passe</Form.Label>
            <Form.Control
              className="shadow-sm"
              type="password"
              placeholder="Entrez le mot de passe"
              {...register("passwordConfirmation")}
            />
            <p style={{ color: "red" }}>
              {errors.passwordConfirmation?.message}
            </p>
          </Form.Group>
          <Button variant="primary" type="submit">
            S'enregistrer
          </Button>
        </Form>
      </div>
      <div className="w-15"></div>
    </div>
  );
}

export default Signup;
