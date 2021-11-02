import { useState, useEffect} from 'react';


function  useLocalStorage(key, initialValue) {

	const [val, setVal] = useState(() => {
			const item = localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
	});

    useEffect(() =>{
        localStorage.setItem(key, JSON.stringify(val))
    },[key,val])


	return [val, setVal];
}

export default useLocalStorage;
