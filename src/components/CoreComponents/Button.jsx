
const Button = ({className,text,style,type})=>{
    return (
       <button type={type} className={`btn ${className}`} style={style}>{text}</button>
    )

}

export default Button