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

  return (
    <Card className={cn(variants[variant], className)} {...props}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {title}
          </CardTitle>
          {Icon && <Icon className={cn("h-4 w-4", iconVariants[variant])} />}
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="text-2xl font-bold">{value}</div>
        {subtitle && (
          <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
        )}
      </CardContent>
    </Card>
  );
};

export { ResultCard };
