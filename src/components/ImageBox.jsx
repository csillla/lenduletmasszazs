export default function ImageBox({ src, className="" }) {
    const style = {
      backgroundImage: `url(${src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderRadius: "16px",
      filter: "grayscale(100%)"
    };
  
    return (
        <div 
            className={`${className}`}
            style={style} 
        />
    );
}