
export default function Enrolled({ list, i }) {
    const { title } = list;
    return (
        <li className="list-none">{i+1}. {title}</li>
    )
}
