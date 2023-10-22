import "./Card.css" 
interface cardProps {
    price: number;
    image: string;
    title: string;
}
export function Card({price,image,title}: cardProps) {
    return <div className="card">
        <img/>
        <h2></h2>
        <p><b>valor:</b></p>        
    </div>
}