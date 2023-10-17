import { RegisterSchemaType } from "schema"

export type LoginUser ={
    accessToken:string
    email:string
    hoTen:string
    maLoaiNguoiDung:string
    maNhom:string
    soDT:string
    taiKhoan:string
}
export interface chiTietKhoaHocGhiDanh {
    maKhoaHoc: string
    tenKhoaHoc: string
    biDanh: string
    moTa: string
    luotXem: number
    hinhAnh: string
    ngayTao: string
    danhGia: number
  }
export interface UserInfo {
    chiTietKhoaHocGhiDanh: chiTietKhoaHocGhiDanh[]
    taiKhoan: string
    matKhau: string
    hoTen: string
    soDT: string
    maLoaiNguoiDung: string
    maNhom: string
    email: string
  }
export type UpdateUser = RegisterSchemaType &{
    maLoaiNguoiDung:string
}

