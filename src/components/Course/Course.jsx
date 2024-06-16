
import { BsCurrencyDollar } from "react-icons/bs";
import { IoBookOutline } from "react-icons/io5";

export default function Course({course}) {
    const { id, title, course_thumbnail, course_details, price, credit } = course
    return (
        <article className="hover:border border-slate-50 rounded-lg shadow-lg p-2">
            <div className="" align="center">
                <img className="rounded-md object-cover w-full h-full" src={course_thumbnail} alt={title} />               
            </div>
            <h3 className="text-base font-bold text-white mt-4">{title}</h3>
            <p className="text-slate-300 text-xs mt-2 text-justify">{course_details}.</p>
            <div className="flex items-center justify-between mt-2">
                <span className="flex items-center text-white font-bold text-xl"><BsCurrencyDollar /> <span>{price}</span></span>
                <span className="flex items-center text-white text-lg"><IoBookOutline /> <span className="ps-2">{credit}hr</span></span>
            </div>
            <button className="w-full bg-gray-900 text-white mt-2 py-2 px-4 rounded-lg font-bold hover:bg-slate-400 hover:text-gray-900">Enroll</button>
        </article>
    )
}
