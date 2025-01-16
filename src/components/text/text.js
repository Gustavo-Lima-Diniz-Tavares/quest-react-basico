import './text.css'

const Text = ({children, textColor = 'white'}) => {
    return (
        <div
            className='text'
            style={{ textTransform: 'uppercase', color: textColor}}>
            {children}
        </div>
    )
}

export default Text