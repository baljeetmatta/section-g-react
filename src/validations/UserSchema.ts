import * as yup from "yup"
export const UserSchema=yup.object({
    name:yup.string()
    .required("Name must be given")
    .length(4,"Name must of 4 characters")
    .trim()
    .lowercase(),
    age:yup.number()
    .required("Age must be give")
    .min(18,"Age must be greater than 18")
})