import MAPPALINKS from "./mappaLink";

function LinkDeployer({link, type}) {
    const LinkComponent = MAPPALINKS[type];
    return (
        <a href={link}>
            {LinkComponent ? <LinkComponent size={40} /> : null}
        </a>
    )
    }
    export default LinkDeployer;