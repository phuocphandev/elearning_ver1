import { nameRegex, passwordRegex } from "constant";
import { z } from "zod";

export const RegisterSchema = z.object({
    taiKhoan: z
    .string()
    .nonempty("Fill in blank")
    .min(6, "Require at least 6 characters")
    .max(16, "Require at most 6 characters"),
  matKhau: z
    .string()
    .nonempty("Fill in blank")
    .regex(
      new RegExp(passwordRegex),
      "Your password required at least 8 character and 1 number"
    ),
  email: z.string().nonempty("Fill in blank").email("Invalid email"),
  soDT: z
    .string()
    .nonempty("Fill in blank")
    .regex(new RegExp(`^\\d+$`), { message: "Numbers only" }),
  maNhom: z.string().nonempty("Fill in blank").startsWith("GP", { message: 'Group must be initial with "GP" ' }),
  hoTen: z.string().nonempty("Fill in blank").regex(new RegExp(nameRegex), {
    message: "Text only",
  }),
})
export type RegisterSchemaType = z.infer<typeof RegisterSchema>