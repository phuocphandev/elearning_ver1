import { z } from "zod";

export const AddCourseSchema = z.object({
  maKhoaHoc: z.string().nonempty("Do not leave empty"),
  danhGia: z.string().regex(/^\b[0-5]\b$/, {
    message: "Rating must between 0 and 5",
  }),
  tenKhoaHoc: z.string().nonempty("Do not leave empty"),
  luotXem: z.string().nonempty("Do not leave empty"),
  maNhom: z.string().refine((value) => value != "null", {
    message: "Do not leave empty",
  }),
  moTa: z.string().nonempty("Please enter the field"),
  maDanhMucKhoaHoc: z.string().refine((value) => value != "null", {
    message: "Do not leave empty",
  }),
});

export type AddCourseSchemaType = z.infer<typeof AddCourseSchema>;
