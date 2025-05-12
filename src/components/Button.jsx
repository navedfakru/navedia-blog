import React from "react";

export default function Button({
    children,
    type = "button",
    className = "default-btn",
    ...props
}) {
    return (
        <button type={type} className={`${className}`} {...props}>
            {children}
        </button>
    );
}
