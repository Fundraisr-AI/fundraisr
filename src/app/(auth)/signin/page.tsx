import { Suspense } from "react";

export default async function SignIn() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex h-screen items-center justify-center">
        <div className="flex h-full w-full flex-col justify-between px-[70px] pb-[42px] pt-[75px] md:basis-2/5">
          <div className="flex items-center gap-2.5 font-bricolage text-2xl font-normal text-foreground">
            Fundraisr
          </div>
          <LoginForm />
          <p className="flex items-center gap-1.5 font-familjen text-sm text-muted"></p>
        </div>
      </div>
    </Suspense>
  );
}
