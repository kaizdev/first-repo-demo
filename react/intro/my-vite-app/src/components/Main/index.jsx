import Card from "../Card";
import FlexWrap from "../FlexWrap/FlexWrap";
import s from "./Main.module.scss";

const Main = (props) => {
    let title = "Gallery";

    const h2styles = { color: "red", fontSize: "20px" };
    const flexStyles = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
    };

    return (
        <main className={s.main}>
            <h2 className={s.heading}>{title}</h2>
            {/* <section className={s.gallery}> */}
            <FlexWrap>
                <Card
                    heading="first card"
                    content="some content goes here"
                    hasButton
                />
                <Card
                    heading="second card"
                    content="some other new information went here"
                />
                <Card />
                {/* </section> */}
            </FlexWrap>
        </main>
    );
};

export default Main;
