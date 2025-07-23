import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/atoms/Card";
import { cn } from "@/lib/utils";

const ResultCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  variant = "default",
  className,
  ...props
}) => {
  const variants = {
    default: "border-gray-200",
    success: "border-green-200 bg-green-50/50",
    info: "border-blue-200 bg-blue-50/50",
    warning: "border-yellow-200 bg-yellow-50/50",
  };

  const iconVariants = {
    default: "text-gray-600",
    success: "text-green-600",
    info: "text-blue-600",
    warning: "text-yellow-600",
  };

  // Función para determinar el tamaño del texto basado en la longitud del valor
  const getTextSize = (value) => {
    const valueStr = String(value);
    if (valueStr.length > 12) {
      return "text-sm font-bold"; // Muy largo
    } else if (valueStr.length > 8) {
      return "text-base font-bold"; // Largo
    } else {
      return "text-xl font-bold"; // Normal
    }
  };

  return (
    <Card
      className={cn(variants[variant], "min-h-[120px]", className)}
      {...props}
    >
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {title}
          </CardTitle>
          {Icon && (
            <Icon
              className={cn("h-4 w-4 flex-shrink-0", iconVariants[variant])}
            />
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-0 flex flex-col justify-between flex-1">
        <div className={cn(getTextSize(value), "leading-tight mb-1")}>
          {value}
        </div>
        {subtitle && (
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        )}
      </CardContent>
    </Card>
  );
};

export { ResultCard };
