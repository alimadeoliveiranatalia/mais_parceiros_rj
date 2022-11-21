import { useEffect, useRef } from "react";

export function VerifyDimensions(ref: { current: { offsetWidth: number; offsetHeight: number; }; }){
    const dimensions = useRef({width: 0, height: 0});
    
    useEffect(() => {
        dimensions.current.width = ref.current.offsetWidth;
        dimensions.current.height = ref.current.offsetHeight;
    },[]);
    console.log(dimensions.current);
    return dimensions.current;
}