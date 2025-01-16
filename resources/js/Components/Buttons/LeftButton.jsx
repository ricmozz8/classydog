import SecondaryButton from "@/Components/Buttons/SecondaryButton";
export default function LeftButton({trigger, ...params}) {

    return (
        <SecondaryButton {...params} onClick={() => trigger()}>
            <i className="las la-arrow-left"></i>
        </SecondaryButton>
    )
};
