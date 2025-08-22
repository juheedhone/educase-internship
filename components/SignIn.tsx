"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";

const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(5),
});

export type IFormSchema = z.infer<typeof formSchema>;

const SignIn = () => {
  const router = useRouter();

  const form = useForm<IFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: IFormSchema) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    router.push("/account");
  }

  return (
    <div className="w-full px-5 py-10">
      <p className="font-medium text-[1.75rem] mb-3.5 max-w-48">
        Signin to your PopX account
      </p>
      <p className="mb-6 text-lg opacity-60 max-w-58">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="relative mb-6 group">
                <FormLabel className="text-primary bg-background  absolute start-1 top-0 z-10 block -translate-y-1/2 pl-0.5 pr-1 text-xs font-medium group-has-disabled:opacity-50">
                  Email Address
                </FormLabel>
                <FormControl>
                  <Input
                    className="h-10"
                    placeholder="Enter email address"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="relative mb-6 group">
                <FormLabel className="text-primary bg-background absolute start-1 top-0 z-10 block -translate-y-1/2 pl-0.5 pr-1 text-xs font-medium group-has-disabled:opacity-50">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    className="h-10"
                    placeholder="Enter password"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full disabled:bg-[#CBCBCB]!"
            disabled={!form.formState.isValid}
          >
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SignIn;
