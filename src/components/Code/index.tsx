type Props = {
    children: React.ReactNode;
}

function Code(props: Props) {
  return (
    <div className='tab'>
        {props.children}
    </div>
  )
}

export default Code