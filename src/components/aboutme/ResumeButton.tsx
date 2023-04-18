import React from 'react';
import styled from 'styled-components';
import { HiOutlineDownload } from 'react-icons/hi';

const StyledButton = styled.button`
  padding-left: 0.7rem;
  padding-right: 0.7rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  margin-top: 0.3rem;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;

  color: ${(props) => props.theme.colors.labelColor};

  background-color: ${(props) => props.theme.colors.secondary};
  border: 2px solid ${(props) => props.theme.colors.primary};

  box-shadow: ${(props) => props.theme.colors.shadowPrimary};

  & svg {
    font-size: 1.3rem;
    margin-right: 0.3rem;
    width: 1.3rem;
    height: 1.3rem;
  }
`;

const ButtonLink = styled.a`
  text-decoration: none;
`;

function ResumeButton(): JSX.Element {
  return (
    <ButtonLink download="SeBeom_Lee_Resume.pdf" href="./resume/Moses_Resume.pdf">
      <StyledButton>
        <HiOutlineDownload />
        Download Resume
      </StyledButton>
    </ButtonLink>
  );
}

export default ResumeButton;
