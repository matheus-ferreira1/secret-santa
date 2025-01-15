import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Gift } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const registerFormSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    passwordConfirmation: z.string().min(6),
  })
  .superRefine(({ password, passwordConfirmation }, ctx) => {
    if (password !== passwordConfirmation) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords do not match",
        path: ["passwordConfirmation"],
      });
    }
  });

export const RegisterPage: React.FC = () => {
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
  });

  const onSubmit = (values: z.infer<typeof registerFormSchema>) => {
    console.log(values);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900/90 via-slate-900 to-emerald-900/90 flex items-center justify-center">
      <Card className="w-[350px] bg-black/40 backdrop-blur-sm border-white/10">
        <CardHeader>
          <Link to="/" className="flex items-center justify-center gap-2 mb-4">
            <Gift className="h-8 w-8 text-purple-400" />
            <h1 className="text-white text-2xl font-bold">Secret Santa</h1>
          </Link>
          <CardTitle className="text-white text-center">
            Create an Account
          </CardTitle>
          <CardDescription className="text-gray-400 text-center">
            Sign up to start your Secret Santa journey
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex flex-col space-y-1.5">
                      <FormLabel className="text-gray-400">Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          className="bg-white/5 border-white/10 text-white"
                          placeholder="your@email.com"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="flex flex-col space-y-1.5">
                      <FormLabel className="text-gray-400">Password</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="password"
                          className="bg-white/5 border-white/10 text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="passwordConfirmation"
                  render={({ field }) => (
                    <FormItem className="flex flex-col space-y-1.5">
                      <FormLabel className="text-gray-400">
                        Confirm Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="password"
                          className="bg-white/5 border-white/10 text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button
                className="w-full bg-purple-500/20 text-purple-400 hover:bg-purple-500/30"
                type="submit"
              >
                Register
              </Button>
              <div className="text-sm text-gray-400 text-center">
                Already have an account?{" "}
                <Link to="/login" className="text-purple-400 hover:underline">
                  Register
                </Link>
              </div>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
};
