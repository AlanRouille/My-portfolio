import { ComponentPropsWithoutRef } from 'react';

export const TailwindcssIcon = (
  props: ComponentPropsWithoutRef<'svg'> & { size?: number }
) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 256 154"
      version="1.1"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <linearGradient
          x1="-2.77777778%"
          y1="32%"
          x2="100%"
          y2="67.5555556%"
          id="linearGradient-1"
        >
          <stop stop-color="#2298BD" offset="0%"></stop>
          <stop stop-color="#0ED7B5" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g>
        <path
          d="M128,-1.0658141e-14 C93.8666667,-1.0658141e-14 72.5333333,17.0666667 64,51.2 C76.8,34.1333333 91.7333333,27.7333333 108.8,32 C118.537481,34.4343704 125.497363,41.4985481 133.201067,49.3184 C145.750756,62.0567704 160.275437,76.8 192,76.8 C226.133333,76.8 247.466667,59.7333333 256,25.6 C243.2,42.6666667 228.266667,49.0666667 211.2,44.8 C201.462519,42.3656296 194.502637,35.3014519 186.798933,27.4816 C174.249244,14.7432296 159.724563,-1.0658141e-14 128,-1.0658141e-14 Z M64,76.8 C29.8666667,76.8 8.53333333,93.8666667 0,128 C12.8,110.933333 27.7333333,104.533333 44.8,108.8 C54.5374815,111.23437 61.497363,118.298548 69.2010667,126.1184 C81.7507556,138.85677 96.275437,153.6 128,153.6 C162.133333,153.6 183.466667,136.533333 192,102.4 C179.2,119.466667 164.266667,125.866667 147.2,121.6 C137.462519,119.16563 130.502637,112.101452 122.798933,104.2816 C110.249244,91.5432296 95.724563,76.8 64,76.8 Z"
          fill="url(#linearGradient-1)"
        ></path>
      </g>
    </svg>
  );
};
