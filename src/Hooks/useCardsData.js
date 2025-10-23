import axios from "axios";
import { useEffect, useState } from "react";

const useCardsData = () => {
    const [petservices, setPetService] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch petCareService
    useEffect(() => {
        setLoading(true);
        axios("../petCareService.json")
            .then((res) => {
                setPetService(res.data || []);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => setLoading(false));
    }, []);

    return { petservices, loading, error };
}

export default useCardsData