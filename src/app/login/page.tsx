"use client"
import axios from 'axios'
import { useState } from 'react'
import styles from './page.module.css'
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

export default function Login() {

    const router = useRouter()

    const [formData, setFromData] = useState({
        username: "",
        email: ""
    })

    const handleChange = (e: any) => {
        setFromData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleLogout = () => {
        deleteCookie('token');
    }

    const onSubmit = async (e: any) => {
        e.preventDefault();
        console.log("Data submitted")

        await axios.post("http://localhost:3000/api/signup", formData)
            .then((response) => {
                console.log("data submitted successfully", response);

                const data = response.data;
                console.log(data)
                router.push("/");
            }).catch(err => {
                console.log("error while submitting");
            })
        // console.log(formData);
    }

    return (
        <>
            <button onClick={handleLogout} >logout</button>
            <form >
                <input type="text" placeholder="enter name" name='username' defaultValue={formData.username} onChange={handleChange} required />
                <input type="email" placeholder='enter email' name='email' defaultValue={formData.email} onChange={handleChange} required />
                <button onClick={onSubmit}> Submit</button>
            </form>
        </>
    )
}