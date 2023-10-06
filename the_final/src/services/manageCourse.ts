import { apiInstance } from "constant";

const api = apiInstance({
    baseURL:import.meta.env.VITE_MANAGE_COURSE,
});
export const manageCourse = {
    getCourseMenu:()=>api.get('/LayDanhMucKhoaHoc'),
}