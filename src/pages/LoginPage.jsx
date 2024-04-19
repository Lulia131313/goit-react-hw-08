import toast, { Toaster } from "react-hot-toast";
import AuthForm from "../components/AuthForm";
import { useDispatch } from "react-redux";
import { loginThunk } from "../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(7, "Password must be at least 7 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values) => {
    dispatch(loginThunk(values));
  };

  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <div>
      <AuthForm
        title="Login"
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      />
      <Toaster />
    </div>
  );
};

export default LoginPage;
