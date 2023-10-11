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
export interface UserInfo {
    chiTietKhoaHocGhiDanh: any[]
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