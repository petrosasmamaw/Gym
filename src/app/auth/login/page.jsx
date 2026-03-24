import LoginForm from "./Form";

export default function LoginPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: "url('https://i.pinimg.com/1200x/40/e6/c5/40e6c5f5681473f4914d7a5b98245cdd.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <LoginForm />
    </div>
  );
}
