import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-od-green-500 to-od-green-600 text-od-green-50 hover:from-od-green-600 hover:to-od-green-700 shadow-md hover:shadow-lg",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline: "border border-od-green-500/50 bg-gradient-to-r from-transparent to-transparent text-od-green-700 hover:from-od-green-500/10 hover:to-od-green-600/10 hover:border-od-green-400 hover:text-od-green-50",
        secondary: "bg-gradient-to-r from-od-tan-500 to-od-tan-600 text-od-tan-900 hover:from-od-tan-600 hover:to-od-tan-700 shadow-md hover:shadow-lg",
        ghost: "text-od-green-800 hover:bg-od-green-100 hover:text-od-green-900",
        link: "text-od-green-700 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
