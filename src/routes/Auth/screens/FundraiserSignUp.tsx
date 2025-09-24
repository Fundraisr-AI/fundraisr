import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apple from "../assets/Apple.svg";
import buttom from "../assets/Buttom.svg";
import clientId from "../assets/Client ID.svg";
import google from "../assets/Google.svg";
import logo from "../assets/Logo.svg";
import mainCont from "../assets/main cont.svg";

export const FundraiserSignUp = (): JSX.Element => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleSocialLogin = (provider: string) => {
    // Handle social login
    console.log("Social login with:", provider);
  };

  const handleSignInClick = () => {
    navigate("/login");
  };

  return (
    <div className="bg-white w-full min-w-[1440px] min-h-[1024px] relative">
      <main className="flex flex-col w-[464px] items-center gap-[31px] absolute top-[calc(50.00%_-_342px)] left-[150px]">
        <header className="flex flex-col items-center gap-0.5 relative self-stretch w-full flex-[0_0_auto]">
          <h1 className="mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#111111] text-2xl leading-[36px] relative self-stretch text-center tracking-[0]">
            Sign Up
          </h1>

          <p className="[font-family:'Manrope-Regular',Helvetica] font-normal text-[#4f5059] text-base leading-[24px] relative self-stretch text-center tracking-[0]">
            Sign Up To Enjoy The Feature Of Fundraisr
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-5 relative self-stretch w-full flex-[0_0_auto]"
        >
          <div className="flex items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-2 relative flex-1 grow">
              <label
                htmlFor="firstName"
                className="relative flex items-center justify-start self-stretch mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#111111] text-sm tracking-[-0.25px] leading-[normal]"
              >
                Your First Name
              </label>

              <div className="flex items-center gap-2.5 px-[14px] py-[10px] bg-white rounded-lg border border-solid border-[#dbdbdb] relative self-stretch w-full h-[42px]">
                <input
                  id="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  placeholder="Enter your first name"
                  className="relative flex items-center justify-center w-full mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-[#111111] text-base tracking-[-0.29px] leading-[normal] placeholder:text-[#a1a1a1]"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col items-start gap-2 relative flex-1 grow">
              <label
                htmlFor="lastName"
                className="relative flex items-center justify-start self-stretch mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#111111] text-sm tracking-[-0.25px] leading-[normal]"
              >
                Your Last Name
              </label>

              <div className="flex items-center gap-2.5 px-[14px] py-[10px] bg-white rounded-lg border border-solid border-[#dbdbdb] relative self-stretch w-full h-[42px]">
                <input
                  id="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  placeholder="Enter your last name"
                  className="relative flex items-center justify-center w-full mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-[#111111] text-base tracking-[-0.29px] leading-[normal] placeholder:text-[#a1a1a1]"
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
            <label
              htmlFor="email"
              className="relative flex items-center justify-start self-stretch mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#111111] text-sm tracking-[-0.25px] leading-[normal]"
            >
              Email Address
            </label>

            <div className="flex items-center gap-2.5 px-[14px] py-[10px] bg-white rounded-lg border border-solid border-[#dbdbdb] relative self-stretch w-full h-[42px]">
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Enter your email address"
                className="relative flex items-center justify-center w-full mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-[#111111] text-base tracking-[-0.29px] leading-[normal] placeholder:text-[#a1a1a1]"
                required
              />
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
            <label
              htmlFor="password"
              className="relative flex items-center justify-start self-stretch mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#111111] text-sm tracking-[-0.25px] leading-[normal]"
            >
              Password
            </label>

            <div className="flex items-center justify-between px-[14px] py-[10px] bg-white rounded-lg border border-solid border-[#dbdbdb] relative self-stretch w-full h-[42px]">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                placeholder="Enter your password"
                className="relative flex items-center justify-center w-full mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-[#111111] text-base tracking-[-0.29px] leading-[normal] placeholder:text-[#a1a1a1]"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="relative w-5 h-5 overflow-hidden aspect-[1] cursor-pointer"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {showPassword ? (
                    <>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </>
                  ) : (
                    <>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
            <label
              htmlFor="confirmPassword"
              className="relative flex items-center justify-start self-stretch mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#111111] text-sm tracking-[-0.25px] leading-[normal]"
            >
              Confirm Password
            </label>

            <div className="flex items-center justify-between px-[14px] py-[10px] bg-white rounded-lg border border-solid border-[#dbdbdb] relative self-stretch w-full h-[42px]">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={(e) =>
                  handleInputChange("confirmPassword", e.target.value)
                }
                placeholder="Confirm your password"
                className="relative flex items-center justify-center w-full mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-[#111111] text-base tracking-[-0.29px] leading-[normal] placeholder:text-[#a1a1a1]"
                required
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="relative w-5 h-5 overflow-hidden aspect-[1] cursor-pointer"
                aria-label={
                  showConfirmPassword ? "Hide password" : "Show password"
                }
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {showConfirmPassword ? (
                    <>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </>
                  ) : (
                    <>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="checkbox"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className="sr-only"
              />
              <div
                className={`relative w-[17px] h-[17px] rounded border border-solid ${agreeToTerms ? "border-[#09215e] bg-[#09215e]" : "border-[#a1a1a1]"} flex items-center justify-center`}
              >
                {agreeToTerms && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>

              <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#a1a1a1] text-sm tracking-[-0.25px] leading-[normal]">
                I agree to Terms & Services
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="relative self-stretch w-full h-[43px] cursor-pointer hover:opacity-90 transition-opacity rounded-lg"
          >
            <img
              className="w-full h-full object-cover"
              alt="Sign Up"
              src={buttom}
            />
          </button>

          <div className="flex h-6 items-center justify-center gap-2.5 relative self-stretch w-full">
            <div className="relative flex-1 grow h-px bg-[#a1a1a1]"></div>

            <div className="relative w-fit [font-family:'Manrope-Medium',Helvetica] font-medium text-[#a1a1a1] text-sm tracking-[0] leading-[21px] whitespace-nowrap">
              or sign up with
            </div>

            <div className="relative flex-1 grow h-px bg-[#a1a1a1]"></div>
          </div>

          <div className="flex items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
            <button
              type="button"
              onClick={() => handleSocialLogin("client-id")}
              className="relative flex-1 h-[40px] cursor-pointer hover:opacity-90 transition-opacity"
              aria-label="Sign up with Client ID"
            >
              <img
                className="w-full h-full object-contain"
                alt="Client ID"
                src={clientId}
              />
            </button>

            <button
              type="button"
              onClick={() => handleSocialLogin("google")}
              className="relative flex-1 h-[40px] cursor-pointer hover:opacity-90 transition-opacity"
              aria-label="Sign up with Google"
            >
              <img
                className="w-full h-full object-contain"
                alt="Google"
                src={google}
              />
            </button>

            <button
              type="button"
              onClick={() => handleSocialLogin("apple")}
              className="relative flex-1 h-[40px] cursor-pointer hover:opacity-90 transition-opacity"
              aria-label="Sign up with Apple"
            >
              <img
                className="w-full h-full object-contain"
                alt="Apple"
                src={apple}
              />
            </button>
          </div>
        </form>

        <div className="inline-flex items-center gap-[5px] relative flex-[0_0_auto]">
          <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Manrope-Medium',Helvetica] font-medium text-[#4f5059] text-sm tracking-[-0.25px] leading-[normal]">
            Already have an account?
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
