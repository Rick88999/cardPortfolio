import { useEffect, useRef } from "react";
import { animate } from "animejs";
import "./css/ProjectBox.css";
import { set } from "animejs";

function ProjectBox({title, projectLabel, projectUrl, isExpanded, onToggle}) {
  const itemRef = useRef(null);
  const textRef = useRef(null);
  const linkRef = useRef(null);
  const isFirstRender = useRef(true);

  const animateLinkColor = (isActive) => {
    animate(linkRef.current, {
      color: isActive ? "#67e8f9" : "#f1f5f9",
      duration: 2000,
      ease: "outInBounce",
    });
  };

  const canAnimateLink = () =>
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  useEffect(() => {
    set(textRef.current, { opacity: 0, maxHeight: 0 });
    set(linkRef.current, { color: "#f1f5f9", textDecoration: "none" });
  }, []);

  useEffect(() => {
    const contentHeight = textRef.current.scrollHeight;

    const animation1 = animate(itemRef.current, {
      scale: isExpanded ? 1.05 : 1,
      duration: 300,
      ease: "inOutQuad",
    });

    var animation2;

    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      animation2 = animate(textRef.current, {
        opacity: isExpanded ? [0, 1] : [1, 0],
        maxHeight: isExpanded
          ? ["0px", `${contentHeight}px`]
          : [`${contentHeight}px`, "0px"],
        duration: 250,
        ease: "outQuad",
        delay: isExpanded ? 100 : 0,
      });
    }

    return () => {
      animation1.pause();
      animation2?.pause();
    };
  }, [isExpanded]);

  return (
    <div
      ref={itemRef}
      className="project-item"
      role="button"
      tabIndex={0}
      aria-pressed={isExpanded}
      onClick={onToggle}
    >
        
      
      <h2>{title}</h2>

      <div ref={textRef} className="project-description">
        <p>{projectLabel}</p>
        <a
          ref={linkRef}
          className="project-link"
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(event) => event.stopPropagation()}
          onPointerEnter={(event) => {
            if (event.pointerType !== "touch" && canAnimateLink()) {
              animateLinkColor(true);
            }
          }}
          onPointerLeave={(event) => {
            if (event.pointerType !== "touch" && canAnimateLink()) {
              animateLinkColor(false);
            }
          }}
          onFocus={() => {
            if (canAnimateLink()) {
              animateLinkColor(true);
            }
          }}
          onBlur={() => {
            if (canAnimateLink()) {
              animateLinkColor(false);
            }
          }}
        >
            Vai al progetto
        </a>
      </div>
    </div>
  );
}

export default ProjectBox;