import { Button } from "./ui/button";

const Welcome = () => {
  return (
    <div className="flex flex-col h-screen justify-end p-6">
      <div className="font-semibold text-2xl pb-2 text-[#1D2226]">
        Welcome to PopX
      </div>
      <p className="pb-6 opacity-60 text-[18px] text-[#1D2226]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,
        eos.
      </p>
      <Button
        variant="outline"
        className="bg-[#6C25FF] text-white cursor-pointer "
      >
        Create Account
      </Button>
      <Button
        className="bg-[#6C25FF4B] cursor-pointer mt-2"
        variant="outline"
      >
        Already Register? Login
      </Button>
    </div>
  );
};

export default Welcome;
