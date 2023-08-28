interface CharacterData {
    image: string;
    name: string;
    gender: string;
    status: string;
}

export const CharacterCard = ({
    image, 
    name,
    gender,
    status
}: CharacterData) => {
    return (
        <div className="tw-w-full tw-flex tw-flex-col tw-border-2 tw-rounded-lg tw-border-gray-900 hover:tw-scale-105 tw-transition-all tw-ease-in">
            <img 
            src={image} 
            alt={name}
            className="tw-w-full tw-rounded-t-lg"/>
            <div className="tw-w-full tw-p-3">
                <p className="tw-text-xl tw-font-bold tw-w-full tw-text-center tw-mb-3">
                    {name}
                </p>
                <div className="tw-w-full tw-flex tw-flex-row tw-items-row tw-justify-between tw-mb-1">
                    <p className="tw-text-sm tw-font-bold">
                        Gender:
                    </p>
                    <p className="tw-text-base">
                        {gender}
                    </p>
                </div>
                <div className="tw-w-full tw-flex tw-flex-row tw-items-row tw-justify-between">
                    <p className="tw-text-sm tw-font-bold">
                        Status:
                    </p>
                    <p className="tw-text-base">
                        {status}
                    </p>
                </div>
            </div>
        </div>
    )
}