import { IconProps } from "../type";

export function Dark({ size = "24px", className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2px"
      className={className}
    >
      <path d="M15.5,17c-4.69,0-8.5-3.81-8.5-8.5,0-2.47,1.06-4.68,2.73-6.23C5.3,3.3,2,7.26,2,12c0,5.52,4.48,10,10,10,4.74,0,8.7-3.3,9.73-7.73-1.55,1.68-3.77,2.73-6.23,2.73Z"/>
    </svg>
  )
}
