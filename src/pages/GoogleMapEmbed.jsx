import React from "react";

const GoogleMapEmbed = ({ latitude, longitude, zoom = 13 }) => {
  const mapSrc = `https://www.google.com/maps?q=${latitude},${longitude}&z=${zoom}&output=embed`;

  return (
    <div style={{ width: "100%", height: "400px", border: "1px solid #ddd" }}>
      <iframe
        title="Google Map"
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMapEmbed;
