import { Button } from "@/shared/ui/button";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient()

export default async function Home() {

  const courses = await client.course.findMany()
  console.log('courses: ', courses);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>Click me</Button>
    </main>
  );
}
