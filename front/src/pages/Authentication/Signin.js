import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import createUser from "../../api/authentication/signup";

function Signin() {
  return (
    <div className="d-flex justify-content-center p-5">
      <div className="w-15"></div>
      <div className="border rounded p-4 shadow">
        <h2>Se connecter</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>Nom d'utilisateur</Form.Label>
            <Form.Control
              className="shadow-sm"
              type="username"
              placeholder="Entrez le nom d'utilisateur"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Mot de passe</Form.Label>
            <Form.Control
              className="shadow-sm"
              type="password"
              placeholder="Entrez un mot de passe"
            />
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