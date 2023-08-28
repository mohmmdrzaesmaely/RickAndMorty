import { IModel } from "./model";
import Loader from "../../assets/icons/loader.gif";
import { Character } from "../../graphql/generated/graphql";
import * as UIKit from "../Kit";

export const View = (props: IModel) => (
    props.isLoading && props.data.length === 0 ? (
        <div className="tw-flex tw-items-center tw-justify-center tw-h-screen">
            <img src={Loader} alt="loader"/>
        </div>    
    ) : 
    props.errorMessage ? (
        <div className="tw-h-screen tw-flex tw-items-center tw-justify-center">
            <div className="tw-flex tw-flex-col tw-items-center tw-w-2/3 tw-m-auto tw-bg-red-400 tw-py-12 tw-rounded-3xl">
                <p className="tw-text-xl tw-font-bold tw-text-white">{props.errorMessage}</p>
                <div className="tw-flex tw-flex-row tw-items-center tw-my-4">
                    <p className="tw-text-base tw-font-bold tw-mr-4">Error name:</p>
                    <p className="tw-text-base tw-font-bold">{props.errorName}</p>
                </div>
            </div>
        </div>
    ) :
    <div className="tw-w-full tw-flex tw-flex-col tw-items-center tw-pb-4 tw-overflow-y-hidden tw-h-screen">
        <p className="tw-bg-gradient-to-r tw-text-transparent tw-from-red-950 tw-via-gray-400 tw-to-blue-950 tw-bg-clip-text tw-text-3xl tw-font-extrabold tw-mt-4">
            Rick and Morty
        </p>
        <div 
        ref={props.scrollRef}
        onScroll={props.onScroll}
        className="tw-w-5/6 tw-py-5 tw-grid tw-grid-cols-5 tw-gap-8 tw-overflow-y-scroll theme-no-scrollbar">
            {props.data?.map((item: Character) => (
                <UIKit.CharacterCard 
                key={item.id}
                gender={item.gender || ""} 
                name={item.name || ""}
                image={item.image || ""}
                status={item.status || ""}/>
            ))}
        </div>
    </div>
) 