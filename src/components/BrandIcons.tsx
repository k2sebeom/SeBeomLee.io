import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

// Lucide ships no brand logos, so these wrap Font Awesome icons with
// Lucide's `size` / `className` props to make them interchangeable.
export interface IconProps {
  size?: number;
  className?: string;
}

const brandIcon = (icon: IconDefinition): React.FC<IconProps> => {
  const BrandIcon: React.FC<IconProps> = ({ size = 24, className }) => (
    <FontAwesomeIcon
      icon={icon}
      className={className}
      style={{ width: size, height: size }}
      aria-hidden
    />
  );
  return BrandIcon;
};

export const GithubIcon = brandIcon(faGithub);
export const LinkedinIcon = brandIcon(faLinkedin);
