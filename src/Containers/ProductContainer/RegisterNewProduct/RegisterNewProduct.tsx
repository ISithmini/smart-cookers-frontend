import { useState } from 'react';
import { addProduct } from '../../../Services/Api/ProductService/ProductApi';
import './RegisterNewProduct.css'
import { storage } from '../../../Services/Firebase/firebase'
import { Link, useNavigate } from 'react-router-dom';


interface RegisterNewProductProps { }

var fileState = new File([''], '', {
    type: 'text/plain'
})

const RegisterNewProduct: React.FunctionComponent<RegisterNewProductProps> = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [img, setImg] = useState(fileState)
    const [productImg, setproductImg] = useState("../../../Assets/images/no-image");
    const [activeStatus, setActiveStatus] = useState("");
    const [completed, setcompleted] = useState(true);

    const navigate = useNavigate();




    const handleSubmit = async (e: React.ChangeEvent<any>, status: string) => {
        await handleUpload();
        e.preventDefault();
        setActiveStatus(status);

        var data = {
            "Pname": name,
            "Pdescription": description,
            "Price": price,
            "qtyAvailable": quantity,
            "image": productImg

        }

       await addProduct(data);
    //    .then( () => {
    //        console.log("sfsdgdfgf");
    //        if(productImg!="../../../Assets/images/no-image"){
    //         navigate(-1);
    //        }
    //    });
    //console.log("sdfdgf");
    
    goBack();

    }

    const goBack = () => {
        navigate(-1);
        console.log("asdsfdfgsgergrerageafg");
        

    }

    const handleChange = (e: any) => {
        if (e.target.files[0]) {
            setImg(e.target.files[0]);
            console.log(img);


        }
    };

    const [progress, setProgress] = useState(0);

    const handleUpload = async () => {
        const uploadTask = storage.ref(`images/${img.name}`).put(img);
        console.log(uploadTask);

        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("images")
                    .child(img.name)
                    .getDownloadURL()
                    .then(productImg => {
                        setproductImg(productImg);
                        console.log(productImg);

                    });
            }
        );
    };


    //     /////Image Display
    //   const imageUpload = (image) => {
    //     //console.log(image);
    //     if (image !== undefined) {
    //       setImg(image);
    //       imageHandler(image);
    //     }
    //   };
    //   const [jobImg, setjobImage] = useState(
    //     "/assets/images/no-image-placeholder.jpg"
    //   );
    //   const imageHandler = (image) => {
    //     const reader = new FileReader();
    //     reader.onload = () => {
    //       if (reader.readyState === 2) {
    //         setproductImg(reader.result);
    //       }
    //     };
    //     reader.readAsDataURL(image);
    //   };





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
                                <div className="col-sm-10 col-md-8">
                                    <div className="img-holder">
                                        <img
                                            alt="image"
                                            id="img"
                                            className="img"
                                        />
                                    </div>
                                    <br />
                                    <div className="form-control-file ">
                                        <input
                                            type="file"
                                            id="image"
                                            name="image"
                                            accept=".png, .jpg, .jpeg"
                                            required={true}
                                            onChange={handleChange}
                                        />

                                    </div>
                                </div>
                                {/* <div className="col-sm-10 col-md-4">
                                        <input
                                            type="text"
                                            id="image-url"
                                            name="url"
                                            onChange={(e) => {
                                                setproductImg(e.target.value);
                                            }}
                                        />
                                </div> */}
                            </div>
                            <div className="col-md-6 p-2"
                                onClick={(e: React.ChangeEvent<any>) => {
                                    handleSubmit(e, "post");
                                }}>
                                <button className="edit btn-success ">Save Product</button>
                                &nbsp;&nbsp;&nbsp;&nbsp;

                                <button className="edit btn-secondary" onClick={() => navigate(-1)} >Cancel</button>

                            </div>

                            {/* {completed && (
                                <div>
                                <p className="content lead successfull text-center justify-content-center">
                                  Product has been saved successfully.
                                </p>
                                <div className="row successfull  justify-content-center">
                                  <button
                                    type="button"
                                    className="btn btn-light pr-5 pl-5  justify-content-center text-align-center"
                                    onClick={(e) => {
                                        navigate(-1);
                                      setcompleted(false);
                                    }}
                                  >
                                    Close
                                  </button>
                                  &nbsp;&nbsp;
                                  <Link
                                    className="allads pr-2 pl-2   justify-content-center text-align-center"
                                    to="/inventory"
                                  >
                                    <button
                                      type="button"
                                      className=" btn-success  justify-content-center text-align-center"
                                    >
                                      Go to All Procuts Page
                                    </button>
                                  </Link>
                                </div>
                                <br />
                              </div>
                            ) } */}
                        </form>

                    </div>
                </div>
            </div>



        </>
    );
}

export default RegisterNewProduct;