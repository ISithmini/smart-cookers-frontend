import './HomeComponent.css';

interface HomeComponentProps { }

const HomeComponent: React.FunctionComponent<HomeComponentProps> = () => {
    return (
        <>
            <div className="home-container">
                <div className="home-title">
                    <h2>"Sri Lanka's Best Kitchen Appliances Provider"</h2>
                </div>
                <div className="home-description">
                    <h4>Welcome to the largest kitchen applicances provider in Sri Lanka where you can get the best products with best quality. You can buy any product from your nearest outlet. Click below to select the output and search your product.</h4>
                </div>
            </div>
        </>
    );
}

export default HomeComponent;