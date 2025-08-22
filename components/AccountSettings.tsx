import Image from "next/image";
import camIcon from "../app/cam.svg";
import userImage from "../app/user.png";

const AccountSettings = () => {
  return (
    <div className="bg-[#F7F8F9]! h-screen flex flex-col gap-[30px] [&>*:not(:first-child)]:px-5 w-full">
      <div className="h-[4.25rem] flex bg-white items-center p-[0.9375rem]">
        <p className="text-lg">Account Settings</p>
      </div>
      <div className="flex gap-[1.125rem]">
        <div className="relative">
          <Image
            className="size-[4.75rem]"
            src={userImage}
            width={100}
            height={100}
            alt="picture of the user"
          />
          <Image
            className="absolute bottom-0 right-0 size-6"
            src={camIcon}
            width={100}
            height={100}
            alt=""
          />
        </div>
        <div>
          <p className="text-[15px] mb-1.5 font-medium">Marry Doe</p>
          <p className="text-sm">Marry@Gmail.Com</p>
        </div>
      </div>
      <p className="text-sm">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
};

export default AccountSettings;
