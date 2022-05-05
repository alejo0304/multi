import { memo, SVGProps } from 'react';

const Polygon5Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 71 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M35.3995 24.75L0.412501 -3.57622e-07H70.3865L35.3995 24.75Z' fill='#62B038' fillOpacity={0.6} />
  </svg>
);

const Memo = memo(Polygon5Icon);
export { Memo as Polygon5Icon };
