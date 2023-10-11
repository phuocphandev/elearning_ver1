import { useSelector } from "react-redux";
import { RootState } from "store";

export const useCourse = () => {
  const { CourseList } = useSelector(
    (state: RootState) => state.manageCourse
  );
  return { CourseList };
};