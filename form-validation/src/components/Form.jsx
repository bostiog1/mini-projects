import React, { useState } from "react";
import formDefs from "../utils/formDefs";

const Form = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  // Handler for input changes
  const handleInputChange = (e, field) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validation
    if (field.errorPattern && !field.errorPattern.test(value)) {
      setErrors({ ...errors, [name]: field.errorMsg });
    } else if (field.minLength && value.length < field.minLength) {
      setErrors({ ...errors, [name]: field.errorMsg });
    } else {
      const { [name]: omit, ...rest } = errors;
      setErrors(rest);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation here, then submit the form
    console.log("Form Data:", formData);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-800 to-red-500">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-[500px]"
      >
        {formDefs.map((field, index) => (
          <div key={index} className="mb-6 flex items-center justify-between">
            <label className="mr-4 font-bold text-gray-700 w-1/3">
              {field.label}
            </label>
            <div className="w-2/3 relative">
              {field.type === "textarea" ? (
                <textarea
                  name={field.label.replace(" ", "").toLowerCase()}
                  placeholder={field.placeholder}
                  value={
                    formData[field.label.replace(" ", "").toLowerCase()] || ""
                  }
                  onChange={(e) => handleInputChange(e, field)}
                  className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-purple-500"
                />
              ) : (
                <input
                  type={field.type}
                  name={field.label.replace(" ", "").toLowerCase()}
                  placeholder={field.placeholder}
                  value={
                    formData[field.label.replace(" ", "").toLowerCase()] || ""
                  }
                  onChange={(e) => handleInputChange(e, field)}
                  className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-purple-500"
                />
              )}
              {errors[field.label.replace(" ", "").toLowerCase()] && (
                <div className="absolute right-0 top-0 mt-2 text-red-500 text-sm">
                  {errors[field.label.replace(" ", "").toLowerCase()]}
                </div>
              )}
            </div>
          </div>
        ))}
        <button
          type="submit"
          className="w-full py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
