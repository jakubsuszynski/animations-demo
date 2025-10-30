import {Link} from "react-router-dom";
import "./ViewTransition.css";

export const images = [
    "https://picsum.photos/1600/900",
    "https://picsum.photos/1600/900?random=1",
    "https://picsum.photos/1600/900?random=2",
];

const ViewTransition = () => {
    return (
        <div className="image-list">
            <h1>Image List</h1>
            <div>
                {images.map((src, idx) => (
                    <Link
                        key={src}
                        to={`/transition/${idx}`}
                        viewTransition
                    >
                        <p style={{viewTransitionName: `image-title-${idx}`}}>Image Number {idx}</p>
                        <img className="max-w-full contain-layout" src={src}
                             style={{viewTransitionName: `image-expand-${idx}`}}/>
                    </Link>
                ))}
            </div>
        </div>
    );
};
export default ViewTransition;
