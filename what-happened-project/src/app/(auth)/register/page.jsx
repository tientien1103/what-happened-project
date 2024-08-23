import RegisterForm from "../../../components/form/RegisterForm";

export default function Register() {
  return (
    <div className="mx-6 md:mx-0">
      <div className="space-y-3 text-center">
        <h1 className="text-2xl md:text-5xl text-[#0565bb] font-extrabold">
          Join us
        </h1>
      </div>

      <hr className="w-full md:w-[454px] h-4 my-6 border-[#222222]" />

      <RegisterForm />
    </div>
  );
}
