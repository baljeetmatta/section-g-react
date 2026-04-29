import * as yup from "yup"
//zod
import { passwordSchema } from "./passwordSchema"
export const UserSchema=yup.object({
    name:yup.string()
    .required("Name must be given")
    .min(4,"Name must of 4 characters")
    .trim()
    .lowercase(),
    age:yup.number()
    .required("Age must be give"),
    // .min(18,"Age must be greater than 18"),
    password:passwordSchema,
    // password:yup.string()
    // .required("Password must be given")
    // .min(6,"Min length is 6 characters")
    // ,
    confirmpassword:yup.string()
                    .oneOf([yup.ref("password")],"Password must match"),
    email:yup.string()
            .when("age",{
                is:(value:number)=>value>=18,
                then:schema=>
                    schema.required("email must be given")
                    .email("Email must be valid"),
                otherwise:schema=>
                    schema.notRequired()
            }).test("EmailError","Email already exists",
               value=>{
                    // let response=await fetch("");
                    // let output=response.json();

                // if(value?.startsWith("admin"))
                //     return false;
                // else return true;
                //return !value?.startsWith("admin")
            })
    // .required("Email must be given")
    // .email("email must be valid")
})