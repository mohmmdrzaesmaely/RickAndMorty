import { RefObject } from "react";

export interface IModel {
    isLoading: boolean;
    errorName?: string;
    errorMessage?: string;
    data?: any;
    scrollRef: RefObject<HTMLDivElement>
    onScroll: () => void;
}