import Code from "@/components/Code";

type Props = {
    children: React.ReactNode;
}

function Block(props: Props) {
    return (
        <>
        <div className="block">
            <Code>
                {props.children}
            </Code>
        </div>
        <div className="block-end"></div>
        </>
    )
}

export default Block