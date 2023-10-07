import { useEffect, useRef } from "react"
const useClickOutside = (handler: any, isActive: boolean) => {
    const ref = useRef<any>();
    useEffect(() => {
        const checkIfClickedOutside = (e: any) => {
            !ref.current.contains(e.target) && handler()
        }
        isActive && document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isActive, handler]);
    return ref;
}
export default useClickOutside;