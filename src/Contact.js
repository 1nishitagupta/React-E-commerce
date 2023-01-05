import styled from "styled-components";

const Contact = () => {


  return (
    <Wrapper>
      <h2 className="common-heading">Contact</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.5199083343487!2d75.80494611485145!3d26.855218183152424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db675f594300b%3A0x16a3a8393db6f913!2sGaurav%20Tower!5e0!3m2!1sen!2sin!4v1672385555391!5m2!1sen!2sin"
        width="100%"
        height="300"
        style={{border:0}}
        title="1"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>


      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/mayzwrak" method="post" className="contact-inputs">
            <input type="text" name="username" placeholder="Username" autoComplete="off" required/>
            <input type="email" name="email" placeholder="E-mail" autoComplete="off" required/>
            <textarea name="message" placeholder="Enter Your Message Here" cols="30" rows="10" required />
            <input type="submit"></input>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
padding: 5rem 0 5rem 0;
text-align: center;

.container {
  margin-top: 6rem;

  .contact-form {
    max-width: 50rem;
    margin: auto;

    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.btn};
          transform: scale(0.9);
        }
      }
    }
  }
}
`;

export default Contact;
