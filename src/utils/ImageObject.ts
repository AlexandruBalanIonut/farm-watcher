/**
 * ImageObject defines a generic Image object to be rendered by the Image component.
 * @see /src/components/low-level/Image.tsx
 */
class ImageObject {
    src: string = "";
    alt: string = "";
    width?: number;
    height?: number;
    effect: "blur" | "black-and-white" | "opacity" | undefined = "blur";

    /**
     * Builds a new ImageObject
     * @param src The relative path to the image starting from public folder
     * @param alt The text to be displayed if the image could not be loaded
     * @param width The width of the image
     * @param height The height of the image
     */
    constructor(src: string, alt: string, width?: number, height?: number) {
        this.src = src;
        this.alt = alt;
        this.width = width;
        this.height = height;
    }
}

export default ImageObject;