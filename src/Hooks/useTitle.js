import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Food-Service`;

    }, [title])
};

export default useTitle;