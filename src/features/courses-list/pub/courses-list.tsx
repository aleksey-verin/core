import { revalidatePath } from "next/cache";
import { coursesRepositoryClient } from "../courses.repository";
import { CourseItem } from "../ui/course-item";

export const CoursesList = async ({revalidatePagePath}:{revalidatePagePath: string}) => {
  const coursesList = await coursesRepositoryClient.getCoursesList();

  const handleDeleteAction = async  (courseId: string) => {
    'use server'

    await coursesRepositoryClient.deleteCourse({ id: courseId })
    revalidatePath(revalidatePagePath)
  }
  return (
    <div className="flex flex-col gap-3">
      {coursesList.map(course => (
        <CourseItem course={course} onDelete={handleDeleteAction.bind(null, course.id)} key={course.id} />
      ))}
    </div>
  );
};
