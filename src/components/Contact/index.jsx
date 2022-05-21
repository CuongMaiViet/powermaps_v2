import React, { useRef } from 'react'
import {
  ContactForm,
  ContactFormDesc,
  ContactFormHeading,
  ContactInput,
  ContactInputDescription,
  ContactInputRow,
  ContactMap,
  ContactMapInfo,
  ContactRow,
  ContactSection,
  Form,
} from './style'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useInView } from 'react-intersection-observer'
import Navbar from '../Navbar'
import ContactData from '../../data/ContactData'
import GlobalData from '../../data/GlobalData'

const Contactt = ({ id }) => {
  const { name, district, street, country, mail } = ContactData
  const refForm = useRef()
  const refBtn = useRef()

  const { ref, inView } = useInView({
    rootMargin: '-1000px',
  })

  const sendEmail = (e) => {
    e.preventDefault()
    refBtn.current.value = 'Sending...'
    emailjs
      .sendForm(
        'service_3xfjvt8',
        'template_qr179oa',
        refForm.current,
        'BWWCl6zaPgwnP3UD5'
      )
      .then(
        () => {
          refBtn.current.value = 'Send'
          alert('Successfully send email')
          window.location.reload(false)
        },
        () => {
          refBtn.current.value = 'Send'
          alert('fail to send email')
        }
      )
  }

  return (
    <>
      <ContactSection id={id}>
        <ContactRow>
          <ContactForm ref={ref}>
            <ContactFormHeading>Contact Us</ContactFormHeading>
            <ContactFormDesc>
              Love our service <br />
              Leave us your thinking
            </ContactFormDesc>
            <Form ref={refForm} onSubmit={sendEmail}>
              <ContactInputRow>
                <ContactInput
                  placeholder="Email"
                  type={'email'}
                  name="email"
                  required
                />
                <ContactInput
                  placeholder="Name"
                  type={'text'}
                  name="name"
                  required
                />
              </ContactInputRow>

              <ContactInput
                placeholder="Subject"
                type={'text'}
                name="subject"
                required
              />

              <ContactInputDescription
                placeholder="Message"
                rows={8}
                name="message"
              />
              <ContactInput
                ref={refBtn}
                style={{
                  fontWeight: 600,
                  width: '100%',
                  padding: '15px 25px',
                  background: GlobalData.primaryColor,
                  color: 'white',
                  cursor: 'pointer',
                  float: 'left',
                }}
                type="submit"
                value="Send"
              />
            </Form>

            <Navbar isFixed={false} hide={inView} />
          </ContactForm>

          <ContactMap>
            <ContactMapInfo>
              {name}
              <br />
              {district}
              <br />
              {street}
              <br />
              {country}
              <br />
              <br />
              {mail}
            </ContactMapInfo>
            <MapContainer
              style={{
                width: '100%',
                height: '100%',
              }}
              center={[44.96366, 19.61045]}
              zoom={13}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[44.96366, 19.61045]}>
                <Popup>PowerMaps company here</Popup>
              </Marker>
            </MapContainer>
          </ContactMap>
        </ContactRow>
      </ContactSection>
    </>
  )
}

export default Contactt
