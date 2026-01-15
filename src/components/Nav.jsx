import styles from './Nav.module.css';
import { useEffect, useState, useRef } from "react";

const sections = [
  { id: "home", 
    msgId: "navMsg1", 
    iconId: "navIcon1", 
    message: "Ez a te kezdő löketed!", 
    location: "Főoldal", 
    icon: (
        <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
            <path d="M460-160q-50 0-85-35t-35-85h80q0 17 11.5 28.5T460-240q17 0 28.5-11.5T500-280q0-17-11.5-28.5T460-320H80v-80h380q50 0 85 35t35 85q0 50-35 85t-85 35ZM80-560v-80h540q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43h-80q0-59 40.5-99.5T620-840q59 0 99.5 40.5T760-700q0 59-40.5 99.5T620-560H80Zm660 320v-80q26 0 43-17t17-43q0-26-17-43t-43-17H80v-80h660q59 0 99.5 40.5T880-380q0 59-40.5 99.5T740-240Z"/>
        </svg>
    )},
  { id: "bendi", 
    msgId: "navMsg2", 
    iconId: "navIcon2", 
    message: "Oogway mester is kezdte valahol...", 
    location: "Rólam", 
    icon: (
        <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 10000 10000" fill="#ffffff">
         <g id="Layer_x0020_1">
          <metadata id="CorelCorpID_0Corel-Layer"/>
          <path class="fil0" d="M61159 -14642c3127,-3669 5826,-2029 11541,-3140 5715,-1111 10689,-3387 14076,-8996 3386,-5609 6561,-3545 7302,-3069 741,476 2382,1587 2593,3228 212,1640 847,2593 -2116,4127 -2964,1535 -6615,2382 -6827,5662 -211,3281 2382,3916 2434,6086 -6614,820 -7203,-493 -7672,-3016 -1105,519 -6400,1769 -7832,1852 -1432,82 -2857,-55 -3546,-106 -369,332 -767,1931 -7408,1534 -53,-2169 2671,-2713 2663,-4210"/>
          <path class="fil1" d="M0 6349c654,-768 1219,-792 2033,-826 337,-14 726,-31 1196,-122 703,-137 1358,-344 1935,-685 567,-335 1065,-806 1470,-1477 1087,-1800 2185,-1095 2446,-927l1 1c111,72 290,191 458,363 188,192 353,443 393,757 3,23 13,82 23,139 86,503 146,851 -782,1332 -168,87 -332,161 -495,234 -531,239 -1043,470 -1072,918 -22,338 133,540 274,723 182,237 351,455 360,829l8 353 -350 44c-947,117 -1486,70 -1827,-109 -271,-142 -408,-331 -493,-562 -186,53 -404,109 -622,161 -445,105 -911,196 -1122,208 -296,17 -579,2 -784,-13 -210,201 -701,470 -2114,385l-357 -21 -9 -359c-12,-494 270,-739 526,-962 87,-76 167,-138 167,-142l779 -3c2,351 -201,532 -424,726 758,-10 876,-160 931,-229 26,-34 48,-61 79,-89l124 -111 164 12 72 5c188,15 503,40 803,23 162,-10 576,-93 988,-190 404,-96 789,-201 907,-256l457 -215 92 497c41,220 81,385 196,445 147,77 407,106 853,75 -7,-8 -14,-17 -20,-25 -227,-296 -477,-620 -437,-1248 60,-919 782,-1244 1531,-1581 158,-71 317,-143 458,-216 419,-217 399,-336 370,-508 -7,-42 -15,-86 -26,-172 -15,-113 -91,-221 -179,-311 -108,-111 -239,-198 -321,-251l-2 -1c-131,-84 -683,-439 -1355,674 -477,790 -1068,1347 -1742,1745 -663,393 -1400,627 -2186,780 -517,101 -942,119 -1312,134 -611,26 -1036,44 -1471,554l-592 -506z"/>
          <path class="fil0" d="M63595 -16579c-727,-2868 991,-4191 1559,-4324 -1218,-6080 4093,-11105 10635,-10770 4127,212 5384,1006 7620,3916 529,-132 1772,-93 3122,873"/>
          <path class="fil1" d="M552 6192c-1,-3 -4,-16 -9,-40 -111,-475 -17,-836 131,-1086 69,-117 154,-213 240,-286 -13,-133 -16,-264 -9,-394 33,-641 301,-1216 728,-1663 419,-440 991,-756 1639,-886 271,-54 557,-76 855,-60 596,30 994,107 1339,290 301,160 537,386 805,716 97,4 206,19 322,51 166,47 350,128 538,262l-452 635c-107,-77 -207,-122 -293,-146 -100,-28 -168,-29 -200,-21l-248 62 -156 -204c-257,-334 -452,-544 -680,-665 -233,-124 -537,-177 -1015,-202 -227,-12 -449,6 -662,48 -491,99 -918,333 -1228,657 -301,316 -491,720 -514,1166 -7,149 4,305 37,469l74 370 -364 85 0 0c3,0 4,-1 0,0l-1 0 1 0 0 0 -1 0 -1 0c0,0 0,1 0,1l-3 0c-6,2 -2,1 2,0 -10,4 -39,36 -82,109 -62,106 -99,273 -42,518 0,2 1,6 6,25l-757 189zm876 -841l-1 0 2 -1 0 0 -1 1z"/>
         </g>
        </svg>
    )},
  { id: "about", 
        msgId: "navMsg3", 
        iconId: "navIcon3", 
        message: "Mindenre van egy jó fogás.", 
        location: "Így dolgozom", 
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
                <path d="M480-80q-73-9-145-39.5T206.5-207Q150-264 115-351T80-560v-40h40q51 0 105 13t101 39q12-86 54.5-176.5T480-880q57 65 99.5 155.5T634-548q47-26 101-39t105-13h40v40q0 122-35 209t-91.5 144q-56.5 57-128 87.5T480-80Zm-2-82q-11-166-98.5-251T162-518q11 171 101.5 255T478-162Zm2-254q15-22 36.5-45.5T558-502q-2-57-22.5-119T480-742q-35 59-55.5 121T402-502q20 17 42 40.5t36 45.5Zm78 236q37-12 77-35t74.5-62.5q34.5-39.5 59-98.5T798-518q-94 14-165 62.5T524-332q12 32 20.5 70t13.5 82Zm-78-236Zm78 236Zm-80 18Zm46-170ZM480-80Z"/>
            </svg>
    )},
  { id: "reviews", 
    msgId: "navMsg4", 
    iconId: "navIcon4", 
    message: "Te mit mondanál?",  
    location: "Vélemények",
    icon: (
        <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
            <path d="M80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/>
        </svg>
    )},
  { id: "prices", 
    msgId: "navMsg5", 
    iconId: "navIcon5", 
    message: "Árak", 
    location: "Árak" ,
    icon: (
        <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
            <path d="M640-520q17 0 28.5-11.5T680-560q0-17-11.5-28.5T640-600q-17 0-28.5 11.5T600-560q0 17 11.5 28.5T640-520Zm-320-80h200v-80H320v80ZM180-120q-34-114-67-227.5T80-580q0-92 64-156t156-64h200q29-38 70.5-59t89.5-21q25 0 42.5 17.5T720-820q0 6-1.5 12t-3.5 11q-4 11-7.5 22.5T702-751l91 91h87v279l-113 37-67 224H480v-80h-80v80H180Zm60-80h80v-80h240v80h80l62-206 98-33v-141h-40L620-720q0-20 2.5-38.5T630-796q-29 8-51 27.5T547-720H300q-58 0-99 41t-41 99q0 98 27 191.5T240-200Zm240-298Z"/>
        </svg>
    )},
    { id: "contact", 
        msgId: "navMsg6", 
        iconId: "navIcon6", 
        message: "Eljött a Te időd!", 
        location: "Kapcsolat" ,
        icon: (
            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
                <path d="M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Zm556-480q17-39 26-79t14-81h-88l-18 94 66 66ZM360-244l-66-66-94 20v88q41-3 81-14t79-28Zm358-356ZM360-244Z"/>
            </svg>
        )},
];

export default function Nav() {
    const [currentMsg, setCurrentMsg] = useState("navMsg1");
    const [currentIcon, setCurrentIcon] = useState("navIcon1");
    const [currentLocation, setCurrentLocation] = useState("Főoldal");
    const isAnimating = useRef(false);
  
    const msgRefs = useRef({});
    const iconRefs = useRef({});
  
    const [isHovering, setIsHovering] = useState(false);
    const [prevMsg, setPrevMsg] = useState(currentMsg);
    const [prevIcon, setPrevIcon] = useState(currentIcon);

    // initialize refs
    sections.forEach((s) => {
      if (!msgRefs.current[s.msgId]) msgRefs.current[s.msgId] = null;
      if (!iconRefs.current[s.iconId]) iconRefs.current[s.iconId] = null;
    });
  
    const switchElements = (fromEl, toEl, direction) => {
      const duration = 250; // ms
      const offset = direction === "up" ? -100 : 100;
  
      fromEl.style.transition = `transform ${duration}ms ease`;
      fromEl.style.transform = `translateY(${offset}%)`;
  
      setTimeout(() => {
        fromEl.style.transition = "";
        fromEl.style.transform = "translateY(0)";
        fromEl.style.display = "none";
  
        toEl.style.display = "block";
        toEl.style.transform = `translateY(${-offset}%)`;
        toEl.style.transition = `transform ${duration}ms ease`;
  
        void toEl.offsetWidth; // reflow
  
        toEl.style.transform = "translateY(0)";
  
        setTimeout(() => {
          toEl.style.transition = "";
        }, duration);
      }, duration);
    };
  
    const switchBoth = (fromMsgId, toMsgId, fromIconId, toIconId) => {
      if (isAnimating.current || fromMsgId === toMsgId) return;
      const fromMsg = msgRefs.current[fromMsgId];
      const toMsg = msgRefs.current[toMsgId];
      const fromIcon = iconRefs.current[fromIconId];
      const toIcon = iconRefs.current[toIconId];
      if (!fromMsg || !toMsg || !fromIcon || !toIcon) return;
  
      isAnimating.current = true;
  
      switchElements(fromMsg, toMsg, "up");
      switchElements(fromIcon, toIcon, "down");
  
      // fully reset after both transitions complete
      setTimeout(() => {
        isAnimating.current = false;
        setCurrentMsg(toMsgId);
        setCurrentIcon(toIconId);
      }, 260);
    };
  
    useEffect(() => {
        const handleScroll = () => {
            if (isAnimating.current) return;
    
            const scrollY = window.scrollY;
    
            for (let i = 0; i < sections.length; i++) {
                const sec = document.getElementById(sections[i].id);
                if (!sec) continue;
        
                const top = sec.offsetTop - window.innerHeight / 2;
                const bottom = top + sec.offsetHeight;
                if (
                    scrollY >= top &&
                    scrollY < bottom &&
                    currentMsg !== sections[i].msgId
                ) {
                    const prevIdx = sections.findIndex((s) => s.msgId === currentMsg);
                    const prev = sections[prevIdx];
                    switchBoth(
                    currentMsg,
                    sections[i].msgId,
                    currentIcon,
                    sections[i].iconId
                    );
                    setCurrentLocation(sections[i].location);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [currentMsg, currentIcon]);

    const [navOpen, setNavOpen] = useState(false);
    const navOpenRef = useRef(null);
    const pageBlockRef = useRef(null);

    const toggleNav = () => {
        setNavOpen((prev) => !prev);
    };

    const closeNav = () => {
        setNavOpen(false);
    };

    const handlePageBlockClick = (e) => {
        if (e.target === pageBlockRef.current) closeNav();
    };

    const handleLinkClick = (id) => {
        // instant jump to section
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'auto' });
        closeNav();
    };

    // directly modify styles — no need for extra useEffect
    useEffect(() => {
        if (!navOpenRef.current) return;
        navOpenRef.current.style.maxHeight = navOpen ? '80vh' : '0';
    }, [navOpen]);


  
    return (
        <>
            <nav>
                <div ref={navOpenRef} className={styles.navOpen}>
                    <ul>
                        <li onClick={() => handleLinkClick('home')}>FŐOLDAL</li>
                        <li onClick={() => handleLinkClick('bendi')}>RÓLAM</li>
                        <li onClick={() => handleLinkClick('about')}>ÍGY DOLGOZOM</li>
                        <li onClick={() => handleLinkClick('reviews')}>VÉLEMÉNYEK</li>
                        <li onClick={() => handleLinkClick('prices')}>ÁRAK</li>
                        <li onClick={() => handleLinkClick('contact')}>KAPCSOLAT</li>
                    </ul>
                </div>
                <div className={styles.navBottom}  
                onClick={toggleNav}
                onMouseEnter={() => {
                    if (isAnimating.current || isHovering) return;
                        setPrevMsg(currentMsg);
                        setPrevIcon(currentIcon);
                        setIsHovering(true);
                        switchBoth(currentMsg, "hoverMsg", currentIcon, "hoverIcon");
                }}
                onMouseLeave={() => {
                    if (isAnimating.current || !isHovering) return;
                        setIsHovering(false);
                        switchBoth("hoverMsg", prevMsg, "hoverIcon", prevIcon);
                }}
                >
                    <div className={styles.icons} style={{ position: "relative", height: "24px" }}>
                        {sections.map((s, i) => (
                            <span className={styles.icon}
                            key={s.iconId}
                            ref={(el) => (iconRefs.current[s.iconId] = el)}
                            style={{
                                display: i === 0 ? "block" : "none",
                                transform: i === 0 ? "translateY(0)" : "translateY(-100%)",
                            }}
                            >
                            {s.icon}
                            </span>
                        ))}
                        <span
                            className={styles.icon}
                            ref={(el) => (iconRefs.current["hoverIcon"] = el)}
                            style={{
                                display: "none",
                                transform: "translateY(-100%)",
                            }}
                            >
                            {/* Up arrow icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
                                <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
                            </svg>
                        </span>
                    </div>
                    <div className={styles.texts}>
                    {sections.map((s, i) => (
                            <span className={styles.text}
                            key={s.msgId}
                            ref={(el) => (msgRefs.current[s.msgId] = el)}
                            style={{
                                display: i === 0 ? "block" : "none",
                                transform: i === 0 ? "translateY(0)" : "translateY(100%)",
                            }}
                            >
                            {s.message}
                            </span>
                        ))}

                        <span
                            className={styles.text}
                            ref={(el) => (msgRefs.current["hoverMsg"] = el)}
                            style={{
                                display: "none",
                                transform: "translateY(100%)",
                            }}
                            >
                            Menü
                        </span>
                    </div>

                    

                    {/* Hover text */}
                    
                    <div className={styles.location}>{currentLocation}</div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                    </svg>
                </div>
            </nav>
            <div 
            ref={pageBlockRef}
            className={styles.block}
            onClick={handlePageBlockClick}
            style={{ display: navOpen ? 'block' : 'none' }}>

            </div>
        </>
    )
}

  