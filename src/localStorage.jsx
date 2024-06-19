// Store in local storage
const storeEnrolledCourse = enrolledCourse => {
    const stringifyCourse = JSON.stringify(enrolledCourse);
    localStorage.setItem('enrolledCourse', stringifyCourse);
}

// Get from local storage
const getEnrolledCourse = () => {
    const getCourses = localStorage.getItem('enrolledCourse');
    if(getCourses){
        return JSON.parse(getCourses);
    }
    return [];
}

const saveToLocalStorage = id => {
    const enrolledCourseList = getEnrolledCourse();
    enrolledCourseList.push(id);
    storeEnrolledCourse(enrolledCourseList);
}

// const storeMarkedBooked = markedBooked => {
//     const stringifyMarkedBooked = JSON.stringify(markedBooked);
//     localStorage.setItem('markedBooked', stringifyMarkedBooked); 
// }

// const addToStorage = id =>{
//     const markedBookedItem = getMarkedBooked();
//     markedBookedItem.push(id);
//     storeMarkedBooked(markedBookedItem);
// }
// const getMarkedBooked = () => {
//     const getMarkedBookedItems = localStorage.getItem('markedBooked');
//     if (getMarkedBookedItems) {
//         return  JSON.parse(getMarkedBookedItems); 
//     } 
//     return [];
// }

export { saveToLocalStorage, getEnrolledCourse}