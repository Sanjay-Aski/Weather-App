import React from 'react'

function Type(props) {
  return (
    <div className="flex justify-center items-center">
        <div className="dark:bg-gray-600 p-2 rounded-full">
        {props.imga && (
                <div className="dark:bg-gray-600 p-2 rounded-full">
                    <img
                        src={props.imga}
                        alt={`${props.type_} Icon`}
                        className="w-6 h-6 object-contain"
                    />
                </div>
            )}
        </div>
        <div>
            <span className="text-gray-400 dark:text-gray-300">{props.type_} </span>
            <span className="font-semibold text-white dark:text-gray-200">{props.value} hPa</span>
        </div>
    </div>
  )
}

export default Type