import React from 'react'
import { useForm } from "react-hook-form";
import { API } from "../services/api";
import "./RegisterForm.scss";

const RegisterForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (formData) => {
      console.log(formData)
      API.post("users/register", formData).then((res) => {
        console.log(res);
      });
    };
  return (
    <form  className=" registro" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        {...register("email", { required: true })}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        {...register("password", { required: true })}
      />
      <label htmlFor="emoji">Elige tu Emoji:</label>
      <select
        name="emoji"
        id="emoji"
        {...register("emoji", { required: true })}
      >
        <option value="🐔">🐔</option>
        <option value="🦧">🦧</option>
        <option value="🔥">🔥</option>
        <option value="🥜">🥜</option>
      </select>
      <button type="submit">Register</button>
    </form>
    
  );



};

export default RegisterForm