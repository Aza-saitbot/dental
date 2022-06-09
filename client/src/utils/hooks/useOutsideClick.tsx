
import React,{useEffect} from "react";



export const useOutsideClick = (
    ref: React.RefObject<HTMLDivElement>,
    componentHandleClick: (e: React.MouseEvent<HTMLDivElement>) => void,
    /* eslint-disable-next-line */
    triggerButton?: React.RefObject<any> | undefined
) => {
    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            // @ts-ignore
            if (
                ref.current &&
                // @ts-ignore
                !ref.current.contains(e.target) &&
                triggerButton &&
                // @ts-ignore
                !triggerButton.current.contains(e.target)
            ) {
                // @ts-ignore
                componentHandleClick(e);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [ref]);
};

// export const useQuery = () => new URLSearchParams(useLocation().search);