"use server";

import { revalidatePath } from "next/cache";
import { coursesRepositoryClient } from "./courses.repository";

export const createCourseAction = async (
  command: CreateCourseListElementCommand,
  revalidatePagePath: string,
) => {
  await coursesRepositoryClient.createCourse(command);
  revalidatePath(revalidatePagePath);
};
