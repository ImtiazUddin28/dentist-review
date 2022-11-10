import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - TeethFair`;
    }, [title])
};

export default useTitle;