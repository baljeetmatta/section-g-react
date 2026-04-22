import { useState } from "react";

const ReactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        age: ""
    })

    const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evt.target;
       
        setFormData((prev)=>({
            ...prev,
            [name]:value
        }))



    }
    const clickHandler = () => {

        console.log(formData);
        
            if(parseInt(formData.age)<18)
            {
                console.log("age is not valid");

                return;
            }
            console.log("Form submit");



    }
    return (
        <>
            <div>
                <form>
                <input required type="text" minLength={4} name="name" value={formData.name} onChange={changeHandler} />
                <input type="text" min={18} name="age" value={formData.age} onChange={changeHandler} />
                <input type="button" value="send" onClick={clickHandler} />
</form>
            </div></>
    )

}
export default ReactForm;
