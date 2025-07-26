import { ReactNode, ReactElement, cloneElement } from 'react';
import React from 'react';

interface TornCardProps {
  children: ReactNode;
  className?: string;
}

const TornCard = ({ children, className = '' }: TornCardProps) => {
  const enhancedChildren = React.Children.map(children, (child) => {
    if (
      typeof child === 'object' &&
      (child as ReactElement).type === 'img'
    ) {
      return cloneElement(child as ReactElement, {
        className: `masked-image ${(child as ReactElement).props.className ?? ''}`.trim()
      });
    }
    return child;
  });

  return <div className={className}>{enhancedChildren}</div>;
};

export default TornCard;
