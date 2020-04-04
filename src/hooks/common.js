import {useState} from 'react';

export const useFilterDynamic = (defaultFilters, callApi) => {
    const [filters, setFilters] = useState(defaultFilters);
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const updateFilters = (data) => {
        setFilters({
            ...filters,
            ...data,
        });
    };

    const fetch = (otherFilters) => {
        setLoading(true);
        return callApi({...filters, ...otherFilters})
            .catch(() => {
                setList([]);
                setHasMore(true);
            })
            .finally(() => {
                updateFilters(otherFilters);
                setLoading(false);
            });
    };

    const fetchData = async (otherFilters = {}) => {
        if (!hasMore) {
            return;
        }
        const updateList = await fetch(otherFilters);
        if (updateList.length < filters.limit) {
            setHasMore(false);
        }
        const newList = list.concat(updateList);
        console.log(newList);
        setList(newList);
    };

    const refreshPage = async () => {
        const updateList = await fetch({page: 1});
        if (updateList.length < filters.limit) {
            setHasMore(false);
        }
        setList(updateList);
    };

    const fetchNext = async () => {
        const {page} = filters;
        await fetchData({page: page + 1});
    };

    return {
        loading,
        filters,
        list,
        updateFilters,
        fetchData,
        refreshPage,
        fetchNext,
    };
};

export default {
    useFilterDynamic,
};
