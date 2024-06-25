import { BaseIcon } from "./BaseIcon";

export default BaseIcon(({ color, size }) => (
    <svg width={size ? size : "16"} height={size ? size : "16"} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill={color} d="M14.4781 12.1593L12.4038 2.29683C12.3769 2.16786 12.3249 2.04546 12.2506 1.93666C12.1763 1.82786 12.0813 1.73481 11.9709 1.66285C11.8606 1.59089 11.7371 1.54145 11.6076 1.51736C11.4781 1.49326 11.3451 1.495 11.2163 1.52246L8.29062 2.15121C8.03184 2.20787 7.8059 2.36442 7.66194 2.5868C7.51798 2.80918 7.46764 3.07941 7.52187 3.33871L9.59625 13.2012C9.64248 13.4262 9.76477 13.6285 9.94255 13.7739C10.1203 13.9194 10.3428 13.9992 10.5725 14C10.6435 13.9999 10.7143 13.9923 10.7837 13.9775L13.7094 13.3487C13.9685 13.2919 14.1946 13.1351 14.3386 12.9123C14.4826 12.6895 14.5327 12.4189 14.4781 12.1593ZM8.5 3.13433C8.5 3.13058 8.5 3.12871 8.5 3.12871L11.425 2.50371L11.6331 3.49558L8.70813 4.12496L8.5 3.13433ZM9.125 6.09558L8.91562 5.10183L11.8419 4.47308L12.0506 5.46683L9.125 6.09558ZM13.5 12.3712L10.575 12.9962L10.3669 12.0043L13.2919 11.375L13.5 12.3656C13.5 12.3693 13.5 12.3712 13.5 12.3712ZM6.5 1.99996H3.5C3.23478 1.99996 2.98043 2.10531 2.79289 2.29285C2.60536 2.48039 2.5 2.73474 2.5 2.99996V13C2.5 13.2652 2.60536 13.5195 2.79289 13.7071C2.98043 13.8946 3.23478 14 3.5 14H6.5C6.76522 14 7.01957 13.8946 7.20711 13.7071C7.39464 13.5195 7.5 13.2652 7.5 13V2.99996C7.5 2.73474 7.39464 2.48039 7.20711 2.29285C7.01957 2.10531 6.76522 1.99996 6.5 1.99996ZM3.5 2.99996H6.5V3.99996H3.5V2.99996ZM6.5 13H3.5V12H6.5V13Z" />
    </svg>
));