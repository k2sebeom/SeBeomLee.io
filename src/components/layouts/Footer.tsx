import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

const FooterContainer = styled.div`
  width: 100%;

  height: 8rem;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  padding-bottom: 2rem;
`;

const SocialLink = styled.a`
  color: #999;

  font-size: 2rem;

  & svg {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  transition: font-size 0.5s ease;

  &:hover {
    font-size: 3rem;
  }
`;

function Footer(): JSX.Element {
  return (
    <FooterContainer>
      <SocialLink href="https://github.com/k2sebeom">
        <FaGithub />
      </SocialLink>

      <SocialLink href="https://www.linkedin.com/in/sebeom-lee/">
        <FaLinkedin />
      </SocialLink>

      <SocialLink href="https://www.youtube.com/channel/UCQQ4la41iee5cvfehWi5CWQ">
        <FaYoutube />
      </SocialLink>
    </FooterContainer>
  );
}

export default Footer;
