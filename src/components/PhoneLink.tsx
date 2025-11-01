// components/PhoneLink.tsx
import { BUSINESS, telHref } from "@/lib/business";

type Props = {
  className?: string;
  withIcon?: boolean;
};
export default function PhoneLink({ className = "", withIcon = true }: Props) {
  return (
    <a href={telHref} className={`text-[#7A0C0C] hover:underline ${className}`}>
      {withIcon ? "📞 " : null}
      {BUSINESS.phoneDisplay}
    </a>
  );
}
