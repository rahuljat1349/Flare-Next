"use client"
import { signIn } from "next-auth/react";
import { MouseEventHandler } from "react";
import { useSession } from "next-auth/react";

const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
  e.preventDefault();
  signIn();
};
export default function Home() {
  const session = useSession()
  return (
    <>
      <button onClick={handleClick}>Login</button>
      <div>{session.data?.user?.email}</div>
    </>
  );
}
