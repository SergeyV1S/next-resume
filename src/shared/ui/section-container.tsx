import { cn } from "@shared/lib";

import { Typography } from "./typography";

interface ISectionContainerProps extends React.ComponentProps<"section"> {
  title: string;
}

export const SectionContainer = ({
  children,
  title,
  className,
  ...props
}: ISectionContainerProps) => (
  <section className={cn("space-y-6 rounded-xl p-4", className)} {...props}>
    <Typography tag='h2' variant='title_h2'>
      {title}
    </Typography>
    <div className='divide-accent-foreground divide-y-2 divide-dashed *:py-4 *:first:pt-0 *:last:pb-0'>
      {children}
    </div>
  </section>
);
