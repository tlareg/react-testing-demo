import React from 'react';
import cn from 'classnames';
import './LoadingOverlay.css';

// eslint-disable-next-line react/prop-types
export const LoadingOverlay = ({ children, isLoading }) => (
  <div
    className={cn('LoadingOverlay', { 'LoadingOverlay--isLoading': isLoading })}
  >
    {children}
    <div className='LoadingOverlay__background'>
      <div className='LoadingOverlay__spinner'></div>
    </div>
  </div>
);
