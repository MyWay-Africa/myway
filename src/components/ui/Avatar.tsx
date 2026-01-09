import Image from "next/image";

type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";

interface AvatarProps {
  src?: string | null;
  alt?: string;
  name?: string;
  size?: AvatarSize;
  className?: string;
}

const sizeStyles: Record<AvatarSize, { container: string; text: string }> = {
  xs: { container: "w-6 h-6", text: "text-xs" },
  sm: { container: "w-8 h-8", text: "text-sm" },
  md: { container: "w-10 h-10", text: "text-base" },
  lg: { container: "w-12 h-12", text: "text-lg" },
  xl: { container: "w-16 h-16", text: "text-xl" },
};

const getInitials = (name: string): string => {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

const getColorFromName = (name: string): string => {
  const colors = [
    "bg-red-500",
    "bg-orange-500",
    "bg-amber-500",
    "bg-yellow-500",
    "bg-lime-500",
    "bg-green-500",
    "bg-emerald-500",
    "bg-teal-500",
    "bg-cyan-500",
    "bg-sky-500",
    "bg-blue-500",
    "bg-indigo-500",
    "bg-violet-500",
    "bg-purple-500",
    "bg-fuchsia-500",
    "bg-pink-500",
  ];

  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  return colors[Math.abs(hash) % colors.length];
};

export default function Avatar({
  src,
  alt = "Avatar",
  name = "",
  size = "md",
  className = "",
}: AvatarProps) {
  const { container, text } = sizeStyles[size];

  if (src) {
    return (
      <div
        className={`
          relative overflow-hidden rounded-full
          ${container}
          ${className}
        `}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
    );
  }

  if (name) {
    return (
      <div
        className={`
          flex items-center justify-center
          rounded-full text-white font-medium
          ${container}
          ${text}
          ${getColorFromName(name)}
          ${className}
        `}
      >
        {getInitials(name)}
      </div>
    );
  }

  return (
    <div
      className={`
        flex items-center justify-center
        rounded-full bg-gray-200 text-gray-500
        ${container}
        ${className}
      `}
    >
      <svg
        className="w-1/2 h-1/2"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}
