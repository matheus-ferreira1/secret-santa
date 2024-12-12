import RegisterForm from "./register-form";

const RegisterPage = () => {
  return (
    <div className="container mx-auto max-w-md py-8">
      <h1 className="text-3xl font-bold tracking-tight mb-8 text-center">
        Create an Account
      </h1>

      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
