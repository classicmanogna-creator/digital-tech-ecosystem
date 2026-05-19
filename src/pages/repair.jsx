import { useState } from "react";
import "./repair.css";

const Repair = () => {
  const [issue, setIssue] = useState("");
  const [complaints, setComplaints] = useState([]);

  // ✅ Add complaint
  const handlePost = () => {
    if (!issue.trim()) return;

    const today = new Date();
    const randomDays = Math.floor(Math.random() * 2) + 1;

    const serviceDate = new Date(today);
    serviceDate.setDate(today.getDate() + randomDays);

    const newComplaint = {
      id: Date.now(),
      text: issue,
      date: serviceDate.toDateString(),
      status: "Scheduled",
    };

    setComplaints([newComplaint, ...complaints]);
    setIssue("");
  };

  // ✅ Delete complaint
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this complaint?"
    );

    if (confirmDelete) {
      setComplaints(complaints.filter((c) => c.id !== id));
    }
  };

  return (
    <div className="repair-container">
      {/* 🔹 Input Section */}
      <div className="repair-box">
        <h2>Device Repair Service</h2>

        <input
          placeholder="Describe your issue..."
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
        />

        <button onClick={handlePost}>Post Complaint</button>
      </div>

      {/* 🔹 Complaint Cards */}
      <div className="complaint-list">
        {complaints.length === 0 ? (
          <p className="no-data">No complaints yet</p>
        ) : (
          complaints.map((c) => (
            <div className="complaint-card" key={c.id}>
              <h3>Complaint Registered</h3>

              <p><strong>Issue:</strong> {c.text}</p>
              <p><strong>Service Date:</strong> {c.date}</p>

              <p className="status">{c.status}</p>

              {/* ✅ Delete Button */}
              <button
                className="delete-btn"
                onClick={() => handleDelete(c.id)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Repair;