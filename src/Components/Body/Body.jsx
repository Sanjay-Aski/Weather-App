import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addWeatherdata } from "../../WeatherFeatures/WeatherSlice";
import Left_Body from "./Left_Body";
import Right_Body from './Right_Body';

function Body() {
    const dispatch = useDispatch();
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("data")) || [];
        storedData.forEach((item) => {
            dispatch(addWeatherdata(item));
          });
      }, [dispatch]);
      
    return (
        <>
            <div className="h-full text-text-light dark:text-text-dark bg-background-light dark:bg-background-dark p-14 pt-4">
                <div className="flex flex-row w-full space-x-4" >
                    <div className="w-1/4 shadow-2xl rounded-2xl">
                        <Left_Body />
                    </div>
                    <div className="w-3/4 shadow-2xl rounded-lg p-6">
                        <Right_Body />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Body;
