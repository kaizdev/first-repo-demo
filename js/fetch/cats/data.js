const CATFACTS_URL = "https://catfact.ninja";

const getBreeds = async (pageNumber) => {
    const response = await fetch(`${CATFACTS_URL}/breeds?page=${pageNumber}`);
    const info = await response.json();
    // info is a big object with a lot of properties that I don't need. I only need the array of breeds object -> info.data (i.e. the data property)
    // console.log(info);

    // I want to return clean data (only the items we are after and not the whole data set - e.g. country + breed)
    // return info.data;
    const cleanedData = info.data.map((cat) => {
        // I want to return name, and country
        // if no country, I want "No country provided"
        const { breed, country } = cat;
        return {
            breed,
            country: country === "" ? "No country provided" : country,
        };
    });
    return cleanedData;
};

export default getBreeds;
