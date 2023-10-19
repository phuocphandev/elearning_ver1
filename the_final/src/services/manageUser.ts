import { apiInstance } from "constant";
import { LoginSchemaType, RegisterSchemaType } from "schema";
import { LoginUser, UpdateUser, UserInfo, payloadFilter } from "types";

const api = apiInstance({
  baseURL: import.meta.env.VITE_MANAGE_USER,
});
export const manageUser = {
  register: (payload: RegisterSchemaType) => api.post("/DangKy", payload),
  login: (payload: LoginSchemaType) =>
    api.post<LoginUser>("/DangNhap", payload),
  getUserInfo: () => api.post<UserInfo>("/ThongTinNguoiDung"),
  updateUser: (payload: UpdateUser) =>
    api.put("/CapNhatThongTinNguoiDung", payload),
  getAccount: (payload: number) =>
    api.get(`/LayDanhSachNguoiDung_PhanTrang?page=${payload}&pageSize=5`),
  filterAccount: (payload: payloadFilter) =>
    api.get(
      `/LayDanhSachNguoiDung_PhanTrang?tuKhoa=${payload.tuKhoa}&page=${payload.soTrang}&pageSize=5`
    ),
    deleteAccount:(payload:string)=>api.delete(`/XoaNguoiDung?TaiKhoan=${payload}`),
    getCourseNotEnroll:(payload:string)=>api.post(`/LayDanhSachKhoaHocChuaGhiDanh?TaiKhoan=${payload}`),
    getCourseUnAuthor:(payload:{taiKhoan:string})=>api.post('/LayDanhSachKhoaHocChoXetDuyet',payload),
    getCourseAuthor:(payload:{taiKhoan:string})=>api.post('/LayDanhSachKhoaHocDaXetDuyet',payload),
};
