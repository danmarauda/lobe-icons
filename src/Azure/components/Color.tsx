import { forwardRef } from 'react';

import type { IconType } from '@/types';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  return (
    <svg
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 26 25"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M12.57.982H.908v11.386h11.664V.982z" fill="#F25022"></path>
      <path d="M25.462.982H13.8v11.386h11.663V.982z" fill="#7FBA00"></path>
      <path d="M12.57 13.565H.908V24.95h11.664V13.565z" fill="#00A4EF"></path>
      <path d="M25.463 13.565H13.8V24.95h11.663V13.565z" fill="#FFB900"></path>
    </svg>
  );
});

export default Icon;
