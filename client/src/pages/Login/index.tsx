import LoginForm from "./login-form";

const LoginPage = () => {
  return (
    <div className="container mx-auto max-w-md px-4 py-8">
      <h1 className="text-3xl font-bold tracking-tight mb-8 text-center">
        Log In
      </h1>

      <LoginForm />
    </div>
  );
};

export default LoginPage;
