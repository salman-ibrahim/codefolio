type Props = {
    propertyType: 'string' | 'url' | 'params' | 'list' | 'plain';
    property: string;
    value: string | string[];
    target?: string;
}

// TODO: Make property conditional
// type Props<TPropertyType = string> = TPropertyType extends 'list' | 'params'
//   ? { propertyType: TPropertyType; property: string; value: string[] }
//   : { propertyType: TPropertyType; property: string; value: string, target?: string };

const renderString = (props: Props) => {
    return (
        <span className="value"><span className="string">{props.value}</span></span>
    )
}

const renderUrl = (props: Props) => {
    return (
        <span className="value"><a href={props.target ?? props.value as string} className="url">"{props.value}"</a></span>
    )
}

const renderParams = (props: Props) => {
    return (
        <>
            <p className="value params">
                {
                    Array.isArray(props.value) && props.value.map((value, index) => {
                        return (
                            <span key={index} className="param">"{value}"</span>
                        )
                    })
                }
            </p>
        </>
    )
}

const renderList = (props: Props) => {
    return (
        <>
            <p className="value list">
                {
                    Array.isArray(props.value) && props.value.map((value, index) => {
                        return (
                            <span key={index} className="list-item">"{value}"</span>
                        )
                    })
                }
            </p>
        </>
    )
}

const renderPlain = (props: Props) => {
    return (
        <span className="value"><span className="plain">{props.value}</span></span>
    )
}


function Line(props: Props) {

    const { property, propertyType } = props;

    return (
        <div>
            <p>
                <span className='property'>{property}</span>
                {
                    {
                        'string': renderString(props),
                        'url': renderUrl(props),
                        'params': renderParams(props),
                        'list': renderList(props),
                        'plain': renderPlain(props)
                    }[propertyType]
                }
                {/* <span className="value"><span className={`${propertyType}`}>{value}</span></span> */}
            </p>
        </div>
    )
}

export default Line