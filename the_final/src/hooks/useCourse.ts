import { useSelector } from "react-redux";
import { RootState } from "store";

export const useCourse = () => {
  const { CourseList, CourseInfo } = useSelector(
    (state: RootState) => state.manageCourse
  );
  return { CourseList, CourseInfo };
};