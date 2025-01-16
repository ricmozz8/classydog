import SecondaryButton from "@/Components/Buttons/SecondaryButton";
export default function RightButton({trigger, ...params}) {

    return (
        <SecondaryButton {...params} onClick={() => trigger()}>
            <i className="las la-arrow-right"></i>
        </SecondaryButton>
    )
};
