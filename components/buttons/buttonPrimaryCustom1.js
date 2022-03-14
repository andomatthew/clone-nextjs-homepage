export default function ButtonPrimaryCustom1 ({text, hide }) {

    let defaultStyle = 'btn btn-primary btn-primary-custom-1'

    hide ? defaultStyle += ' d-lg-none' : "" 

    return <button type='button' className={defaultStyle}>{text === undefined ? "Button" : text}</button>
}