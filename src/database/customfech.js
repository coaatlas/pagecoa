import itemData from "./datadb";


export  const customFetch = (time,task) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(task); 
        },time);
    });
}



export const fetchProductBytitle = (time,tittle) => {  
    
    return new Promise (resolve =>{
setTimeout(()=>{
    resolve(itemData.filter(prod => prod.title===tittle))
},time);

    });    
}