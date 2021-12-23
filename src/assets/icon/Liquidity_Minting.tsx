import React from "react";
//type
import { IconProps } from "Types/components/Icon";
//--------------------------
const Liquidity_Minting: React.FC<IconProps> = ({
  iColor = "#E33319",
  iSize = { x: 30, y: 30 },
}) => {
  return (
    <svg
      width={iSize?.x}
      height={iSize?.y}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.242584 14.9995C0.242584 23.0997 6.80908 29.6662 14.9093 29.6662C23.0094 29.6662 29.5759 23.0997 29.5759 14.9995C29.5759 6.89932 23.0094 0.332832 14.9093 0.332832C6.80908 0.332832 0.242584 6.89932 0.242584 14.9995Z"
        fill="#3B3C4E"
      />
      <g clipPath="url(#clip0_3749_9226)">
        <path
          d="M18.691 23.2662C17.9106 23.2662 17.2467 22.7143 17.0837 21.9512C17.0022 21.5402 16.909 21.0471 16.8042 20.4953C16.5246 18.9102 16.0122 18.2997 14.9057 18.2527H13.7526V17.1255H15.0105C16.315 17.1255 17.1419 16.2567 17.1419 14.9299C17.1419 13.4271 16.2567 12.7696 14.9756 12.7696C14.7426 12.7696 13.2169 12.7696 11.4582 12.7696V22.5969C11.4582 22.9022 11.2136 23.137 10.9224 23.137C10.6196 23.137 10.3866 22.8905 10.3866 22.5969V12.7696C9.02393 12.7696 7.64957 12.7696 6.71781 12.7696C6.08887 12.7696 5.58804 12.2647 5.58804 11.6307C5.58804 11.6307 8.01063 11.6307 10.3866 11.6307V10.257C10.375 7.72087 12.0755 5.66617 14.1603 5.66617H17.6544C17.9572 5.66617 18.1902 5.91273 18.1902 6.20626C18.1902 6.49979 17.9456 6.74636 17.6544 6.74636H14.1603C12.6695 6.74636 11.4465 8.31967 11.4465 10.257V11.6072C13.112 11.6072 14.5563 11.6072 14.8824 11.6072C16.1752 11.6072 17.0255 11.9125 17.6195 12.5582C18.0853 13.0631 18.3532 13.8498 18.3532 14.7538C18.3532 16.2684 17.5612 17.2899 16.5712 17.7009V17.7478C17.2933 18.0531 17.7243 18.8867 17.9572 20.0843C18.1086 20.8945 18.2484 21.5754 18.3649 22.1038C18.493 22.6439 18.5978 23.0313 18.691 23.2662Z"
          fill={iColor}
        />
        <path
          d="M21.416 14.883V15.3174C21.416 15.517 21.253 15.6814 21.055 15.6814H20.6473C20.4493 15.6814 20.2863 15.517 20.2863 15.3174V14.883C20.2863 14.6834 20.4493 14.519 20.6473 14.519H21.055C21.2646 14.519 21.416 14.6834 21.416 14.883ZM21.3928 17.3486V22.8435C21.3928 23.0431 21.2297 23.2075 21.0317 23.2075H20.6823C20.4843 23.2075 20.3212 23.0431 20.3212 22.8435V17.3486C20.3212 17.149 20.4843 16.9847 20.6823 16.9847H21.0317C21.2413 16.9847 21.3928 17.149 21.3928 17.3486Z"
          fill={iColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_3749_9226">
          <rect
            width="15.84"
            height="17.6"
            fill="white"
            transform="translate(5.57593 5.66617)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default Liquidity_Minting;
