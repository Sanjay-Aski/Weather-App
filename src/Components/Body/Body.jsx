import { useEffect } from "react";
import Left_Body from "./Left_Body";
import Right_Body from './Right_Body';

function Body() {
    useEffect(() => {}, []);
    return (
        <>
            <div className="h-full w-screen text-black p-14 pt-4">
                <div className="flex flex-row w-full space-x-4" >
                    <div className="w-1/4  shadow-2xl rounded-2xl">
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
