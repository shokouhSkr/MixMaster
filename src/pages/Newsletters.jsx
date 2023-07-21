import React from "react";
import { Form, redirect, useNavigation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

// instead of submit form manually:
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData); // {name: 'John', lastName: 'Doe', email: 'JohnDoe@gmail.com'}

  try {
    const res = await axios.post(newsletterUrl, data);
    console.log(res);
    toast.success(res.data.msg);

    return redirect("/"); // redirect to home after submitting automatically
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Newsletters = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>our newsletter</h4>

      {/* name */}
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          // defaultValue="John"
          required
          className="form-input"
        />
      </div>

      {/* last name */}
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          last name
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          // defaultValue="Doe"
          required
          className="form-input"
        />
      </div>

      {/* email */}
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          defaultValue="test@test.com"
          required
          className="form-input"
        />
      </div>

      {/* button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-block"
        style={{ marginTop: "0.5rem" }}
      >
        {isSubmitting ? "submitting" : "submit"}
      </button>
    </Form>
  );
};

export default Newsletters;
