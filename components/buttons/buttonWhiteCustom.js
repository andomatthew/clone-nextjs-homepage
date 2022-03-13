export default function ButtonWhiteCustom ({text}) {
    return <button type='button' className='btn btn-light btn-white-custom'>{text === undefined ? "Button" : text}</button>
}