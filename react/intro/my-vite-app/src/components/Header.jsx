const Header = ({ heading, subheading, fruit }) => {
    // We can also destructure directly in the parameter above (as it only takes the one param)
    // Alex prefers this way below
    // const { heading, subheading, fruit } = props;
    return (
        <header>
            <h1>{heading}</h1>
            <h2>{subheading}</h2>
            <p>My favourite fruit is {fruit}</p>
        </header>
    );
};

export default Header;
