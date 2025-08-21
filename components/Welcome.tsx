import { Button } from "./ui/button";

const Welcome = () => {
  return (
    <div className="flex flex-col h-screen justify-end p-6">
      <div className="font-semibold text-3xl pb-2">Welcome to PopX</div>
      <p className="pb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,
        eos.
      </p>
      <Button variant="outline" className="bg-violet-600 text-white ">
        Create Account
      </Button>
      <Button className="bg-violet-300 " variant="outline">
        Already Register? Login
      </Button>
    </div>
  );
};

export default Welcome;
