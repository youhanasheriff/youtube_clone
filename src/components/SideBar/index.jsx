import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./SideBar.module.css";
import { sideMenu, subscription } from "./side_menu";

const SideBar = () => {
	return (
		<div className={classes.side_bar}>
			<div className={classes.menu}>
				{sideMenu.map((item, i) => {
					return (
						<div
							key={item.title}
							className={`${classes.menu_item} ${
								i === 0 ? classes.bg_color : ""
							}`}
							onClick={() => alert(item.title)}
						>
							<FontAwesomeIcon className={classes.menu_icon} icon={item.icon} />
							<p className={classes.menu_text}>{item.title}</p>
						</div>
					);
				})}
				<div className={classes.divider}></div>
				{subscription.map((item, i) => {
					return (
						<div
							key={item.title + i}
							className={classes.menu_item}
							onClick={() => alert(item.title)}
						>
							<FontAwesomeIcon className={classes.menu_icon} icon={item.icon} />
							<p className={classes.menu_text}>{item.title}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default SideBar;
