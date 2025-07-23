import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/atoms/Card";
import { Button } from "@/components/atoms/Button";
import { cn } from "@/lib/utils";

const ToolCard = ({
  title,
  description,
  icon: Icon,
  iconColor = "text-blue-600",
  iconBgColor = "bg-blue-100",
  onAction,
  actionText = "Explorar →",
  disabled = false,
  className,
  ...props
}) => {
  return (
    <Card
      className={cn(
        "hover:shadow-lg transition-all duration-300 hover:scale-105",
        className
      )}
      {...props}
    >
      <CardHeader className="text-center">
        <div
          className={cn(
            "w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto",
            iconBgColor
          )}
        >
          <Icon className={cn("w-6 h-6", iconColor)} />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <Button
          variant="ghost"
          size="sm"
          className="w-full"
          onClick={onAction}
          disabled={disabled}
        >
          {actionText}
        </Button>
      </CardContent>
    </Card>
  );
};

export { ToolCard };
