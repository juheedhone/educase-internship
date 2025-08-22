import Link from "next/link";
import { Button } from "./ui/button";

const Welcome = () => {
  return (
    <div className="flex flex-col justify-end w-full p-5 pb-[41px]">
      <p className="font-medium text-[1.75rem] mb-2.5">Welcome to PopX</p>
      <p className="mb-[29px] text-lg opacity-60 max-w-[232px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <Button className="text-white cursor-pointer mb-2.5 h-[2.875rem]">
        <Link href={"/signup"}>Create Account</Link>
      </Button>
      <Button
        className="bg-[#6C25FF4B] hover:bg-[#6C25FF4B]/90 cursor-pointer h-[2.875rem]"
        variant="outline"
      >
        <Link href={"/signin"}>Already Registered? Login</Link>
      </Button>
    </div>
  );
};

export default Welcome;
