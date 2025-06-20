import type { ReactElement } from "react";


export interface ButtonProps{
    variant: "primary"|"secondary"|"icon";
    size: "sm"| "md"| "lg";
    text?:string;
    startIcon?:ReactElement;
    endIcon?:ReactElement;
    onClick?: ()=>void;
}

const variantStyles= {
    "primary":"bg-indigo-600 text-white my-4 mx-2 pb-2 px-4 transform hover:-translate-y-1 hover:shadow-xl",
    'secondary':"bg-indigo-200 text-indigo-600 my-4 mx-2 pb-2 px-4 transform hover:-translate-y-1 hover:shadow-xl",
    "icon":"bg-white text-slate-500 hover:ring-1 hover:ring-slate-400 hover:text-slate-800 m-1 p-1"
}

const sizeStyles= {
    "sm":"px-2 py-1",
    'md':"px-4 py-2",
    'lg':"px-8 py-6"
}

const defaultStyles =
  "rounded-md cursor-pointer flex justify-center items-center transition-all";

export const Button=(props: ButtonProps)=>{
    if(props.variant=="icon")
{
    return(
        <button onClick={props.onClick} className={`${variantStyles[props.variant]} ${defaultStyles}`}>
            {props.startIcon}
        </button>
    )
}


return (
    <button onClick={props.onClick} className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]}`}>
        {props.startIcon? <div className="pr-2">{props.startIcon}</div>:null}
        {props.text}
        {props.endIcon? <div className="pl-2">{props.endIcon}</div>:null}
        </button>
)
}