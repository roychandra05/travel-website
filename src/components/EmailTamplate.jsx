const EmailTamplate = ({ name, email, message, phoneNumber }) => {
  return (
    <section className="border p-4 text-main-primary bg-main-text">
      <h1>From: {name}</h1>
      <h3>Email: {email}</h3>
      <h3>Phone number: {phoneNumber}</h3>
      <p>
        {" "}
        <span style={{ fontWeight: "bold" }}>message: </span> {message}
      </p>
    </section>
  );
};
export default EmailTamplate;
