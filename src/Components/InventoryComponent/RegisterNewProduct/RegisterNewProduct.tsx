import { useState } from 'react';
import { addProduct } from '../../../Services/Api/MockApi';
import './RegisterNewProduct.css'


interface RegisterNewProductProps { }

const RegisterNewProduct: React.FunctionComponent<RegisterNewProductProps> = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [img, setImg] = useState<File>()
    const [productImg, setproductImg] = useState('../../../Assets/images/no-image');
    const [activeStatus, setActiveStatus] = useState("");


    const handleSubmit = (e: React.ChangeEvent<any>, status: string) => {
        e.preventDefault();
        setActiveStatus(status);
        console.log(name);
        console.log(description);
        console.log(quantity);
        console.log(price)

        var data = {
            "Pname": name,
            "Pdescription": description,
            "Price": price,
            "qtyAvailable": quantity,
            "img": productImg

        }
        addProduct(data);
    }

    // const handleImageChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    //     const fileList = e.target.files;

    //     if (!fileList) return;

    //     setImg(fileList[0]);
    //   };

    //   const uploadFile = function (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
    //     if (img) {
    //         const formData = new FormData();
    //         formData.append("image", img, img.name);
    //     }
    // };
    // }



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
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }}
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
                                        onChange={(e) => {
                                            setDescription(e.target.value);
                                        }}
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
                                        onChange={(e) => {
                                            setQuantity(e.target.value);
                                        }}
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
                                            onChange={(e) => {
                                                setPrice(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-2 col-sm-12 col-form-label">
                                    <b>Upload Image</b>
                                </label>
                                {/* <div className="col-sm-10 col-md-8">
                                    <div className="img-holder">
                                        <img
                                            alt="image"
                                            id="img"
                                            className="img"
                                        />
                                        />
                                    </div>
                                    <br />
                                    <div className="form-control-file ">
                                        <input
                                            src={img}
                                            type="file"
                                            id="image"
                                            name="image"
                                            accept=".png, .jpg, .jpeg"
                                            required={true}
                                            onChange={uploadFile}
                                        />
                                        
                                    </div>
                                </div> */}
                                <div className="col-sm-10 col-md-4">
                                        <input
                                            type="text"
                                            id="image-url"
                                            name="url"
                                            onChange={(e) => {
                                                setproductImg(e.target.value);
                                            }}
                                        />
                                </div>
                            </div>
                            <div className="col-md-6 p-2"
                                onClick={(e: React.ChangeEvent<any>) => {
                                    handleSubmit(e, "post");
                                }}>
                                <button className="btn Login-btn center">Save Product</button>

                            </div>
                        </form>

                    </div>
                </div>
            </div>



        </>
    );
}

export default RegisterNewProduct;