import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SignIn = () => {
  return (
    <div className="p-6">
      <div className="font-semibold text-2xl mb-3.5 text-[#1D2226] max-w-47">
        Signin to your PopX account
      </div>
      <p className="mb-6 opacity-60 max-w-58">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
      <div className="group relative mb-6">
        <label
          htmlFor="id"
          className="bg-background text-[#6C25FF]  absolute start-1 top-0 z-10 block -translate-y-1/2 px-2 text-xs font-medium group-has-disabled:opacity-50"
        >
          Email Address
        </label>
        <Input
          id="id"
          className="h-10"
          placeholder="Enter email address"
          type="email"
        />
      </div>
      <div className="group relative mb-4">
        <label
          htmlFor="id"
          className="bg-background text-[#6C25FF]  absolute start-1 top-0 z-10 block -translate-y-1/2 px-2 text-xs font-medium group-has-disabled:opacity-50"
        >
          Password
        </label>
        <Input
          id="id"
          className="h-10"
          placeholder="Enter password"
          type="password"
        />
      </div>
      <Button variant="outline" className="bg-[#CBCBCB] text-white w-full ">
        Login
      </Button>
    </div>
  );
};

export default SignIn;
