import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Email = {
    name: string;
    email: string;
    message: string;
};
const schema = yup
    .object({
        name: yup.string().required(),
        email: yup.string().email("Please use a valid email.").required(),
        message: yup.string().required(),
    })
    .required();

export default function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Email>({ resolver: yupResolver(schema) });

    const onSubmit = async (formData: any, e: any) => {
        e.preventDefault();

        try {
            let response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                toast.success("Your message has been sent!");
            } else {
                toast.error("There was a problem sending your message.");
            }
        } catch (error) {
            toast.error("There was a problem when sending your message.");
        }
    };

    return (
        <section className="py-20" id="contact">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4 mb-8 lg:w-1/2 lg:mb-0">
                        <div className="max-w-lg">
                            <h2 className="mb-8 text-3xl font-bold leading-tight lg:mb-12 md:text-4xl md:leading-tight lg:text-4xl lg:leading-tight font-heading">
                                Questions, Concerns, Need a Quote?
                            </h2>
                            <h3 className="mb-1 text-2xl font-bold font-heading">
                                Address
                            </h3>
                            <address className="text-lg leading-loose text-blue-500">
                                1228 E. McLellan Blvd. Phoenix, AZ 85014
                            </address>
                            <h3 className="mb-1 text-2xl font-bold font-heading">
                                Phone
                            </h3>
                            <p className="text-lg leading-loose text-blue-500">
                                (480) 796-4060
                            </p>
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label>
                                <span className="block text-left">
                                    {errors.name
                                        ? "Name: " + errors.name.message
                                        : "Name"}
                                </span>
                                <input
                                    className="w-full py-3 pl-3 mb-4 border rounded"
                                    type="text"
                                    placeholder="Name"
                                    {...register("name", { required: true })}
                                />
                            </label>
                            <label>
                                <span className="block text-left">
                                    {errors.email
                                        ? "Email: " + errors.email.message
                                        : "Email"}
                                </span>
                                <input
                                    className="w-full py-3 pl-3 mb-4 border rounded"
                                    type="email"
                                    placeholder="E-mail"
                                    {...register("email", { required: true })}
                                />
                            </label>
                            <label>
                                <span className="block text-left">
                                    {errors.message
                                        ? "Message: " + errors.message.message
                                        : "Message"}
                                </span>
                                <textarea
                                    className="w-full p-3 mb-4 border rounded resize-none"
                                    cols={30}
                                    rows={10}
                                    placeholder="Your Message..."
                                    {...register("message", { required: true })}
                                />
                            </label>
                            <button
                                type="submit"
                                className="block px-5 py-3 text-sm font-semibold text-white transition duration-200 bg-blue-500 border border-blue-500 rounded hover:bg-blue-600 hover:border-blue-600"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
