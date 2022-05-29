import React from "react";

function PaymentInfo({ formData, setFormData }) {
  return (
    <div className="payment-info-container">
      <input
        type="text"
        placeholder="Enter Your Card Number"
        value={formData.nationality}
        onChange={(e) => {
          setFormData({ ...formData, nationality: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Enter Card Month.."
        value={formData.month}
        onChange={(e) => {
          setFormData({ ...formData, month: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Enter Card Year..."
        value={formData.Payment}
        onChange={(e) => {
          setFormData({ ...formData, Payment: e.target.value });
        }}
      />
    </div>
  );
}

export default PaymentInfo;