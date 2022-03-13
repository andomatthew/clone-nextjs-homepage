export default function ButtonDarkCustom ({text}) {
    return <button type='button' className='btn btn-dark btn-dark-custom'>{text === undefined ? "Button" : text}</button>
}