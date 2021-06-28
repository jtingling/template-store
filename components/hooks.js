import { useState, useEffect } from 'react';

function useClientWidth () {
    const [width, setWidth] = useState(0);
    useEffect(()=>{
        if (typeof window !== undefined) {
            setWidth(window.innerWidth);
        } else {
            throw "Unable to detect DOM."
        }
    }, [])
    
    return width;
}

function useClientHeight () {
    const [height, setHeight] = useState(0)
    useEffect(()=>{
        if (typeof window !== undefined) {
            setHeight(window.innerHeight)
        } else {
            throw "Unable to detect DOM."
        }
    },[])
    
    return height;
}

export {useClientHeight, useClientWidth};