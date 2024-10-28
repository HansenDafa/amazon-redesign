import Image from "next/image";

const ImageCard = ({ src, className, children }) => (
  <div
    className={`w-full rounded-xl overflow-hidden group relative ${className}`}
  >
    <Image
      src={src}
      alt=""
      className="w-full h-full object-cover transition-transform group-hover:scale-110 group-hover:opacity-80"
    />
    <h4 className="text-center opacity-0 group-hover:opacity-100 transition-opacity text-white text-3xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-[0px_3px_3px_rgba(0,0,0,0.5)]">
      {children}
    </h4>
  </div>
);

export default ImageCard;
