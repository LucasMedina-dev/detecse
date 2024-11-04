const updateCounterNumber = async () => {
    const apiKey = import.meta.env.PUBLIC_API_KEY;
    fetch('https://vcaserver.onrender.com/hit/2/2916561372',{
        headers:{
            API_KEY: apiKey
        }
    })
    .then((response)=>{
    })
}
updateCounterNumber() 
