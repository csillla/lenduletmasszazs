export default function Btn({
    height = "56px",
    width = "56px",
    bg = "",         // background color
    color = "#000000",      // text color
    padding = "12px 12px",  // optional padding
    radius = "8px",         // optional border radius
    className = "",
    children,               // anything inside: text, icon, both
    onClick,                // click handler
    style = {},             // allow extra inline styles
    }) {
    return (
      <button
        className={className}
        onClick={onClick}
        style={{
            height: height,
            width: width,
            display: "flex",              // always flex
            alignItems: "center",         // center vertically
            justifyContent: "center",     // center horizontally
            backgroundColor: bg,          // custom bg
            color: color,                 // text color
            padding: padding,             // customizable padding
            borderRadius: radius,         // optional radius
            cursor: "pointer",            // better UX
            transition: "0.2s ease",      // smooth hover if needed
            ...style,                     // allow overrides
        }}
      >
        {children}
      </button>
    );
}
  