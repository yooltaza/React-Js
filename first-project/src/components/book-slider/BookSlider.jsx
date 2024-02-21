import { useContext, useState } from "react";
import "./book-slider.css";
import Rating from "./Rating";
import Modal from "../modal/Modal";
import CartContext from "../../context/cartContext";

const BookSlider = ({ data }) => {
    const { addToCart } = useContext(CartContext);
    const [slideIndex, setSlideIndex] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [bookData, setBookData] = useState(null);

    // Handle Modal
    const handleModal = (book) => {
        setOpenModal(true);
        setBookData(book);
    }

    // Handle Click
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex - 1);
        } else if (direction === "right") {
            setSlideIndex(slideIndex + 1);
        }
    };
    // const [slideIndex, setSlideIndex] = useState(0);
    // const handleClick = (direction) => {
    //     if (direction === "left") {
    //         setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 6.2);
    //     } else {
    //         setSlideIndex(slideIndex < 7 ? slideIndex + 1 : 0);
    //     }
    // };

    return (
        <div className="book-slider-container">
            {slideIndex >= 0 && <i
                onClick={() => handleClick("left")}
                className="bi bi-chevron-left book-slider-arrow-left"
            ></i>}
            <div
                style={{ transform: `translateX(${slideIndex * -340}px)` }}
                className="book-slider-wrapper"
            >
                {data.map((item) => (
                    <div key={item.id} className="book-slide-item">
                        <img
                            src={`/books/${item.image}`}
                            alt={item.title}
                            className="book-slide-item-img"
                        />
                        <h2 className="book-slide-item-title">{item.title}</h2>
                        <Rating rating={item.rating} reviews = {item.reviews} />
                        <div className="book-slide-item-price">${item.price}</div>
                        <div className="book-slider-icons-wrapper">
                            <i onClick={() => handleModal(item)} className="bi bi-eye-fill"></i>
                            <i onClick={() => addToCart({...item, quantity: 1})} className="bi bi-cart-plus"></i>
                        </div>
                    </div>
                ))}
            </div>
            {slideIndex <= data.length - 1 && <i
                onClick={() => handleClick("right")}
                className="bi bi-chevron-right book-slider-arrow-right"
            ></i>}
            {openModal && <Modal bookData = {bookData} setOpenModal = {setOpenModal} />}
        </div>
    );
};

export default BookSlider;
