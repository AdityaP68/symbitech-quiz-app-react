const Footer = () => {
  return (
    <div
      style={{
        textAlign: "center",
        maxHeight: '40px',
        background: '#3f51b5',
        color: '#ffffff',
        padding:'0.7rem'
      }}
    >
      Made with ♥ by {" "}
      <a
        href="https://github.com/AdityaP68"
        style={{ cursor: "pointer" }}
      >
        Aditya Prakash
      </a>
    </div>
  );
};

export default Footer;
