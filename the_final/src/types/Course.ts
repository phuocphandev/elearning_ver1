export interface CourseData{
    count?: number;
    currentPage?: number;
    totalCount ?: number;
    totalPages ?: number;
    items?: CourseType
}

export interface CourseType {
  maKhoaHoc ?: string;
  biDanh ?: string;
  tenKhoaHoc ?: string;
  moTa ?: string;
  luotXem ?: number;
  hinhAnh ?: string;
  maNhom ?: string;
  ngayTao ?: string;
  soLuongHocVien ?: number;
  nguoiTao ?: NguoiTaoType;
  danhMucKhoaHoc ?: DanhMucKhoaHocType;
}[];
export interface NguoiTaoType {
  taiKhoan ?: string;
  hoTen ?: string;
  maLoaiNguoiDung ?: string;
  tenLoaiNguoiDung ?: string;
}
export interface DanhMucKhoaHocType {
  maDanhMucKhoahoc ?: string;
  tenDanhMucKhoaHoc ?: string;
}
export interface CoursePagi {
  currentPage:number;
  count:number;
  totalPages:number;
  items:CourseType[];
}

export interface EnrollCourseType{
  maKhoaHoc:string,
  taiKhoan:string,
}
export interface CourseNotEnroll {
  maKhoaHoc: string
  biDanh: string
  tenKhoaHoc: string
}

export interface UserNotEnroll{
  taiKhoan: string
  hoTen: string
  biDanh: string
}