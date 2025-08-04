import { cn } from "@shared/lib";

import { Typography } from "./typography";

interface ISectionContainerProps extends React.ComponentProps<"section"> {
  title: string;
  meta?: string;
}

export const SectionContainer = ({
  children,
  title,
  meta,
  className,
  ...props
}: ISectionContainerProps) => (
  <section className={cn("space-y-6 rounded-xl p-4", className)} {...props}>
    <div className='flex items-center gap-2 rounded border p-4'>
      <Typography tag='h2' variant='title_h2'>
        {title}
      </Typography>
      {meta && (
        <>
          <span className='mt-1'>-</span>
          <Typography tag='h2' variant='title_h2'>
            {meta}
          </Typography>
        </>
      )}
    </div>
    <div className='divide-accent-foreground divide-y-2 divide-dashed *:py-4 *:first:pt-0 *:last:pb-0'>
      {children}
    </div>
  </section>
);
