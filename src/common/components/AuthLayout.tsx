import bgImg from "../../assets/auth/beerBg.jpeg";
import { ReactNode } from "react";

export const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex max-lg:flex-col h-svh w-svw">
      <div className="w-1/2 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={bgImg}
          alt="beerBg.jpeg"
        />
      </div>
      <div className="flex w-1/2 justify-center items-center">
        <div className="flex items-center justify-center bg-amber-400 rounded-lg border-amber-700 border-2 p-6">
          {children}
        </div>
      </div>
    </div>
  );
};
