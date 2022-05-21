import styled from 'styled-components'

export const ContactSection = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
  background: #000;
  @media screen and (max-width: 1000px) {
    height: 130vh;
  }
`

export const ContactRow = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
`

export const ContactForm = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

export const ContactMap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

export const ContactMapInfo = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.2);
  bottom: 0;
  right: 0;
  z-index: 999999;
  padding: 20px;
  color: #fff;
  font-family: 'Helvetica';
  font-size: 17px;
  font-weight: 300;
  backdrop-filter: blur(6px);
`

export const Form = styled.form`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -80%);
  width: 70%;
  /* margin: 0 auto; */
  -webkit-box-reflect: below 0px
    linear-gradient(transparent, rgba(0, 0, 0, 0.1));
  @media screen and (max-width: 1050px) {
    width: 90%;
  }
`

export const ContactFormHeading = styled.h1`
  background-color: white;
  text-align: center;
  font-size: 3rem;
  margin-top: 100px;
  @media screen and (max-width: 1000px) {
    font-size: 2rem;
  }
`

export const ContactFormDesc = styled.div`
  text-align: center;
  color: white;
  font-size: 1.5rem;
  margin-top: 60px;
  font-weight: 500;
  @media screen and (max-width: 1000px) {
    font-size: 1rem;
    margin: 30px 0;
  }
`

export const ContactInputRow = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
`

export const ContactInput = styled.input`
  height: fit-content;
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
`
export const ContactInputDescription = styled.textarea`
  height: fit-content;
  width: 100%;
  padding: 10px 15px;
  border-radius: 5px;
  margin-bottom: 10px;
  border: none;
  outline: none;
`
