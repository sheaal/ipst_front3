async function fetchData(url) {
    try{
        const response = await fetch(url);

        if(!response.ok){
            throw new Error(`Ошибка: $[response.status] $[response.statusText]`);
        }

        const data = await response.json();
        return data;

    } catch(error){
        console.error("Ошибка при загрузке данных:", error.message);
    }
}

const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

fetchData(apiUrl) 
    .then(data =>{
        if(data) {
            console.log("Полученные данные", data);
        }
});  