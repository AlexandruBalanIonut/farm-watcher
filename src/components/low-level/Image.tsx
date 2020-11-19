import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ImageObject from "../../utils/ImageObject";
import 'react-lazy-load-image-component/src/effects/blur.css';

/**
 * This component aims to lazy load the image. Will return a LazyLoadImage element.
 * @param image An ImageObject containing data about the image.
 */
function Image(image: ImageObject) {

    return (
        <LazyLoadImage 
            src = {image.src}
            alt = {image.alt}
            width = {image.width}
            height = {image.height}
            effect = {image.effect}
        />
    );
}


export default Image;