import { apiInstance } from "constant";
import { RegisterSchemaType } from "schema/RegisterSchema";

const api = apiInstance({
    baseURL:import.meta.env.VITE_MANAGE_USER,
})
export const manageUser = {
    register:(payload:RegisterSchemaType)=>api.post('/DangKy',payload)
}