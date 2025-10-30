// Details/Details.tsx (The Detail View)
import {Link, useParams} from "react-router-dom";
import {images} from "../ViewTransition.tsx";
import "./Details.css";

export default function ImageDetailsRoute() {
    const params = useParams();
    const id = Number(params.id); // Get the ID

    // Construct the matching, unique view-transition-names
    const titleTransitionName = `image-title-${id}`;
    const imageTransitionName = `image-expand-${id}`;

    return (
        <div className="image-detail">
            <Link to="/transition" viewTransition>
                Back
            </Link>
            <h1 style={{viewTransitionName: titleTransitionName}}>
                Image Number {id}
            </h1>
            <img
                src={images[id]}
                style={{viewTransitionName: imageTransitionName}} // Apply the unique name
            />
        </div>
    );
}