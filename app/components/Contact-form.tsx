"use client";
import React, { useState } from "react";
import { toast } from "sonner";
export const ContactForm = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || email || message) {
      toast("Please Fill all the fields");
      return;
    }
    //Mock API call here
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("API Call Successfull");
      }, 1000);
    });
    if (response) {
      toast.success("Form Submitted successfully");
    } else {
      toast.error("Something went wrong");
    }
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-lg flex-col gap-5 py-10"
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-sm font-medium tracking-tight text-neutral-700"
        >
          Full Name
        </label>
        <input
          id="name"
          name="name"
          onChange={handleChange}
          type="text"
          placeholder="Vedant"
          className="shadow-aceternity focus:ring-primary rounded-md px-2 py-1 text-sm focus:ring-2 focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-sm font-medium tracking-tight text-neutral-700"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          onChange={handleChange}
          type="text"
          placeholder="Vedant"
          className="shadow-aceternity focus:ring-primary rounded-md px-2 py-1 text-sm focus:ring-2 focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-sm font-medium tracking-tight text-neutral-700"
        >
          Message
        </label>
        <textarea
          rows={5}
          id="message"
          name="message"
          onChange={handleChange}
          placeholder="How can i help you?"
          className="shadow-aceternity focus:ring-primary resize-none rounded-md px-2 py-1 text-sm focus:ring-2 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="bg-primary rounded-md px-4 py-2 text-white"
      >
        Send Message
      </button>
    </form>
  );
};
