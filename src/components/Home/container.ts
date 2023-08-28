import { useCharactersLazyQuery } from "../../graphql/generated/graphql"
import { IModel } from "./model";
import { ReactJS } from "../../commons";
import { useEffect } from "react";

export const useContainer = (): IModel => {
    const [page, setPage] = ReactJS.useState(1);
    const [characters, setCharacters] = ReactJS.useState<any>([]);
    const scrollRef = ReactJS.useRef(null);
    const [getCharacters, { loading, error }] = useCharactersLazyQuery({ 
        onCompleted: (res) => {
            setCharacters([...characters, ...res.characters?.results!]);
        },
    });

    useEffect(() => {
        const getData = async() => {
            await getCharacters({variables: {page: page}});
        }
        getData();
    }, [page, getCharacters])

    const onScroll = async () => {
        if (scrollRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
            if (scrollTop + clientHeight + 10 >= scrollHeight && !loading) {
                setPage(page + 1);
            }
        }
    };

    return {
        isLoading: loading,
        errorName: error?.name,
        errorMessage: error?.message,
        data: characters,
        onScroll: onScroll,
        scrollRef: scrollRef
    }
}