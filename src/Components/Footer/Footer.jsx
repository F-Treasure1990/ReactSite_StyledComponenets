import React from 'react'
import { Button } from '../../globalStyles'
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinksTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcon, SocialIcons, SocialIconsLink } from './Footer.style'
import { FaFacebook , FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our exclusiv membership to recieve the latest news and trends
        </FooterSubHeading>
        <FooterSubText>
          You can unsubscribe at any time!
        </FooterSubText>
        <Form>
          <FormInput name='email' type='email' placeholder='Your Email' />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>

          <FooterLinksItems>
            <FooterLinksTitle>About US</FooterLinksTitle>
            <FooterLink to='/sign-up'>How it Works</FooterLink>
            <FooterLink to='/'>Testimonials</FooterLink>
            <FooterLink to='/'>Careers</FooterLink>
            <FooterLink to='/'>Investors</FooterLink>
            <FooterLink to='/'>Terms of Service</FooterLink>
          </FooterLinksItems>

          <FooterLinksItems>
            <FooterLinksTitle>Contact Us</FooterLinksTitle>
            <FooterLink to='/sign-up'>How it Works</FooterLink>
            <FooterLink to='/'>Testimonials</FooterLink>
            <FooterLink to='/'>Careers</FooterLink>
            <FooterLink to='/'>Investors</FooterLink>
            <FooterLink to='/'>Terms of Service</FooterLink>
          </FooterLinksItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinksTitle>Videos</FooterLinksTitle>
            <FooterLink to='/sign-up'>How it Works</FooterLink>
            <FooterLink to='/'>Testimonials</FooterLink>
            <FooterLink to='/'>Careers</FooterLink>
            <FooterLink to='/'>Investors</FooterLink>
            <FooterLink to='/'>Terms of Service</FooterLink>
          </FooterLinksItems>

          <FooterLinksItems>
            <FooterLinksTitle>Social Media</FooterLinksTitle>
            <FooterLink to='/sign-up'>How it Works</FooterLink>
            <FooterLink to='/'>Testimonials</FooterLink>
            <FooterLink to='/'>Careers</FooterLink>
            <FooterLink to='/'>Investors</FooterLink>
            <FooterLink to='/'>Terms of Service</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <SocialIcon/>
          ULTRA
          </SocialLogo>
          <WebsiteRights>ULTRA © 2020</WebsiteRights>
          <SocialIcons>
            <SocialIconsLink href='/' target='_blank' aria-label='Facebook'><FaFacebook /></SocialIconsLink> 
            <SocialIconsLink href='/' target='_blank' aria-label='Instagram'><FaInstagram /></SocialIconsLink> 
            <SocialIconsLink href='/' target='_blank' aria-label='Youtube'><FaYoutube /></SocialIconsLink> 
            <SocialIconsLink href='/' target='_blank' aria-label='Twitter'><FaTwitter /></SocialIconsLink> 
            <SocialIconsLink href='/' target='_blank' aria-label='Linkedin'><FaLinkedin /></SocialIconsLink> 
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer
