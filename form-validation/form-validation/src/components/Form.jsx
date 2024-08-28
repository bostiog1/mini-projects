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
    <div
      style={{
        background: "linear-gradient(135deg, #6a0dad, #ff4500)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          padding: "2rem",
          borderRadius: "10px",
          backgroundColor: "white",
          width: "500px",
          boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        {formDefs.map((field, index) => (
          <div
            key={index}
            style={{
              marginBottom: "1.5rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <label
              style={{ marginRight: "1rem", fontWeight: "bold", flex: "1" }}
            >
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <textarea
                name={field.label.replace(" ", "").toLowerCase()}
                placeholder={field.placeholder}
                value={
                  formData[field.label.replace(" ", "").toLowerCase()] || ""
                }
                onChange={(e) => handleInputChange(e, field)}
                style={{
                  width: "70%",
                  padding: "0.5rem 0",
                  borderRadius: "0",
                  border: "none",
                  borderBottom: "2px solid #ccc",
                  minHeight: "80px",
                  flex: "2",
                  outline: "none",
                }}
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
                style={{
                  width: "70%",
                  padding: "0.5rem 0",
                  borderRadius: "0",
                  border: "none",
                  borderBottom: "2px solid #ccc",
                  flex: "2",
                  outline: "none",
                }}
              />
            )}
            {errors[field.label.replace(" ", "").toLowerCase()] && (
              <div style={{ color: "red", marginTop: "0.5rem" }}>
                {errors[field.label.replace(" ", "").toLowerCase()]}
              </div>
            )}
          </div>
        ))}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.75rem",
            backgroundColor: "#6a0dad",
            color: "white",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
