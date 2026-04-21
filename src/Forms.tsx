import { useRef, useState } from "react";

// const Forms = () => {
//     // let name="";
//     const [name, setName] = useState("");
//     const [age, setAge] = useState("");
//     const [city, setCity] = useState("");


//     const nameChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {

//         //console.log(evt.target);
//         //console.log(evt.target.value)
//         //name=evt.target.value;
//         setName(evt.target.value);
//     }
//     const ageChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {

//         //console.log(evt.target);
//         //console.log(evt.target.value)
//         //name=evt.target.value;
//         setAge(evt.target.value);
//     }
//     const cityChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {

//         //console.log(evt.target);
//         //console.log(evt.target.value)
//         //name=evt.target.value;
//         setCity(evt.target.value);
//     }
//     const clickHandler = () => {
//         console.log(name,age,city);

//     }
//     const changeHandler = () => {
//         //name="Test";
//         setName("Test");


//     }
//     return (
//         <>
//             <div>
//                 <input type="text" value={name} onChange={nameChangeHandler} />
//                 <input type="text" value={age} onChange={ageChangeHandler} />
//                 <input type="text" value={city} onChange={cityChangeHandler} />

//                 <input type="button" value="Send" onClick={clickHandler} />
//                 <input type="button" value="Change" onClick={changeHandler} />

//             </div>
//         </>
//     )
// }

// const Forms=()=>{

//     const [formData,setFormData]=useState({
//         name:"",
//         age:"",
//         city:"",
//         phone:""
//     })
// const handleChange=(evt:React.ChangeEvent<HTMLInputElement>)=>{

//     //console.log(evt.target.name)

//     //evt.target=Object, keys(name,value)
//     //Destructing
//     const {name,value}=evt.target;

//        setFormData((prev)=>({
//         ...prev,
//         [name]:value
//        }

//        ))

// //Object obj={name:"Test"};
// //obj.name="Code";
// //x="name";
// //obj[x]="ssd"

// }
// const sendHandler=()=>{
//     console.log(formData);
// }
// const changeHandler=()=>{

//     setFormData((prev)=>({
//         ...prev,
//         "name":"Test"
//     }));
// }
//     return (
//         <>
//         <div>
//         <input name="name" type="text" value={formData.name} onChange={handleChange}/>
//         <input name="age" type="text" value={formData.age} onChange={handleChange}/>
//         <input name="city" type="text" value={formData.city} onChange={handleChange}/>
//         <input name="phone" type="text" value={formData.phone} onChange={handleChange}/>

//         <input type="button" value="send" onClick={sendHandler}/>
//         <input type="button" value="Change" onClick={changeHandler}/>
// </div>
//         </>
//     )
// }
// import { useForm } from "react-hook-form";

// const Forms = () => {
//     const { handleSubmit, register } = useForm();

//     //useForm->Object, Keys (handleSubmit,request)
//     //Destructuring
//     const mySubmit = (data: any) => {
//         console.log(data);

//     }
//     return (
//         <>
//             <div>
//                 <form onSubmit={handleSubmit(mySubmit)}>
//                     <input type="text" {...register("name")} />
//                     <input type="text" {...register("age")} />

//                     <input type="text" {...register("city")} />
//                     <input type="submit" />
//                 </form>


//             </div>
//         </>
//     )
// }
const Forms=()=>{
    const nameRef=useRef<HTMLInputElement|null>(null);
    const ageRef=useRef<HTMLInputElement|null>(null);
    const sendHandler=()=>{
        console.log(nameRef.current?.value,ageRef.current?.value,);

    }

    return (
        <>
        <input ref={nameRef} type="text"/>
        <input ref={ageRef} type="text"/>
        <input type="button" value="Send" onClick={sendHandler}/>

        </>
    )
}
export default Forms;
