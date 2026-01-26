'use client';

import Link from 'next/link';

type ButtonVariant = 'white' | 'white-primary' | 'primary' | 'dark' | 'outline';
type ButtonSize = 'default' | 'small';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

const variantStyles = {
  white: {
    container: 'bg-white',
    text: 'text-dark',
    icon: 'bg-primary',
    arrow: 'white',
  },
  'white-primary': {
    container: 'bg-white',
    text: 'text-primary',
    icon: 'bg-primary',
    arrow: 'white',
  },
  primary: {
    container: 'bg-primary',
    text: 'text-white',
    icon: 'bg-white',
    arrow: '#156BA8',
  },
  dark: {
    container: 'bg-dark',
    text: 'text-white',
    icon: 'bg-white',
    arrow: '#003860',
  },
  outline: {
    container: 'bg-white border border-primary',
    text: 'text-dark',
    icon: 'bg-primary',
    arrow: 'white',
  },
};

export default function Button({ href, children, variant = 'white', size = 'default', className = '' }: ButtonProps) {
  const styles = variantStyles[variant];
  const isSmall = size === 'small';

  return (
    <Link
      href={href}
      className={`inline-flex items-center ${styles.container} ${isSmall ? 'rounded-[18px] py-[4px] px-[5px]' : 'rounded-[20px] py-[5px] px-[6px]'} group hover:opacity-95 transition-all ${className}`}
    >
      <span className={`${styles.text} ${isSmall ? 'text-[16px] pl-[17px] pr-[22px]' : 'text-base pl-[19px] pr-[25px]'}`}>
        {children}
      </span>
      <span className={`${isSmall ? 'w-[40px] h-[40px] rounded-[12px]' : 'w-[45px] h-[45px] rounded-[14px]'} ${styles.icon} flex items-center justify-center group-hover:scale-105 transition-transform`}>
        <svg width={isSmall ? '18' : '20'} height={isSmall ? '18' : '20'} viewBox="0 0 24 24" fill="none" stroke={styles.arrow} strokeWidth="1.5">
          <path d="M6 18L18 6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 6h9v9" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </Link>
  );
}
