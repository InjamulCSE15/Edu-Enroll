// Store in local storage
const storeMarkedBooked = markedBooked => {
    const stringifyMarkedBooked = JSON.stringify(markedBooked);
    localStorage.setItem('markedBooked', stringifyMarkedBooked); 
}

const addToStorage = id =>{
    const markedBookedItem = getMarkedBooked();
    markedBookedItem.push(id);
    storeMarkedBooked(markedBookedItem);
}
const getMarkedBooked = () => {
    const getMarkedBookedItems = localStorage.getItem('markedBooked');
    if (getMarkedBookedItems) {
        return  JSON.parse(getMarkedBookedItems); 
    } 
    return [];
}

export {addToStorage, getMarkedBooked}