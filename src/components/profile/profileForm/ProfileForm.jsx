import React, { useState, useEffect } from "react";

const ProfileForm = ({ handleUpdateProfile, profile, setShowUpdateForm }) => {
  const [formData, setFormData] = useState({ address: "" });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdateProfile(formData);
    setFormData({ address: "" });
  };

  useEffect(() => {
    if (profile) {
      setFormData({ address: profile.address });
    }
  }, [profile]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          name="address"
          id="address"
          value={formData.address}
          onChange={handleChange}
        />
        <button type="submit">Update Address</button>
        <button type="button" onClick={() => setShowUpdateForm(null)}>
          Close
        </button>
      </form>
    </>
  );
};

export default ProfileForm;
