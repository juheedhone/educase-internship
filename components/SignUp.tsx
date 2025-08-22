"use client";

import { zodResolver } from "@hookform/resolvers/zod";
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
  phone: z.number().min(5).max(12),
  email: z.string().min(1).max(50),
  password: z.string(),
  companyName: z.string().min(1).max(50),
  type: z.string().min(1).max(5),
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
      <div className="mb-5 text-2xl font-semibold max-w-47">
        Create to your PopX account
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem className="relative mb-6 group">
                <FormLabel className="bg-background text-[#6C25FF]  absolute start-1 top-0 z-10 block -translate-y-1/2 px-2 text-xs font-medium group-has-disabled:opacity-50">
                  Full Name
                </FormLabel>
                <FormControl>
                  <Input className="h-10" placeholder="Marry doe" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="relative mb-6 group">
                <FormLabel className="bg-background text-[#6C25FF]  absolute start-1 top-0 z-10 block -translate-y-1/2 px-2 text-xs font-medium group-has-disabled:opacity-50">
                  Phone number
                </FormLabel>
                <FormControl>
                  <Input className="h-10" placeholder="Mary doe" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="relative mb-6 group">
                <FormLabel className="bg-background text-[#6C25FF]  absolute start-1 top-0 z-10 block -translate-y-1/2 px-2 text-xs font-medium group-has-disabled:opacity-50">
                  Email address
                </FormLabel>
                <FormControl>
                  <Input className="h-10" placeholder="Mary doe" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="relative mb-6 group">
                <FormLabel className="bg-background text-[#6C25FF]  absolute start-1 top-0 z-10 block -translate-y-1/2 px-2 text-xs font-medium group-has-disabled:opacity-50">
                  Password
                </FormLabel>
                <FormControl>
                  <Input className="h-10" placeholder="Mary doe" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem className="relative mb-6 group">
                <FormLabel className="bg-background text-[#6C25FF]  absolute start-1 top-0 z-10 block -translate-y-1/2 px-2 text-xs font-medium group-has-disabled:opacity-50">
                  Company name
                </FormLabel>
                <FormControl>
                  <Input className="h-10" placeholder="Mary doe" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Are you in Agency?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex"
                  >
                    <FormItem className="flex items-center gap-3">
                      <FormControl>
                        <RadioGroupItem value="all" />
                      </FormControl>
                      <FormLabel className="font-normal">Yes</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center gap-3">
                      <FormControl>
                        <RadioGroupItem value="mentions" />
                      </FormControl>
                      <FormLabel className="font-normal">No</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full bg-[#6C25FF] mt-46">
            Create Account
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SignIn;
