import { apiInstance } from "constant";
import { LoginSchemaType, RegisterSchemaType } from "schema";
import { LoginUser, UpdateUser, UserInfo } from "types";


const api = apiInstance({
    baseURL:import.meta.env.VITE_MANAGE_USER,
})
export const manageUser = {
    register:(payload:RegisterSchemaType)=>api.post('/DangKy',payload),
    login:(payload:LoginSchemaType)=>api.post<LoginUser>('/DangNhap',payload),
    getUserInfo:()=>api.post<UserInfo>('/ThongTinNguoiDung'),
    updateUser:(payload:UpdateUser)=>api.put('/CapNhatThongTinNguoiDung',payload),
}