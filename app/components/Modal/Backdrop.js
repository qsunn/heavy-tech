import { useEffect } from "react";
import { Modal } from "./Modal";

export const Backdrop = ({ showMenuHandler, links }) => {
    const handleKeyDown = (e) => {
        if (e.code === "Escape") {
            showMenuHandler();
        }
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            showMenuHandler();
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    });

    return (
        <div
            className="backdrop hidden md:grid transition-all duration-500"
            onClick={handleBackdropClick}
        >
            <Modal links={links} />
        </div>
    );
};
