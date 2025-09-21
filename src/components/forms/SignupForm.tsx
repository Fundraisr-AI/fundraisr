"use client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "radix-ui";
import { Input } from "@/components/ui/input";
import axiosInstance from "@/lib/axios";
import AllAPIRouteMapping from "@/utils/AllAPIRouteMapping";

import { Checkbox } from "@/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { GoogleIcon } from "@/app/(auth)/_components/Icon";

const userFormSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    confirmPassword: z.string(),
    privacyPolicy: z.boolean(),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
      });
    }
  });

export default function SignupForm() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const search = useSearchParams();
  const callbackUrl = search.get("callbackUrl");

  const form = useForm<z.infer<typeof userFormSchema>>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      privacyPolicy: false,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof userFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log("value", values)
    const axios = new axiosInstance();
    axios.setPayload(values);
    const response = await axios.makeCall(
      AllAPIRouteMapping.users.add.apiPath,
      AllAPIRouteMapping.users.add.method
    );
    if (response?.success) {
      setSuccess(response?.message);
      setError("");
    } else {
      setError(response?.error);
      setSuccess("");
    }
  }

  function handleSocialLogin(provider: "google" | "github") {
    signIn(provider, {
      callbackUrl: callbackUrl ?? DEFAULT_LOGIN_REDIRECT,
    });
  }

  return (
    <div>
      <h2 className="mb-[50px] font-bricolage text-2xl font-medium text-foreground">
        Sign up
      </h2>
      <Form {...form}>
        <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bricolage text-base font-medium text-foreground">
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Uday" required {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bricolage text-base font-medium text-foreground">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="****"
                      type="password"
                      required
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bricolage text-base font-medium text-foreground">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="****" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Checkboxes */}

            <FormField
              control={form.control}
              name="privacyPolicy"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="privacyPolicy"
                        checked={field.value}
                        onCheckedChange={(checked) => field.onChange(checked)}
                        required
                      />
                      <label
                        htmlFor="privacyPolicy"
                        className="flex items-center justify-center gap-1 font-bricolage text-sm text-foreground"
                      >
                        I agree to the
                        <a
                          href="/privacy-policy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary underline"
                        >
                          Privacy Policy
                        </a>
                        and
                        <a
                          href="/terms-and-conditions"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary underline"
                        >
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-5">
            <Button type="submit" className="w-full">
              Create an account
            </Button>

            <div className="text-center font-familjen text-base font-normal text-secondary-foreground">
              Already have an account?{" "}
              <Link
                href={
                  search.has("callbackUrl")
                    ? `/signin?callbackUrl=${search.get("callbackUrl")}`
                    : "/signin"
                }
                className="text-secondary"
              >
                Sign In now
              </Link>
            </div>
          </div>

          <div className={`text-center ${success ? "text-green-500" : ""}`}>
            {success
              ? "Account created, Please check your email for verification"
              : ""}
          </div>

          <div className={`text-center ${error ? "text-red-500" : ""}`}>
            {error ? "Error Occurred, Please try again in some time." : ""}
          </div>
        </form>
      </Form>
      {/* Divider */}
      <div className="flex items-center gap-2.5 font-familjen text-[13px] text-foreground/40">
        <div className="h-[1px] w-full bg-border"></div>
        or
        <div className="h-[1px] w-full bg-border"></div>
      </div>

      {/* Social Login */}
      <div className="mt-4 grid gap-4">
        <Button
          className="w-full"
          onClick={() => handleSocialLogin("google")}
          variant="outline"
        >
          <GoogleIcon />
          Sign In with Google
        </Button>
      </div>
    </div>
  );
}
