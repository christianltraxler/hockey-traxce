

const NavLink = (props) => (
    <li>
        <a href={props.link}>
          <i className={`bx ${props.icon}`}></i>
          <span className="links_name">{props.name}</span>
        </a>
         <span className="tooltip">{props.name}</span>
      </li>
);

export default NavLink;