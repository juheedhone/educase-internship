"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";

const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(5).max(12),
});

export type IFormSchema = z.infer<typeof formSchema>;

const SignIn = () => {
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
  }

  return (
    <div className="p-6">
      <div className="font-semibold text-2xl mb-3.5 text-[#1D2226] max-w-47">
        Signin to your PopX account
      </div>
      <p className="mb-6 opacity-60 max-w-58">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="group relative mb-6">
                <FormLabel className="bg-background text-[#6C25FF]  absolute start-1 top-0 z-10 block -translate-y-1/2 px-2 text-xs font-medium group-has-disabled:opacity-50">
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
              <FormItem className="group relative mb-6">
                <FormLabel className="bg-background text-[#6C25FF]  absolute start-1 top-0 z-10 block -translate-y-1/2 px-2 text-xs font-medium group-has-disabled:opacity-50">
                  password
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
          <Button type="submit" className="w-full bg-[#CBCBCB]">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SignIn;
