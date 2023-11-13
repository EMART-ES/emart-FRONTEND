import './Home.css';
import Card from "../../components/cards/Card";

export default function Home() {
    return (
        <>
            <section className="text-center">
                <h1>Venha fazer parte da nossa comunidade!</h1>
            </section>
            <section className='flex flex-wrap justify-center'>

                <Card id={1} image='https://i.pinimg.com/736x/63/56/65/635665870427679b47dda476e1d536c3.jpg' price={200} title='Camisa lacostada' />
                <Card id={2} image='https://i.pinimg.com/736x/63/56/65/635665870427679b47dda476e1d536c3.jpg' price={200} title='Camisa lacostada' />
                <Card id={2} image='https://i.pinimg.com/736x/63/56/65/635665870427679b47dda476e1d536c3.jpg' price={200} title='Camisa lacostada' />
                <Card id={2} image='https://i.pinimg.com/736x/63/56/65/635665870427679b47dda476e1d536c3.jpg' price={200} title='Camisa lacostada' />

            </section>
        </>
    )
}
