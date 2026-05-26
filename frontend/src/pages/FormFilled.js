import React, { useEffect, useState } from "react";

import axios from "axios";

import * as XLSX from "xlsx";

import jsPDF from "jspdf";

import autoTable from "jspdf-autotable";

function FormFilled() {

    const [candidates, setCandidates] = useState([]);

    useEffect(() => {

        fetchCandidates();

    }, []);

    const fetchCandidates = async () => {

        const response = await axios.get(
            "http://127.0.0.1:8000/api/candidates/all/"
        );

        setCandidates(response.data);
    };

    const updateStatus = async (id, status) => {

        await axios.put(
            `http://127.0.0.1:8000/api/candidates/status/${id}/`,
            {
                current_status: status
            }
        );

        fetchCandidates();
    };

    const exportExcel = () => {

        const worksheet =
            XLSX.utils.json_to_sheet(candidates);

        const workbook =
            XLSX.utils.book_new();

        XLSX.utils.book_append_sheet(
            workbook,
            worksheet,
            "Candidates"
        );

        XLSX.writeFile(
            workbook,
            "Candidates.xlsx"
        );
    };

    const exportPDF = () => {

        const doc = new jsPDF("landscape");

        doc.setFontSize(18);

        doc.text(
            "Candidate Management Report",
            14,
            15
        );

        autoTable(doc, {

            startY: 25,

            head: [[

                "Name",

                "Phone",

                "Email",

                "Qualification",

                "Experience",

                "Role",

                "Source",

                "Status",

                "Interview Round",

                "Communication",

                "Technical",

                "Sales",

                "Recruiter",

                "Remarks",

                "Next Action"
            ]],

            body: candidates.map((item) => ([

                item.candidate_name,

                item.phone_number,

                item.email_id,

                item.qualification,

                item.experience,

                item.role_applied_for,

                item.application_source,

                item.current_status,

                item.interview_round,

                item.communication_skills,

                item.technical_skills,

                item.sales_orientation,

                item.recruiter_name,

                item.remarks,

                item.next_action
            ])),

            styles: {

                fontSize: 7,

                cellPadding: 2
            },

            headStyles: {

                fillColor: [41, 128, 185]
            },

            theme: "grid"
        });

        doc.save("Candidates_Report.pdf");
    };
    return (

        <div className="min-h-screen bg-gray-100 p-8">

            <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">

                <div className="bg-gradient-to-r from-indigo-700 to-blue-700 p-8 flex justify-between items-center">

                    <div>

                        <h1 className="text-4xl font-bold text-white">
                            Candidate Dashboard
                        </h1>

                        <p className="text-gray-200 mt-2">
                            Manage candidate applications
                        </p>

                    </div>

                    <div className="flex gap-3">

                        <button
                            onClick={exportExcel}
                            className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl font-semibold"
                        >
                            Export Excel
                        </button>

                        <button
                            onClick={exportPDF}
                            className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-xl font-semibold"
                        >
                            Export PDF
                        </button>

                    </div>

                </div>

                {/*<div className="overflow-x-auto p-6">*/}
                <div className="overflow-x-auto rounded-3xl shadow-lg">
                    <table className="w-full border-collapse min-w-[1800px]">

                        <thead className="bg-gradient-to-r from-[#5B21B6] to-[#FF1493] text-white">

                            <tr>

                                <th className="p-4">
                                    Candidate Name
                                </th>

                                <th className="p-4">
                                    Phone Number
                                </th>

                                <th className="p-4">
                                    Email ID
                                </th>

                                <th className="p-4">
                                    Qualification
                                </th>

                                <th className="p-4">
                                    Experience
                                </th>

                                <th className="p-4">
                                    Role Applied
                                </th>

                                <th className="p-4">
                                    Application Source
                                </th>

                                <th className="p-4">
                                    Current Status
                                </th>

                                <th className="p-4">
                                    Interview Round
                                </th>

                                <th className="p-4">
                                    Communication Skills
                                </th>

                                <th className="p-4">
                                    Technical Skills
                                </th>

                                <th className="p-4">
                                    Sales Orientation
                                </th>

                                <th className="p-4">
                                    Recruiter Name
                                </th>

                                <th className="p-4">
                                    Remarks
                                </th>

                                <th className="p-4">
                                    Next Action
                                </th>

                                <th className="p-4">
                                    Handle
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {candidates.map((item) => (
                                <tr
                                    key={item.id}

                                    className="border-b hover:bg-pink-50 transition-all duration-300"
                                    >

                                    <td className="p-4">
                                        {item.candidate_name}
                                    </td>

                                    <td className="p-4">
                                        {item.phone_number}
                                    </td>

                                    <td className="p-4">
                                        {item.email_id}
                                    </td>

                                    <td className="p-4">
                                        {item.qualification}
                                    </td>

                                    <td className="p-4">
                                        {item.experience}
                                    </td>

                                    <td className="p-4">
                                        {item.role_applied_for}
                                    </td>

                                    <td className="p-4">
                                        {item.application_source}
                                    </td>

                                    <td className="p-4 font-semibold">
                                        {item.current_status}
                                    </td>

                                    <td className="p-4">
                                        {item.interview_round}
                                    </td>

                                    <td className="p-4">
                                        {item.communication_skills}
                                    </td>

                                    <td className="p-4">
                                        {item.technical_skills}
                                    </td>

                                    <td className="p-4">
                                        {item.sales_orientation}
                                    </td>

                                    <td className="p-4">
                                        {item.recruiter_name}
                                    </td>

                                    <td className="p-4">
                                        {item.remarks}
                                    </td>

                                    <td className="p-4">
                                        {item.next_action}
                                    </td>

                                    {/* HANDLE STATUS */}

                                    <td className="p-4">

                                        <select

                                        value={item.current_status}

                                        className="border rounded-xl px-3 py-2"

                                        onChange={(e) =>
                                            updateStatus(
                                            item.id,
                                            e.target.value
                                            )
                                        }
                                        >

                                        <option>
                                            🆕 Applied
                                        </option>

                                        <option>
                                            📞 Contacted
                                        </option>

                                        <option>
                                            🔵 Interview Scheduled
                                        </option>

                                        <option>
                                            🟣 HR Round Completed
                                        </option>

                                        <option>
                                            🟠 Technical Round
                                        </option>

                                        <option>
                                            🟡 Follow-up Pending
                                        </option>

                                        <option>
                                            🟢 Selected
                                        </option>

                                        <option>
                                            🔴 Rejected
                                        </option>

                                        <option>
                                            ❌ No Response
                                        </option>

                                        <option>
                                            ✅ Joined
                                        </option>

                                        </select>

                                    </td>

                                    </tr>
                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
}

export default FormFilled;