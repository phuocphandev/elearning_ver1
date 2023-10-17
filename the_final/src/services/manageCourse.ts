import { apiInstance } from "constant";
import { CoursePagi, CourseType, EnrollCourseType } from "types/Course";

const api = apiInstance({
  baseURL: import.meta.env.VITE_MANAGE_COURSE,
});
export const manageCourse = {
  getCourseMenu: () => api.get("/LayDanhMucKhoaHoc"),
  getCourseList: () => api.get<CourseType[]>(`LayDanhSachKhoaHoc?MaNhom=GP09`),
  getInfoCourse: (payload: string) =>
    api.get(`/LayThongTinKhoaHoc?maKhoaHoc=${payload}`),
  getCourseFollowMenu: (payload: string) =>
    api.get<CourseType[]>(
      `/LayKhoaHocTheoDanhMuc?maDanhMuc=${payload}&MaNhom=GP09`
    ),
  getCoursePagination: (payload: number) =>
    api.get<CoursePagi>(
      `/LayDanhSachKhoaHoc_PhanTrang?page=${payload}&pageSize=10&MaNhom=GP09`
    ),
  enrollCourse: (payload: EnrollCourseType) =>
    api.post("/DangKyKhoaHoc", payload),
  cancelEnroll:(payload:any)=>api.post('/HuyGhiDanh',payload),
};
