import { CoursesList } from "@/features/courses-list/pub/courses-list";
import { CreateCourseForm } from "@/features/courses-list/pub/create-course-form";
export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col p-8">
      <h1 className="text-sky-500">Courses</h1>
      <h2>add course</h2>
      <CreateCourseForm revalidatePagePath="/" className="max-w-[300px] mb-10" />
      <CoursesList revalidatePagePath="/" />
    </main>
  );
}
