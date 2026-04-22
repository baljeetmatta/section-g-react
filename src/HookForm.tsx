// import {useForm} from "react-hook-form"
// import './App.css'
// const HookForm=()=>{

//     const {handleSubmit,register,formState,watch}=useForm();

//     const {errors}=formState;

//     const mySubmit=(data:any)=>{
//         console.log(data);

//     }
//     const values=watch(["name","age"]);

//     return (
//         <>
//         {JSON.stringify(values)}
//         <form onSubmit={handleSubmit(mySubmit)}>
//             <input type="text" {...register("name",{
//                 required:"name must be defined",
//                 minLength:{
//                     value:4,
//                     message:"Name must of atleast 4 characters"
//                 },
//                 validate:{
//                     adminError:value=>{
//                         return value!="admin"||"Name is not valid"
//                     }

//                 }
//                 // validate:value=>{
//                 //     return value!="admin"||"Name is not valid"
//                 // }
//             })}/>
//             {errors.name?<p className="error-msg">{errors.name.message}</p>:""}
//             <input type="text" {...register("age",{
//                 valueAsNumber:true,
//                 min:{
//                     value:18,
//                     message:"Value must >18"
//                 }
//             })}/>
//             {errors.age && <p className="error-msg">{errors.age.message}</p>}
//             <input type="submit"/>


//         </form>
//         </>
//     )
// }
// export default HookForm;
// //required,minLength,maxLength,min,max,pattern,validate

import {useForm} from "react-hook-form"
import './App.css'
import { yupResolver } from "@hookform/resolvers/yup";
import { UserSchema } from "./validations/UserSchema";
const HookForm=()=>{

    const {handleSubmit,register,formState,watch}=useForm({
        resolver:yupResolver(UserSchema)
    });

    const {errors}=formState;

    const mySubmit=(data:any)=>{
        console.log(data);

    }
    const values=watch(["name","age"]);

    return (
        <>
        {/* {JSON.stringify(values)} */}
        <form onSubmit={handleSubmit(mySubmit)}>
            <input type="text" {...register("name",)}/>
            {errors.name?<p className="error-msg">{errors.name.message}</p>:""}
            <input type="text" {...register("age")}/>
            {errors.age && <p className="error-msg">{errors.age.message}</p>}
            <input type="submit"/>


        </form>
        </>
    )
}
export default HookForm;
//required,minLength,maxLength,min,max,pattern,validate
