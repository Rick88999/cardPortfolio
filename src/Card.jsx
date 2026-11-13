import { useState, useEffect, useRef } from "react";
import "./css/card.css";
import { animate, set } from 'animejs';
import LinkDeployer from "./LinkDeployer";
import ProjectBox from "./ProjectBox";
import doc  from './Riccardo_Tulini_CV_6.pdf';

function Card({ title, description, imageUrl, links, projects}) {
  const [expandedProject, setExpandedProject] = useState(null);

  const ref = useRef(null);
  const projectsRef = useRef(null);
  

  useEffect(() => {
    const projectsHeight = projectsRef.current.scrollHeight;

    set(ref.current, { y: '-20cqh' });
    set(projectsRef.current, {
      opacity: 0,
      maxHeight: 0,
      overflow: "hidden",
    });

    const animation = animate(ref.current, {
      y: '0cqh',
      duration: 800,
      ease: "inOut(1.68)",
    });
    const projectsAnimation = animate(projectsRef.current, {
      opacity: [0, 1],
      maxHeight: [0, projectsHeight],
      duration: 1600,
      delay: 800,
      ease: "outQuad",
      onComplete: () => {
        projectsRef.current.style.maxHeight = "none";
        projectsRef.current.style.overflow = "visible";
      },
    });

    return () => {
      animation.pause();
      projectsAnimation.pause();
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!projectsRef.current?.contains(event.target)) {
        setExpandedProject(null);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);


  return (
    <div ref={ref} className="card">
      <img src={imageUrl} alt={title} />
      <div className="card-content">
        <div className="titleAndLinks">
          <div className="TandL-box">
            <h2>{title}</h2>
            <div className="linksBoard">
              {links.map(({ url, type }) => (
                <LinkDeployer key={url} link={url} type={type} />
              ))}
            </div>
            <div className="CV-box"><a href={doc} download><img width="56" height="56" src="https://img.icons8.com/3d-fluency/94/resume.png"  alt="resume"/></a></div>
          </div>
        </div>

        <div className="description-box">
          <p>{description}</p>
        </div>
        <div ref={projectsRef} className="project-box">
          <h3>Progetti</h3>
          {projects.map(({ projectTitle, projectLabel, projectUrl }) => (
            <ProjectBox
              key={projectTitle}
              projectId={projectTitle}
              title={projectTitle}
              projectLabel={projectLabel}
              projectUrl={projectUrl}
              isExpanded={expandedProject === projectTitle}
              onToggle={() =>
                setExpandedProject((currentProject) =>
                  currentProject === projectTitle ? null : projectTitle,
                )
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;