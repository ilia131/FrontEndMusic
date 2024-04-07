


const Button = ({btnName, handleClick, icon, classStyle}) => {
    return (
        <div>
            <button 
                 onClick={()=>handleClick()}
            >
               {icon}  {btnName}
            </button>
        </div>
    )
}

export default Button;
