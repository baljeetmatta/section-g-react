import * as yup from "yup"
export const passwordSchema=yup.string().required("password must be given")
.min(6,"Min of 6 characters")
