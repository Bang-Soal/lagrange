import { BaseIcon } from "./BaseIcon";

export default BaseIcon(({ color, size }) => (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.2069 10.5856L17.4144 7.79249C17.3215 7.6996 17.2113 7.62592 17.0899 7.57565C16.9686 7.52539 16.8385 7.49951 16.7072 7.49951C16.5759 7.49951 16.4458 7.52539 16.3245 7.57565C16.2031 7.62592 16.0929 7.6996 16 7.79249L8.29313 15.5C8.19987 15.5925 8.12593 15.7026 8.0756 15.824C8.02528 15.9453 7.99959 16.0755 8.00001 16.2069V19C8.00001 19.2652 8.10536 19.5196 8.2929 19.7071C8.48043 19.8946 8.73479 20 9.00001 20H11.7931C11.9245 20.0004 12.0546 19.9747 12.176 19.9244C12.2973 19.8741 12.4075 19.8001 12.5 19.7069L20.2069 12C20.2998 11.9071 20.3734 11.7969 20.4237 11.6755C20.474 11.5542 20.4999 11.4241 20.4999 11.2928C20.4999 11.1615 20.474 11.0314 20.4237 10.9101C20.3734 10.7887 20.2998 10.6785 20.2069 10.5856ZM18 12.7925L15.2069 9.99999L16.7069 8.49999L19.5 11.2925L18 12.7925Z" fill={color} />
    </svg>
));