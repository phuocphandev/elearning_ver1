import { apiInstance } from "constant";
import { payloadFilter } from "types";
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
      `/LayDanhSachKhoaHoc_PhanTrang?page=${payload}&pageSize=5&MaNhom=GP09`
    ),
  enrollCourse: (payload: EnrollCourseType) =>
    api.post("/DangKyKhoaHoc", payload),
  cancelEnroll: (payload: any) => api.post("/HuyGhiDanh", payload),
  authorCourse: (payload: EnrollCourseType) =>
    api.post("/GhiDanhKhoaHoc", payload),
  filterCourse: (payload: payloadFilter) =>
    api.get(
      `/LayDanhSachKhoaHoc_PhanTrang?tenKhoaHoc=${payload.tuKhoa}&page=${payload.soTrang}&pageSize=5`
    ),
  deleteCourse: (payload: string) =>
    api.delete(`/XoaKhoaHoc?MaKhoaHoc=${payload}`),
  
};
