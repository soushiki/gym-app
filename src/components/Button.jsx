import React from 'react'

export default function Button(props) {
    const { text, func, icon } = props
  return (
    <button onClick={func} className="px-8 mx-auto py-4  rounded-md
      border-[2px] bg-slate-950 border-blue-400 border-solid
      blueShadow duration-200 flex items-center gap-3 font-medium">
        {icon && <i className={`fa-solid ${icon}`} aria-hidden="true"></i>}
        <span>{text}</span>
      </button>
  )
}
