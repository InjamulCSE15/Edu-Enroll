import { useState, useEffect } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import Course from "../Course/Course";
import toast from "react-hot-toast";
import Enrolled from "../Enrolled/Enrolled";

export default function Courses() {
    const [loading, setLoading] = useState(true);
    const [crHourRemain, setCrHourRemain] = useState(20);
    const [totalCrHour, setTotalCrHour] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [courses, setCourses] = useState([]);
    const [listOfCourses, setListOfCourses] = useState([]);


    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json(res))
            .then(data => {
                setCourses(data);
                setLoading(false);
            })
    }, []);

    const handleTotalCredit = course => {
        const enrolledCourse = courses.find((availableCourse) => availableCourse.id == course.id);
        const duplicateCheck = listOfCourses.find((checkDuplicate) => checkDuplicate.id == enrolledCourse.id);
        if (duplicateCheck) {
            toast.error(`${duplicateCheck.title} already listed.`);
            return;
        }
        else {
            if (enrolledCourse) {
                    console.log('totalCrHour:', totalCrHour, 'crHourRemain:', crHourRemain);  // Debugging logs
                    if (totalCrHour >= 20 || crHourRemain <= 0) {
                        toast.error('Credit limit is over.');
                        console.log('Condition met: Credit limit is over.');  // Debugging log
                        return;
                    }
                    const selectedCourses = [...listOfCourses, enrolledCourse];

                    setListOfCourses(selectedCourses);
                    toast.success(`${enrolledCourse.title} enrolled successfully.`);

                    setTotalCrHour(prevTotalCrHour => {
                        const newTotalCrHour = prevTotalCrHour + enrolledCourse.credit;
                        console.log('Updated totalCrHour:', newTotalCrHour);
                        return newTotalCrHour;
                    });

                    setCrHourRemain(prevCrHourRemain => {
                        const newCrHourRemain = prevCrHourRemain - enrolledCourse.credit;
                        console.log('Updated crHourRemain:', newCrHourRemain);
                        return newCrHourRemain;
                    });

                    setTotalPrice(prevTotalPrice => {
                        const newTotalPrice = (parseFloat(prevTotalPrice) + enrolledCourse.price).toFixed(2);
                        console.log('Updated totalPrice:', newTotalPrice);
                        return newTotalPrice;
                    });
                }
            }


            // if (totalCrHour > 20 && crHourRemain <= 0) {    
            //     toast.error('Credit limit is over.');
            //     return;
            // }
            // else{
            //     if(enrolledCourse){
            //         const selectedCourses = [...listOfCourses, enrolledCourse];
            //         setListOfCourses(selectedCourses);
            //         toast.success(`${enrolledCourse.title} enrolled successfully.`);
            //         setTotalCrHour(totalCrHour + enrolledCourse.credit);
            //         setCrHourRemain(crHourRemain - enrolledCourse.credit);
            //         setTotalPrice((totalPrice + enrolledCourse.price).toFixed(2));
            //     }
            // }
        }
   

    return (
        <div className="container mx-auto my-6 md:px-8 sm:px-4">
            <h4 className="py-2 mb-4 text-xl text-white">Available Courses: <span>{courses.length}</span></h4>
            {
                loading ?
                    (
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-3'>
                            {[...Array(3)].map((_, index) => (
                                <div key={index} className="flex flex-col gap-4 w-full animate-pulse">
                                    <div className="skeleton h-32 w-full"></div>
                                    <div className="skeleton h-4 w-28"></div>
                                    <div className="skeleton h-4 w-full"></div>
                                    <div className="skeleton h-4 w-full"></div>
                                </div>
                            ))}
                        </div>
                    )
                    :
                    (
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                            <div className="rounded-lg lg:col-span-2">
                                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                                    {
                                        courses.map(course => <Course key={course.id} course={course} handleTotalCredit={handleTotalCredit}></Course>)
                                    }
                                </div>
                            </div>
                            <div>
                                <div className="relative flex py-5 items-center">
                                    <div className="flex-grow border-t border-gray-400"></div>
                                    <span className="flex-shrink mx-4 font-bold text-white text-xl">My Courses</span>
                                    <div className="flex-grow border-t border-gray-400"></div>
                                </div>
                                <div className="bg-transparent rounded-lg p-4 shadow-lg border text-white">
                                    <h3 className="font-medium  pb-2 border-b-2 border-gray-400">Credit Hour Remaining <span className="text-xl">{crHourRemain}</span>hr</h3>
                                    <div className="mt-2">
                                        <h3 className="font-medium text-xl">Course Name</h3>
                                        <ol className="list-none py-4">
                                            {
                                                listOfCourses.map((list, index) => <Enrolled key={list.id} list={list} i={index}></Enrolled>)
                                            }
                                        </ol>
                                        <h3 className="font-medium  py-2 border-b-2 border-gray-400">Total Credit Hour: <span className="text-xl">{totalCrHour}</span>hr</h3>
                                        <h3 className="font-medium flex items-center py-2  pb-2 border-b-2 border-gray-400">Total Price: <span className="text-xl flex items-center"><BsCurrencyDollar /> {totalPrice}</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
            }
        </div>
    )
}
