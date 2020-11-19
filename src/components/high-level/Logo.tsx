import React from "react";
import ImageObject from "../../utils/ImageObject";
import Image from "../low-level/Image";

/**
 * Displays the FarmWatch logo and writes "FarmWatch" beneath it
 */
function Logo() {
    let image: ImageObject = new ImageObject("/assets/images/logo.svg", "The FarmWatch Logo", 128, 128)

    return(
        <div>
            <div className="w-screen flex justify-center">
                <Image {...image} />
            </div>
            <h1 className="text-center font-bold text-4xl sm:text-6xl">FarmWatch</h1>
        </div>
    );
}

export default Logo;