import { apiInstance } from "constant";
import { CourseType } from "types/Course";

const api = apiInstance({
  baseURL: import.meta.env.VITE_MANAGE_COURSE,
});
export const manageCourse = {
  getCourseMenu: () => api.get("/LayDanhMucKhoaHoc"),
  getCourseList: () =>
    api.get<CourseType[]>(
      `LayDanhSachKhoaHoc?MaNhom=GP09`
    ),
};
