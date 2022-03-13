export default function ButtonPrimaryCustom1 ({text}) {
    return <button type='button' className='btn btn-primary btn-primary-custom-1'>{text === undefined ? "Button" : text}</button>
}