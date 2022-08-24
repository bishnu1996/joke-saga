export const fetchJokeApi = ()=>{

    const config = {
        headers :{
            Accept:'application/json',
        } 
    }
    return fetch('https://icanhazdadjoke.com', config).then((res)=>res.json());
}

export const fetchMathApi = ()=>{
    const config = {
        headers : {
            Accept: 'application/json',
        },
    };
    return fetch('http://numbersapi.com/random/math',config).then((res)=>res.text());
}