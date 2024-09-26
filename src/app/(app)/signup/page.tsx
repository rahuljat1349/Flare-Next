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
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>To continue to flare </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Input placeholder="Email" type="email" />
          <Input placeholder="Name" type="text" />
          <Input placeholder="Password" type="password" />
          <Button type="submit">SignUp</Button>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
         
          <Link className="text-xs" href={"/signin"}>
            Already have an account? SignIn.
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Page;
