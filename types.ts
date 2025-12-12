import React from 'react';

export interface HeroProps {
  name: string;
}

export interface SocialLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}
