import { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import SplitType from "split-type"

gsap.registerPlugin(ScrollTrigger)

export default function SplitTypesText({
  children,
  as: Tag = "p",
  className = "",
}) {
  const textRef = useRef(null)

  useEffect(() => {
    if (!textRef.current) return

    const split = new SplitType(textRef.current, {
      types: "words, chars",
    })

    gsap.fromTo(
      split.chars,
      { opacity: 0.2 },
      {
        opacity: 1,
        stagger: 0.04,
        scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
        },
      }
    )

    return () => split.revert()
  }, [])

  return (
    <Tag ref={textRef} className={className}>
      {children}
    </Tag>
  )
}
