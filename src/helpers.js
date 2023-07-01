//Local Storage
export const fetchData = (key)=>{
    return(JSON.parse(localStorage.getItem(key)));
}

//Delete Item
export const deleteData = ({ key })=>{
   return localStorage.removeItem(key);
}