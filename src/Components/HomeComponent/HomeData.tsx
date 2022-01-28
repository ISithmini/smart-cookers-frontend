import { HomeSection } from './HomeSection';

function HomeData() {
    let obj = {
        title: "Sri Lanka's Best Kitchen A",
        description: "When appliances provider in S"
    }
    return (
        <div className="homedata">
            <HomeSection data={obj} />

        </div>

    );

};

export default HomeData;

