import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

function Page() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card>
        <CardHeader className="text-center">
          <CardTitle>Sign In</CardTitle>
          <CardDescription>To continue to flare </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          <Button type="submit">Signin</Button>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <span>Or</span>
          <Button type="submit" variant={"outline"}>
            Log in with Google
          </Button>
          <Link className="text-xs" href={"/signup"}>
            Don't have an account? SignUp.
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Page;
