import { JSX } from 'react';

export enum SelectedPage {
  Home = 'home',
  Benefits = 'benefits',
  OurClasses = 'ourclasses',
  ContactUs = 'contactus',
}

// Benefit Type
export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

// Class Type
export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
