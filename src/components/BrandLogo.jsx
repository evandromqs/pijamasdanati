import React from 'react';

/**
 * BrandLogo renders the official circular emblem of Pijamas da Naty.
 * Mobile-first with minimum 18px typography.
 */
export function BrandLogo({ size = 'md', showText = true, showTagline = false, className = '' }) {
  const sizes = {
    sm: 'w-10 h-10 sm:w-12 sm:h-12',
    md: 'w-13 h-13 sm:w-16 sm:h-16',
    lg: 'w-20 h-20 sm:w-24 sm:h-24',
    xl: 'w-28 h-28 sm:w-32 sm:h-32',
  };

  return (
    <div className={`inline-flex items-center gap-2 sm:gap-3 select-none ${className}`}>
      <div
        className={`relative rounded-full p-[2px] bg-gradient-to-tr from-[#CAA79B] via-[#E8CFC6] to-[#CAA79B] shadow-sm shrink-0 ${sizes[size] || sizes.md}`}
      >
        <div className="w-full h-full rounded-full overflow-hidden bg-[#FEE1DD] flex items-center justify-center border border-white/60">
          <img
            src={`${import.meta.env.BASE_URL}assets/brand/logo-circle.png`}
            alt="Logo Pijamas da Naty - Conforto em todas as noites"
            className="w-full h-full object-cover scale-[1.03]"
          />
        </div>
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-baseline gap-1.5 whitespace-nowrap">
            <span className="font-serif-brand font-bold text-[20px] sm:text-[26px] tracking-tight text-[#A5335E]">
              Pijamas
            </span>
            <span className="font-serif-brand font-bold text-[20px] sm:text-[26px] tracking-tight text-[#695A59]">
              da Naty
            </span>
          </div>
          {showTagline && (
            <span className="text-[18px] text-[#8C7A7B] font-medium mt-1">
              Conforto em todas as noites
            </span>
          )}
        </div>
      )}
    </div>
  );
}
