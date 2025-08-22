"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const formSchema = z.object({
  fullname: z.string().min(2).max(50),
  phone: z.string().min(5).max(12),
  email: z.string().min(1).max(50),
  password: z.string(),
  companyName: z.string().min(1).max(50),
  agency: z.string().min(1).max(5),
});

export type IFormSchema = z.infer<typeof formSchema>;

const SignIn = () => {
  const router = useRouter();

  const form = useForm<IFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      phone: "",
      email: "",
      password: "",
      companyName: "",
      agency: "yes",
    },
  });

  function onSubmit(values: IFormSchema) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    router.push("/account");
  }

  return (
    <div className="flex flex-col w-full px-5 py-10">
      <p className="mb-[1.9375rem] text-3xl font-medium max-w-55">
        Create your PopX account
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-between h-full"
        >
          <div className="space-y-[1.8125rem]">
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem className="relative group">
                  <FormLabel className="bg-background text-[#6C25FF]  absolute start-1 top-0 z-10 block -translate-y-1/2 px-2 text-xs font-medium group-has-disabled:opacity-50">
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-10"
                      placeholder="Marry doe"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="relative group">
                  <FormLabel className="bg-background text-[#6C25FF]  absolute start-1 top-0 z-10 block -translate-y-1/2 px-2 text-xs font-medium group-has-disabled:opacity-50">
                    Phone number
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-10"
                      placeholder="0123456789"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="relative group">
                  <FormLabel className="bg-background text-[#6C25FF]  absolute start-1 top-0 z-10 block -translate-y-1/2 px-2 text-xs font-medium group-has-disabled:opacity-50">
                    Email address
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-10"
                      placeholder="mary@doe.com"
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
                <FormItem className="relative group">
                  <FormLabel className="bg-background text-[#6C25FF]  absolute start-1 top-0 z-10 block -translate-y-1/2 px-2 text-xs font-medium group-has-disabled:opacity-50">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="h-10"
                      placeholder="*********"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem className="relative group">
                  <FormLabel className="bg-background text-[#6C25FF]  absolute start-1 top-0 z-10 block -translate-y-1/2 px-2 text-xs font-medium group-has-disabled:opacity-50">
                    Company name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-10"
                      placeholder="acme corp"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="agency"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Are you an Agency?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex"
                    >
                      <FormItem className="flex items-center gap-3">
                        <FormControl>
                          <RadioGroupItem value="yes" />
                        </FormControl>
                        <FormLabel className="font-normal">Yes</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center gap-3">
                        <FormControl>
                          <RadioGroupItem value="no" />
                        </FormControl>
                        <FormLabel className="font-normal">No</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            className="w-full disabled:bg-[#CBCBCB]!"
            disabled={!form.formState.isValid}
          >
            Create Account
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SignIn;
