import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import signInUser from "../../api/authentication/signin";

function Signin() {
  const validationSchema = yup.object({
    email: yup.string().required("Email manquant").email("Email invalide"),
    password: yup
      .string()
      .required("Mot de passe manquant")
      .min(6, "Le mot de passe doit faire au minimum 6 caractères"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const submit = handleSubmit(async (credentials) => {
    try {
      const response = await signInUser(credentials);
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div className="d-flex justify-content-center p-5">
      <div className="w-15"></div>
      <div className="border rounded p-4 shadow">
        <h2>Se connecter</h2>
        <Form onSubmit={submit}>
          <Form.Group className="mb-3" controlId="SignInUserEmail">
            <Form.Label>Votre email</Form.Label>
            <Form.Control
              className="shadow-sm"
              type="username"
              placeholder="Entrez le nom d'utilisateur"
              {...register("email")}
            />
            <p style={{ color: "red" }}>{errors.email?.message}</p>
          </Form.Group>

          <Form.Group className="mb-3" controlId="SignInUserPassword">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              className="shadow-sm"
              type="password"
              placeholder="Entrez un mot de passe"
              {...register("password")}
            />
            <p style={{ color: "red" }}>{errors.password?.message}</p>
          </Form.Group>

          <Button variant="primary" type="submit">
            Se Connecter
          </Button>
        </Form>
      </div>
      <div className="w-15"></div>
    </div>
  );
}

export default Signin;
