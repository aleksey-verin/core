import { dbClient } from "@/shared/lib/db";
import { cache } from "react";

class coursesRepository {
  getCoursesList = cache(
    (): Promise<CourseListElement[]> => dbClient.course.findMany(),
  );

  createCourse = cache(
    (command: CreateCourseListElementCommand): Promise<CourseListElement> => {
      return dbClient.course.create({
        data: command,
      });
    },
  );
  deleteCourse = cache(
    (command: DeleteCourseListElementCommand) => {
      return dbClient.course.delete({
        where: { id: command.id },
      });
    },
  );
}

export const coursesRepositoryClient = new coursesRepository()