import { AuthLayout } from "../../common/components/AuthLayout.tsx";

export const Login = () => {
  return (
    <AuthLayout>
      <form>
        <div className="flex flex-col items-center">
          <div>
            <label className="block text-left" htmlFor="loginEmail">
              Email
            </label>
            <input
              className="rounded-md outline-1 p-2 -outline-offset-1 outline-amber-300 focus:outline-2 focus:outline-amber-800"
              placeholder="Login..."
              type="email"
              id="loginEmail"
            />
          </div>
          <div>
            <label className="block text-left" htmlFor="loginPassword">
              Password
            </label>
            <input
              className="rounded-md outline-1 p-2 -outline-offset-1 outline-amber-300 focus:outline-2 focus:outline-amber-800"
              placeholder="Password..."
              type="password"
              id="loginPassword"
            />
          </div>
        </div>
      </form>
    </AuthLayout>
  );
};
