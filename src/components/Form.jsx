import { useState } from "react";
import Button from "./Button";
import { postData } from "../services/post";
import { useForm } from "react-hook-form";

function Form({setUpdate}) {
    const [error, setError] = useState("");
    const  id = crypto.randomUUID();

    const { register, handleSubmit,  formState: { errors }, reset } = useForm({
        defaultValues: {
            id,
            firstName: "",
            lastName: "",
            age: "18",
            gender: "Male",
            bloodType: "",
            image: `https://i.pravatar.cc/200?=${id}`,
        }
    });

    const formSubmitHandler = async (data) => {
        try {

            postData({ ...data });
            setUpdate((update) => update + 1)
            reset();
        } catch (error) {
            setError(error.message);
        }
    };
    return (
        <>
            <form className="registration-form" onSubmit={handleSubmit(formSubmitHandler)} >

                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" placeholder="Your name" {...register("firstName", { required: "First name is required", })} />
                <div className="error">{errors.firstName?.message}</div>


                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" placeholder="Your last name" {...register("lastName", { required: "Last name is required" })} />
                <div className="error">{errors.lastName?.message}</div>


                <label htmlFor="age">Age</label>
                <input type="number" id="age" placeholder="Your age" {...register("age", {
                    required: "Age is required", min: { value: 18, message: "You must be at least 18 years old" }
                })} />
                <div className="error">{errors.age?.message}</div>

                <label htmlFor="gender">Gender</label>
                <select id="gender" {...register("gender")} >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>

                <label htmlFor="bloodType">Blood Type</label>
                <select id="bloodType" {...register("bloodType")}>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>O+</option>
                    <option>O-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                </select>

                <label htmlFor="image">Image</label>
                <input id="image" type="text" {...register("image")} />

                <Button>Register</Button>
            </form>
            {error && <p>{error}</p>}
        </>
    );
}

export default Form;

