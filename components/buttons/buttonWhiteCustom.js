export default function ButtonWhiteCustom ({text}) {
    return <button type='button' className='btn btn-light btn-white-custom mx-2'>{text === undefined ? "Button" : text}</button>
}