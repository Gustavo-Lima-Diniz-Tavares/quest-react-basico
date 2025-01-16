const Button = ({ label = 'Clique aqui' }) => {

    const showLabel = () => {
        alert(`A label desse botão é ${label}`)
    }

    return <button className='btn' onClick={() => showLabel(label)}>
        {label}
    </button>
}

export default Button