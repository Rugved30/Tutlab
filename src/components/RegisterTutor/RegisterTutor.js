import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import * as Yup from "yup";
import { registerTutorAPI } from "../../apis/user/usersAPI";
//import { useNavigate } from "react-router-dom";

const initialValues = {
  name: '',
  email: '',
  phone: '',
  location: '',
  subject: '',
};
//validationSchema
const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
  phone: Yup.string().required('Required'),
  location: Yup.string().required('Required'),
  subject: Yup.string().required('Required'),
});

export const RegisterTutor = () => {
  //const navigate = useNavigate();

  //mutation
  const mutation = useMutation({mutationFn: registerTutorAPI});

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit : (values) => {
      console.log('Form Data', values);
      mutation.mutate(values)
      alert("form have been submitted successfully. Please wait for the response");
      //navigate
      //navigate("/");
    },
  });

  return(
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input 
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 mt-1">{formik.errors.name}</div>
            ) : null}
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input 
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 mt-1">{formik.errors.email}</div>
            ) : null}
          </div>
          <div>
            <label className="block mb-1 font-medium">Phone</label>
            <input 
              type="tel"
              id="phone"
              name="phone"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...formik.getFieldProps('phone')}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="text-red-500 mt-1">{formik.errors.phone}</div>
            ) : null}
          </div>
          <div>
            <label className="block mb-1 font-medium">Location</label>
            <input 
              type="text"
              id="location"
              name="location"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...formik.getFieldProps('location')}
            />
            {formik.touched.location && formik.errors.location ? (
              <div className="text-red-500 mt-1">{formik.errors.location}</div>
            ) : null}
          </div>
          <div>
            <label className="block mb-1 font-medium">Subject</label>
            <input 
              type="text"
              id="subject"
              name="subject"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...formik.getFieldProps('subject')}
            />
            {formik.touched.subject && formik.errors.subject ? (
              <div className="text-red-500 mt-1">{formik.errors.subject}</div>
            ) : null}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
};

