const GoogleMap = ({
  embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2720.7073973658057!2d28.876333300000002!3d47.006718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c080b177905%3A0x5ef6e1359739c414!2sStrada%20Calea%20Basarabiei%2036%2C%20Chi%C8%99in%C4%83u!5e0!3m2!1sen!2s!4v1755722709499!5m2!1sen!2s",
  width = "100%",
  height = "300px",
  className = "",
}) => {
  return (
    <iframe
      src={embedUrl}
      width={width}
      height={height}
      className={className}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map"
    />
  );
};

export default GoogleMap;
