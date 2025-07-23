import React from "react";
import { Label } from "@/components/atoms/Label";
import { Input } from "@/components/atoms/Input";
import { cn } from "@/lib/utils";

const FormField = React.forwardRef(
  (
    { label, error, description, className, id, required = false, ...props },
    ref
  ) => {
    return (
      <div className={cn("space-y-2", className)}>
        <Label
          htmlFor={id}
          className={cn(
            "block",
            required && "after:content-['*'] after:ml-0.5 after:text-red-500"
          )}
        >
          {label}
        </Label>
        <Input
          id={id}
          ref={ref}
          className={cn(error && "border-red-500 focus-visible:ring-red-500")}
          {...props}
        />
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

FormField.displayName = "FormField";

export { FormField };
