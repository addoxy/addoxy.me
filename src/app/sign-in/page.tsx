import SigninButton from "./components/SigninButton";

export default function page() {
  return (
    <div className="m-auto flex">
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <span className="text-xl font-normal text-zinc-300 mb-6">
            Sign in to my app
          </span>
        </div>
        <div className="flex flex-col gap-y-3">
          <SigninButton name="Google" brand="google" />
          <SigninButton name="Github" brand="github" />
          <SigninButton name="Discord" brand="discord" />
        </div>
      </div>
    </div>
  );
}
