'use client';

import { cn } from '@/lib/utils';
import { getIcon, iconVariants, type IconName } from '@/lib/icons';
import { forwardRef } from 'react';

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: IconName;
  size?: keyof typeof iconVariants.size;
  color?: keyof typeof iconVariants.color;
  withBg?: boolean;
  bgColor?: keyof typeof iconVariants.bg;
  className?: string;
  strokeWidth?: number;
}

const Icon = forwardRef<HTMLSpanElement, IconProps>(
  (
    {
      name,
      size = 'md',
      color = 'default',
      withBg = false,
      bgColor = 'default',
      className,
      strokeWidth = 2,
      ...props
    },
    ref
  ) => {
    const IconComponent = getIcon(name);
    
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center',
          withBg && [
            'rounded-full p-1.5',
            iconVariants.bg[bgColor],
          ],
          className
        )}
        {...props}
      >
        <IconComponent
          className={cn(
            iconVariants.size[size],
            iconVariants.color[color],
            'flex-shrink-0',
          )}
          strokeWidth={strokeWidth}
          aria-hidden="true"
        />
      </span>
    );
  }
);

Icon.displayName = 'Icon';

export { Icon };
export type { IconProps };
