import React from "react";
import { cn } from "@/app/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-4", className)}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string;
  description?: string;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div className={cn("rounded-xl p-4 bg-neutral-800 border py-32 border-neutral-700", className)}>
      {header}
      <div className="flex items-center gap-2 mt-4">
        {icon}
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="text-neutral-400 mt-2">{description}</p>
    </div>
  );
};