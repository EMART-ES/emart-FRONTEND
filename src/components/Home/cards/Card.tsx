
import './card.css'
interface CardProps {
    id: number;
    title: string;
    price: number;
    image: string;
}
function Card(props: CardProps) {
    return <>
        <div className='card'>
            <img src={props.image} alt="Imagem de roupa" />
            <h2>{props.title}</h2>
            <h3>{props.price}</h3>
        </div>
    </>
};
export default Card;