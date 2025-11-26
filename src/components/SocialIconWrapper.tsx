import type { IconType } from "react-icons";

interface SocialIconProps {
  Icon: IconType;
  className?: string;
}

export default function SocialIconWrapper({ Icon, className }: SocialIconProps) {
  if (!Icon) return null;
  return <Icon className={className} style={{ width: '18px', height: '18px' }} />;
}
