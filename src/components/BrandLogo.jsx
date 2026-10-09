import React from 'react';

/**
 * BrandLogo renders the official circular emblem of Pijamas da Naty.
 * Mobile-first with minimum 18px typography.
 */
export function BrandLogo({ size = 'md', showText = true, showTagline = false, className = '' }) {
  const sizes = {
    sm: 'w-12 h-12',
    md: 'w-14 h-14 sm:w-16 sm:h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32',
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
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
        <div className="flex flex-col leading-tight">
          <div className="flex items-baseline gap-1.5 flex-wrap">
            <span className="font-serif-brand font-bold text-[24px] sm:text-[28px] tracking-tight text-[#A5335E]">
              Pijamas
            </span>
            <span className="font-script-brand text-[26px] sm:text-[30px] text-[#A05F66]">
              da Naty
            </span>
          </div>
          {showTagline && (
            <span className="text-[18px] text-[#8C7A7B] font-medium mt-0.5">
              Conforto em todas as noites
            </span>
          )}
        </div>
      )}
    </div>
  );
}
