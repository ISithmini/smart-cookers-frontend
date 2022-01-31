import NoImg from '../../../Assets/images/no-image.jpg';


interface RegisterNewProductProps {

}

const RegisterNewProduct: React.FunctionComponent<RegisterNewProductProps> = () => {
    return (
        <>
            <div className="new-product">
                <div style={{ textAlign: "center" }}>
                    <div className="product-form">
                        <h3 className="text-white mb-4">Register a new product</h3>
                        <form>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">
                                    <b>Product Name</b>{" "}
                                </label>
                                <div className="col-sm-10 col-md-4">
                                    <input
                                        type="text"
                                        required={true}
                                        className="form-control"
                                        id="inputProductName"
                                        placeholder="Add the product name here"
                                        name="Product-name"
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">
                                    <b>Product Description</b>{" "}
                                </label>
                                <div className="col-sm-10 col-md-4">
                                    <input
                                        type="text"
                                        required={true}
                                        className="form-control"
                                        id="inputProductDescription"
                                        placeholder="Add the product description here"
                                        name="Product-description"
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">
                                    <b>Quantity</b>
                                </label>
                                <div className="col-sm-10 col-md-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputQuantity"
                                        placeholder="Add the quantity available here"
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">
                                    <b>Price ( 1 Qty)</b>
                                </label>
                                <div className="col-sm-10 col-md-4">
                                    <div className="input-group mb-2 mr-sm-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">LKR</div>
                                        </div>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputPrice"
                                            placeholder="Add the price per 1 quantity here"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-2 col-sm-12 col-form-label">
                                    <b>Upload Image</b>
                                </label>

                                <div className="col-sm-10 col-md-8">
                                    <div className="img-holder">
                                        <img
                                            alt="image"
                                            id="img"
                                            className="img"
                                        />
                                    </div>
                                    <br />
                                    <div className="input-group mb-2 ">
                                        <input
                                            src={NoImg}
                                            type="file"
                                            id="image"
                                            name="image"
                                            accept=".png, .jpg, .jpeg"
                                            required={true}
                                        />
                                    </div>
                                </div>
                            </div>


                            <button className="btn Login-btn center">Save Product</button>

                        </form>

                    </div>
                </div>
            </div>



        </>
    );
}

export default RegisterNewProduct;