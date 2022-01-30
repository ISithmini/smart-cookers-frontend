interface ProductDisplayProps { }

const ProductDisplay: React.FunctionComponent<ProductDisplayProps> = () => {
    return (
        <>
            <div className='cards'>
                <h3>Select the product you want to buy...</h3>
                <div className='cards__container'>
                    <div className='cards__wrapper'>

                        <ul className='cards__items'>
                            {/* <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            /> */}

                        </ul>
                    </div>
                </div>
            </div>

        </>

    );
}

export default ProductDisplay;