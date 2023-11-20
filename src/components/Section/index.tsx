import Block from "../Block";

type Props = {
    title: string;
    selectorType: string;
    className?: string;
    children: React.ReactNode;
}

function Section(props: Props) {

    const { title, className, selectorType } = props;

    return (
        <div className={`section ${className}`}>
            <p className="selector">{selectorType == "id" ? "#" :"."}{title}</p>
            <Block>
                {props.children}
            </Block>
        </div>
    )
}

export default Section