import { useState, useEffect } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import Course from "../Course/Course";

export default function Courses() {
    const [loading, setLoading] = useState(true);
    const [crHourRemain, setCrHourRemain] = useState(0);
    const [totalCrHour, setTotalCrHour] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [courses, setCourses] = useState([]);
    
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json(res))
            .then(data => {
                setCourses(data);
                setLoading(false);
            })
    }, []);

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
                                        courses.map(course => <Course key={course.id} course={course} ></Course>)
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
                                        <ol class="list-decimal p-4 border-b-2 border-gray-400">
                                            <li>Now this is a story all about how, my life got flipped-turned upside down</li>
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
