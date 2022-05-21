import React from 'react'
import { SocialIcon } from '../../data/FooterData'
import resources from '../../data/resources'
import { Container } from '../../globalStyles'
import {
  FooterColumn,
  FooterIconLink,
  FooterImg,
  FooterLogo,
  FooterOther,
  FooterRow,
  FooterSection,
  FooterWrapper,
} from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FooterWrapper>
          <FooterLogo to={'/home'}>
            <FooterImg src={resources.logo} />
          </FooterLogo>
          <FooterOther>
            <FooterColumn>
              <FooterRow>
                {SocialIcon.map((e, i) => (
                  <FooterIconLink
                    target="_blank"
                    rel="noreferrer"
                    href={e.to}
                    key={i}
                  >
                    <FontAwesomeIcon
                      icon={e.icon}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </FooterIconLink>
                ))}
              </FooterRow>
              <div style={{ fontSize: '0.7rem' }}>
                @ 2010 ~ 2022 <br /> Powermaps Tuning LLC
              </div>
            </FooterColumn>

            <FooterColumn>
              <div
                className="office"
                style={{
                  fontSize: '1rem',
                  color: '#1598ec',
                  fontWeight: 'bold',
                }}
              >
                UK Office
              </div>
              <FooterColumn style={{ gap: '0.3rem' }}>
                <span>PowerMap Ltd</span>
                <span>Sophia House</span>
                <span>Cathedral Road</span>
                <span>Cardiff</span>
                <span>UK</span>
              </FooterColumn>
            </FooterColumn>
          </FooterOther>
        </FooterWrapper>
      </Container>
    </FooterSection>
  )
}

export default Footer
