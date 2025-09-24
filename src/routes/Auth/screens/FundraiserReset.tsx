import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo.svg";
import mainCont from "../assets/main cont.svg";

export const FundraiserReset = (): JSX.Element => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      // Here you would typically send the reset email
      console.log("Reset email sent to:", email);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSignInClick = () => {
    navigate("/login");
  };

  return (
    <div className="bg-white w-full min-w-[1440px] min-h-[1024px] relative">
      <main className="flex flex-col w-[464px] items-center gap-[31px] absolute top-[calc(50.00%_-_164px)] left-[150px]">
        <header className="flex flex-col items-center gap-0.5 relative self-stretch w-full flex-[0_0_auto]">
          <h1 className="mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#111111] text-2xl leading-[36px] relative self-stretch text-center tracking-[0]">
            Forgot Your Password?
          </h1>

          <p className="[font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] text-base leading-[24px] relative self-stretch text-center tracking-[0]">
            Enter Your Email Address Below, And We'll Send You A Link
            <br />
            to Reset Your Password.
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-5 relative self-stretch w-full flex-[0_0_auto]"
        >
          <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
            <label
              htmlFor="email"
              className="relative flex items-center justify-start self-stretch mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#111111] text-sm tracking-[-0.25px] leading-[normal]"
            >
              Email Address
            </label>

            <div className="flex items-center gap-2.5 px-[14px] py-[10px] bg-white rounded-lg border border-solid border-[#dbdbdb] relative self-stretch w-full h-[42px] focus-within:border-[#09215e] transition-colors">
              <input
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email address"
                required
                className="relative flex items-center justify-center w-full mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-[#111111] text-base tracking-[-0.29px] leading-[normal] placeholder:text-[#a1a1a1] focus:outline-none"
                aria-describedby="email-help"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={!email.trim() || isSubmitted}
            className="flex h-[43px] items-center justify-center gap-2 px-3 py-2 relative self-stretch w-full bg-[#09215e] rounded-lg border-[0.5px] border-solid border-[#fbfbfb] hover:bg-[#0a1f5a] disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-[#09215e] focus:ring-offset-2"
          >
            <span className="relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-[#fbfbfb] text-xs tracking-[-0.24px] leading-[18px] whitespace-nowrap">
              {isSubmitted ? "Reset Link Sent!" : "Send Reset Link"}
            </span>
          </button>

          <p
            id="email-help"
            className="relative self-stretch [font-family:'Manrope-Regular',Helvetica] font-normal text-[#a1a1a1] text-sm text-center tracking-[0] leading-[21px]"
          >
            If You Don't See Your Reset Email Be Sure To Check Your Spam
          </p>
        </form>

        <div className="inline-flex items-center gap-[5px] relative flex-[0_0_auto]">
          <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#4f5059] text-sm tracking-[-0.25px] leading-[normal]">
            Back to
          </span>

          <button
            type="button"
            onClick={handleSignInClick}
            className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#09215e] text-sm tracking-[-0.25px] leading-[normal] underline cursor-pointer hover:opacity-80 transition-opacity"
          >
            Sign In
          </button>
        </div>
      </main>

      <img
        className="absolute w-[763px] top-3 right-3 h-[1011px] object-cover"
        alt="Main content illustration"
        src={mainCont}
      />

      <img
        className="absolute top-6 left-6 w-[159.6px] h-[40px]"
        alt="Fundraiser Logo"
        src={logo}
      />
    </div>
  );
};
