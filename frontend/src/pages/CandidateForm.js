import React, { useState, useContext } from "react";

import axios from "axios";

import logo from "../assets/logo.png";

import { ThemeContext } from "../App";

import { FaMoon, FaSun } from "react-icons/fa";

function CandidateForm() {

  const { darkMode, setDarkMode } =
    useContext(ThemeContext);

  const [formData, setFormData] = useState({

    candidate_name: "",
    phone_number: "",
    email_id: "",
    qualification: "",
    experience: "",
    role_applied_for: "",
    application_source: "",
    current_status: "🆕 Applied",
    interview_round: "Not Started",
    communication_skills: "",
    technical_skills: "",
    sales_orientation: "",
    recruiter_name: "",
    remarks: "",
    next_action: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    // PHONE VALIDATION
    if (!/^[0-9]{10}$/.test(formData.phone_number)) {

      alert(
        "Phone Number must contain exactly 10 digits"
      );

      return;
    }

    // EMAIL VALIDATION
    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email_id
      )
    ) {

      alert("Please enter valid email");

      return;
    }

    try {

      await axios.post(
        "http://127.0.0.1:8000/api/candidates/add/",
        formData
      );

      alert(
        "Application Submitted Successfully"
      );

      window.location.reload();

    } catch (error) {

      console.log(error);

      alert("Error Submitting Form");
    }
  };

  return (

    <div className={`min-h-screen py-10 px-4 transition-all duration-500

      ${darkMode

      ? "bg-[#0f172a]"

      : "bg-gradient-to-br from-pink-50 via-white to-purple-50"

      }`}>

      {/* MAIN CARD */}

      <div className={`max-w-7xl mx-auto rounded-[35px]

      overflow-hidden border shadow-2xl

      ${darkMode

      ? "bg-[#111827] border-gray-700 text-white"

      : "bg-white/90 border-pink-100 backdrop-blur-lg"

      }`}>

        {/* HEADER */}

        <div className="bg-gradient-to-r

        from-[#5B21B6]

        via-[#C026D3]

        to-[#FF1493]

        text-white

        p-4 md:p-5

        relative">

          {/* LOGO */}

          <div className="absolute left-6 top-1/2 -translate-y-1/2">

            <img
              src={logo}
              alt="DataTech Labs"
              className="h-12 md:h-16"
            />

          </div>

          {/* TITLE */}

          <div className="text-center">

            <h1 className="text-4xl md:text-5xl font-extrabold">

              Hiring Portal

            </h1>

            <p className="mt-2 text-pink-100 text-sm md:text-lg">

              Candidate Registration Form

            </p>

          </div>

          {/* DARK MODE */}

          <div className="absolute right-6 top-1/2 -translate-y-1/2">

            <button

              onClick={() =>
                setDarkMode(!darkMode)
              }

              className="bg-white text-black

              p-3 rounded-full shadow-lg"
            >

              {darkMode
                ? <FaSun />
                : <FaMoon />
              }

            </button>

          </div>

        </div>

        {/* TOP BANNER */}

        <div className="m-6 rounded-3xl p-8

        bg-gradient-to-r

        from-[#5B21B6]

        to-[#FF1493]

        text-white shadow-xl">

          <h2 className="text-3xl font-bold">

            Candidate Registration

          </h2>

          <p className="mt-2 text-pink-100">

            Fill in the details below
            to register a new candidate

          </p>

        </div>

        {/* FORM */}

        <form

          onSubmit={handleSubmit}

          className="grid grid-cols-1

          md:grid-cols-2 gap-6 p-8"
        >

          <InputField
            label="Candidate Name"
            name="candidate_name"
            handleChange={handleChange}
            darkMode={darkMode}
          />

          {/* PHONE */}

          <InputField
            label="Phone Number"
            name="phone_number"
            handleChange={handleChange}
            darkMode={darkMode}
            maxLength="10"
          />

          {/* EMAIL */}

          <InputField
            label="Email ID"
            name="email_id"
            type="email"
            handleChange={handleChange}
            darkMode={darkMode}
          />

          {/* DROPDOWNS */}

          <SelectField
            label="Qualification"
            name="qualification"
            darkMode={darkMode}
            handleChange={handleChange}
            options={[
              "MBA Marketing",
              "MBA International Business",
              "BBA",
              "PGDM",
              "BE/BTech",
              "MCA",
              "MSc IT",
              "BCom",
              "MCom",
              "Engineering Student",
              "Other"
            ]}
          />

          <SelectField
            label="Experience"
            name="experience"
            darkMode={darkMode}
            handleChange={handleChange}
            options={[
              "Fresher",
              "0–1 Year",
              "1–3 Years",
              "3–5 Years",
              "5+ Years"
            ]}
          />

          <SelectField
            label="Role Applied For"
            name="role_applied_for"
            darkMode={darkMode}
            handleChange={handleChange}
            options={[
              "Sales Intern",
              "Enterprise Business Intern",
              "Enterprise Trainer – AI & Emerging Tech",
              "Business Development Intern",
              "AI Trainer",
              "Corporate Sales Executive",
              "Strategic Partnerships Intern",
              "Data Analytics Trainer",
              "Other"
            ]}
          />

          <SelectField
            label="Application Source"
            name="application_source"
            darkMode={darkMode}
            handleChange={handleChange}
            options={[
              "LinkedIn",
              "Naukri",
              "Referral",
              "College",
              "Walk-in",
              "Email",
              "Other"
            ]}
          />

          <SelectField
            label="Interview Round"
            name="interview_round"
            darkMode={darkMode}
            handleChange={handleChange}
            options={[
              "HR Round",
              "Technical Round",
              "Manager Round",
              "Final Round",
              "Demo Round (Trainer)",
              "Not Started"
            ]}
          />

          <SelectField
            label="Communication Skills"
            name="communication_skills"
            darkMode={darkMode}
            handleChange={handleChange}
            options={[
              "Excellent",
              "Good",
              "Average",
              "Below Average"
            ]}
          />

          <SelectField
            label="Technical Skills"
            name="technical_skills"
            darkMode={darkMode}
            handleChange={handleChange}
            options={[
              "Strong",
              "Good",
              "Average",
              "Weak",
              "Not Required (for Sales Intern)"
            ]}
          />

          <SelectField
            label="Sales Orientation"
            name="sales_orientation"
            darkMode={darkMode}
            handleChange={handleChange}
            options={[
              "Very Strong",
              "Strong",
              "Moderate",
              "Low"
            ]}
          />

          <SelectField
            label="Recruiter Name"
            name="recruiter_name"
            darkMode={darkMode}
            handleChange={handleChange}
            options={[
              "Mansi Bagal",
              "Other"
            ]}
          />

          <SelectField
            label="Remarks"
            name="remarks"
            darkMode={darkMode}
            handleChange={handleChange}
            options={[
              "⭐ Strong Candidate",
              "⭐ Good Potential",
              "🟢 Good Communication",
              "🟢 Good Profile",
              "🟡 Needs Improvement",
              "🟡 Average Candidate",
              "🔴 Not Suitable",
              "🔴 Poor Communication",
              "❌ No Response",
              "⭐ High Priority"
            ]}
          />

          <SelectField
            label="Next Action"
            name="next_action"
            darkMode={darkMode}
            handleChange={handleChange}
            options={[
              "Schedule Interview",
              "Schedule Technical Round",
              "Schedule Demo Session",
              "Follow-up Tomorrow",
              "Send Assignment",
              "Hold Profile",
              "Reject Candidate",
              "Offer Discussion",
              "Awaiting Feedback"
            ]}
          />

          {/* BUTTON */}

          <div className="md:col-span-2

          flex justify-center mt-10 mb-6">

            <button

              type="submit"

              className="bg-gradient-to-r

              from-[#5B21B6]

              to-[#FF1493]

              hover:scale-105

              transition-all duration-300

              text-white px-12 py-4

              rounded-2xl text-lg

              font-bold shadow-xl"
            >

              Submit Candidate

            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

/* INPUT FIELD */

function InputField({

  label,
  name,
  handleChange,
  type = "text",
  darkMode,
  maxLength

}) {

  return (

    <div>

      <label className={`block mb-2

      text-sm font-bold tracking-wide

      ${darkMode

      ? "text-gray-200"

      : "text-[#312E81]"

      }`}>

        {label}

      </label>

      <input

        type={type}

        name={name}

        maxLength={maxLength}

        onInput={(e) => {

          if (name === "phone_number") {

            e.target.value =
              e.target.value.replace(
                /[^0-9]/g,
                ""
              );
          }
        }}

        onChange={handleChange}

        className={`w-full border

        rounded-2xl px-4 py-4

        transition-all duration-300

        focus:ring-2

        focus:ring-pink-400

        focus:border-pink-400

        ${darkMode

        ? "bg-[#1F2937] text-white border-gray-600 placeholder-gray-400"

        : "bg-white border-pink-100 text-gray-700 placeholder-gray-400 shadow-sm"

        }`}
      />

    </div>
  );
}

/* SELECT FIELD */

function SelectField({

  label,
  name,
  handleChange,
  options,
  darkMode

}) {

  return (

    <div>

      <label className={`block mb-2

      text-sm font-bold tracking-wide

      ${darkMode

      ? "text-gray-200"

      : "text-[#312E81]"

      }`}>

        {label}

      </label>

      <select

        name={name}

        onChange={handleChange}

        className={`w-full border

        rounded-2xl px-4 py-4

        transition-all duration-300

        focus:ring-2

        focus:ring-pink-400

        focus:border-pink-400

        ${darkMode

        ? "bg-[#1F2937] text-white border-gray-600"

        : "bg-white border-pink-100 text-gray-700 shadow-sm"

        }`}
      >

        <option value="">
          Select
        </option>

        {options.map((item, index) => (

          <option key={index}>
            {item}
          </option>

        ))}

      </select>

    </div>
  );
}

export default CandidateForm;