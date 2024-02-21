import "./slider.css";
import FristBook from "../../pictures/book1.png";
import SecondBook from "../../pictures/book2.png";
import ThirdBook from "../../pictures/book3.png";
import { useState } from "react";

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };
    return (
        <div className="slider-container"><i
            onClick={() => handleClick("left")}
            className="bi bi-chevron-double-left arrow-left"
        ></i>
            <div
                style={{ transform: `translateX(${slideIndex * -100}vw)` }}
                className="slider-wrapper"
            >
                {/* First Slide */}
                <div className="slide first-slide">
                    <div className="slide-img-wrapper">
                        <img src={FristBook} alt="" />
                    </div>
                    <div className="slide-info-wrapper">
                        <h1 className="slide-info-title">Book Store</h1>
                        <p className="slide-info-desc">
                            It's not just reading. It's livine the adventure.
                        </p>
                    </div>
                </div>

                {/* Second Slide */}
                <div className="slide second-slide">
                    <div className="slide-img-wrapper">
                        <img src={SecondBook} alt="" />
                    </div>
                    <div className="slide-info-wrapper">
                        <h1 className="slide-info-title">The Book For Everyone</h1>
                        <p className="slide-info-desc">
                            You can read at home or at the bookstore.
                        </p>
                    </div>
                </div>

                {/* Third Slide */}
                <div className="slide third-slide">
                    <div className="slide-img-wrapper">
                        <img src={ThirdBook} alt="" />
                    </div>
                    <div className="slide-info-wrapper">
                        <h1 className="slide-info-title">Check Out The New Titles</h1>
                        <p className="slide-info-desc">
                            We send you the book you want at home.
                        </p>
                    </div>
                </div>
            </div><i
                onClick={() => handleClick("right")}
                className="bi bi-chevron-double-right arrow-right"
            ></i>
        </div>
    );
};

export default Slider;
