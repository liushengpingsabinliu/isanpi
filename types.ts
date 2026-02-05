import React from 'react';

export interface Product {
  id: string;
  name: string;
  subName: string;
  tag: string; // e.g., "Stop", "Rebuild"
  description: string;
  features: string[];
  imagePlaceholder: string; // Description for the user to replace
  activeIngredients: string;
}

export interface Step {
  id: string;
  title: string;
  englishTitle: string;
  icon: React.ReactNode;
  description: string;
  duration: string;
  color: string;
}

export interface Solution {
  id: string;
  title: string;
  subTitle: string;
  painPoints: string[];
  steps: {
    phase: string;
    product: string;
    action: string;
  }[];
}