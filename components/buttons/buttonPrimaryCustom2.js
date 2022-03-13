export default function ButtonPrimaryCustom2 ({text}) {
    return <button type='button' className='btn btn-primary btn-primary-custom-2'>{text === undefined ? "Button" : text}</button>
}