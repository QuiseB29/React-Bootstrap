// src/components/Home.js
import InfoCard from "./InfoCard";

const Home = () => {
    const infoCards = [
        { title: "Character Profiles", description: "Find detailed profiles of all Marvel characters." },
        { title: "Latest Comics", description: "Explore the latest comic releases and story arcs." },
        { title: "Marvel News", description: "Stay updated with the latest news and updates from Marvel." },
    ];

    return (
        <div className="header">
            <h2>Welcome to the Marvel Front Page</h2>
            <p>Details on any Marvel character</p>
            <div className="info-cards">
                {infoCards.map((card, index) => (
                    <InfoCard key={index} title={card.title} description={card.description} />
                ))}
            </div>
        </div>
    );
};

export default Home;
