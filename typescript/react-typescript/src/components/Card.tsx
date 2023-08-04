interface CardProps {
    heading?: string; // ` ? means optional
    content: string;
}

// typically interfaces are used as props.
// can export interfaces using export interface CardProps
// can also use type CardProps = {
// heading: string;
// content: string;
// }

const Card = ({ heading = "default", content }: CardProps) => {
    return (
        <div>
            <h2>{heading}</h2>
            <p>{content}</p>
        </div>
    );
};
export default Card;
