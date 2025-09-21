"use client";

import { login } from "@/actions/login";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { loginFormSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { startTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// const loginFormSchema = z.object({
//     email: z.string().email(),
//     password: z.string(),
// })

export default function LoginForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const callbackUrl = searchParams.get("callbackUrl");
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with Different providor!"
      : "";

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setError("");
    setSuccess("");
    startTransition(() => {
      login(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);
        // TODO: Add when we add 2FA
        if (data?.success) {
          router.push(callbackUrl ?? "/workflows");
        }
      });
    });
  }

  function handleSocialLogin(provider: "google" | "github") {
    signIn(provider, {
      callbackUrl: callbackUrl ?? DEFAULT_LOGIN_REDIRECT,
    });
  }

  return (
    <div>
      <h2 className="mb-[50px] font-bricolage text-2xl font-medium text-foreground">
        Login
      </h2>
      <div className="space-y-[31px]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bricolage text-base font-medium text-foreground">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@example.com"
                      required
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="font-bricolage text-base font-medium text-foreground">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="password"
                      type="password"
                      placeholder="****"
                      required
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                  <Link
                    href="/auth/reset"
                    className="ml-auto mt-[14px] inline-block w-fit font-familjen text-sm text-secondary"
                  >
                    Forget Password?
                  </Link>
                </FormItem>
              )}
            />

            {/* Forget Password Link */}

            {/* Submit Button */}
            <Button type="submit" className="w-full">
              Sign In
            </Button>

            <div className={`text-center ${success ? "text-green-500" : ""}`}>
              {success ? "Logging you in" : ""}
            </div>

            <div className={`text-center ${error ? "text-red-500" : ""}`}>
              {error ? "Error Occured, Did you verfied your email?" : ""}
            </div>

            {/* Signup Link */}
            <div className="text-center font-familjen text-base font-normal text-secondary-foreground">
              Don&apos;t have an account?{" "}
              <Link
                href={
                  callbackUrl ? `/signup?callbackUrl=${callbackUrl}` : "/signup"
                }
                className="text-secondary"
              >
                Signup Now
              </Link>
            </div>
          </form>
        </Form>

        {/* Divider */}
        <div className="flex items-center gap-2.5 font-familjen text-[13px] text-foreground/40">
          <div className="h-[1px] w-full bg-border"></div>
          or
          <div className="h-[1px] w-full bg-border"></div>
        </div>
      </div>
    </div>
  );
}

export { loginFormSchema };
