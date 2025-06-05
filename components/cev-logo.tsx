import { cn } from "@/lib/utils";
import Image from "next/image";

interface CEVLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  priority?: boolean;
}

export const CEVLogo: React.FC<CEVLogoProps> = ({
  size = "md",
  className,
  priority = false,
}) => {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-32 h-32",
    lg: "w-40 h-40",
    xl: "w-48 h-48",
  };

  return (
    <div className={cn("relative", sizeClasses[size], className)}>
      <Image
        src="/logo.png"
        alt="CEV Educacional"
        fill
        className="object-contain drop-shadow-lg"
        priority={priority}
        sizes="192px"
      />
    </div>
  );
};
