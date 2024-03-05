import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
function Footer() {
  const githubLink = "https://github.com/ardaozkanli";

  return (
    <div className="d-flex gap-2 justify-content-center align-items-center mt-auto">
      <h5 className="text-white">Made By Hedwigs</h5>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} className="text-white" />
      </a>
    </div>
  );
}

export default Footer;
