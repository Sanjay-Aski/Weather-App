import React from 'react'

function Type(props) {
  return (
    <div className="flex justify-center items-center">
        <div className="bg-accent-light dark:bg-accent-dark p-2 rounded-full">
        {props.imga && (
                <div className="bg-accent-light dark:bg-accent-dark p-2 rounded-full">
                    <img
                        src={props.imga}
                        alt={`${props.type_} Icon`}
                        className="w-6 h-6 object-contain"
                    />
                </div>
            )}
        </div>        <div>
            <span className="text-secondary-dark dark:text-secondary-light">{props.type_} </span>
            <span className="font-semibold text-text-light dark:text-white">{props.value} {props.unit}</span>
        </div>
    </div>
  )
}

export default Type