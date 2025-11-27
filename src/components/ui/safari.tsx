import { SVGProps } from "react";

type SafariMode = "default" | "simple";

export interface SafariProps extends SVGProps<SVGSVGElement> {
  url?: string;
  imageSrc?: string;
  videoSrc?: string;
  width?: number;
  height?: number;
  mode?: SafariMode;
}

export function Safari({
  imageSrc,
  videoSrc,
  url,
  width = 1203,
  height = 753,
  mode = "default",
  ...props
}: SafariProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ borderRadius: '12px', overflow: 'hidden' }}
      {...props}
    >
      <g clipPath="url(#path0)">
        <path
          d="M0 52H1202V741C1202 747.627 1196.63 753 1190 753H12C5.37258 753 0 747.627 0 741V52Z"
          className="fill-[#E5E5E5] dark:fill-[#404040]"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 12C0 5.37258 5.37258 0 12 0H1190C1196.63 0 1202 5.37258 1202 12V52H0L0 12Z"
          className="fill-[#E5E5E5] dark:fill-[#404040]"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.06738 12C1.06738 5.92487 5.99225 1 12.0674 1H1189.93C1196.01 1 1200.93 5.92487 1200.93 12V51H1.06738V12Z"
          className="fill-white dark:fill-[#262626]"
        />
        <circle
          cx="27"
          cy="25"
          r="6"
          className="fill-[#E5E5E5] dark:fill-[#404040]"
        />
        <circle
          cx="47"
          cy="25"
          r="6"
          className="fill-[#E5E5E5] dark:fill-[#404040]"
        />
        <circle
          cx="67"
          cy="25"
          r="6"
          className="fill-[#E5E5E5] dark:fill-[#404040]"
        />
        <path
          d="M286 17C286 13.6863 288.686 11 292 11H946C949.314 11 952 13.6863 952 17V35C952 38.3137 949.314 41 946 41H292C288.686 41 286 38.3137 286 35V17Z"
          className="fill-[#E5E5E5] dark:fill-[#404040]"
        />
        <g className="mix-blend-luminosity">
          <text
            x="580"
            y="30"
            fill="#A3A3A3"
            fontSize="12"
            fontFamily="Arial, sans-serif"
          >
            {url}
          </text>
        </g>
        {mode === "default" ? (
          <>
            <g className="mix-blend-luminosity">
              <path
                d="M265.5 33.8984C265.641 33.8984 265.852 33.8516 266.047 33.7422C270.547 31.2969 272.109 30.1641 272.109 27.3203V21.4219C272.109 20.4844 271.742 20.1484 270.961 19.8125C270.094 19.4453 267.18 18.4297 266.328 18.1406C266.07 18.0547 265.766 18 265.5 18C265.234 18 264.93 18.0703 264.672 18.1406C263.82 18.3828 260.906 19.4531 260.039 19.8125C259.258 20.1406 258.891 20.4844 258.891 21.4219V27.3203C258.891 30.1641 260.461 31.2812 264.945 33.7422C265.148 33.8516 265.359 33.8984 265.5 33.8984ZM265.922 19.5781C266.945 19.9766 269.172 20.7656 270.344 21.1875C270.562 21.2656 270.617 21.3828 270.617 21.6641V27.0234C270.617 29.3125 269.469 29.9375 265.945 32.0625C265.727 32.1875 265.617 32.2344 265.508 32.2344V19.4844C265.617 19.4844 265.734 19.5156 265.922 19.5781Z"
                fill="#A3A3A3"
              />
            </g>
          </>
        ) : null}
        {/* Default background when no image/video */}
        {!imageSrc && !videoSrc && (
          <rect
            x="1"
            y="52"
            width={width - 2}
            height={height - 52}
            fill="#f8f9fa"
            className="dark:fill-[#1a1a1a]"
            clipPath="url(#roundedBottom)"
          />
        )}
        {imageSrc && (
          <image
            href={imageSrc}
            width={width - 2}
            height={height - 52}
            x="1"
            y="52"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#roundedBottom)"
          />
        )}
        {videoSrc && (
          <foreignObject
            x="1"
            y="52"
            width={width - 2}
            height={height - 52}
            clipPath="url(#roundedBottom)"
          >
            <video
              className="size-full overflow-hidden object-contain bg-gray-900"
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
            />
          </foreignObject>
        )}
      </g>
      <defs>
        <clipPath id="path0">
          <rect width={width} height={height} fill="white" />
        </clipPath>
        <clipPath id="roundedBottom">
          <path
            d={`M1 52H${width - 1}V${height - 12}C${width - 1} ${height - 5.925} ${width - 6.08} ${height} ${width - 12} ${height}H12C5.92486 ${height} 1 ${height - 5.925} 1 ${height - 12}V52Z`}
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
