import { logo } from "../../files/images";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faSearch,
	faUser,
	faBell,
	faBox,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import classes from "./Header.module.css";

const Header = () => {
	const [value, setValue] = useState("");
	const onClickHandler = () => {
		alert("Menu Button clicked");
	};
	const onSearchHandler = () => {
		alert(`${value} Searched`);
	};
	const searchHandler = (event) => {
		console.log(event.target.value);
		setValue(event.target.value);
	};
	const appsHandler = () => {
		alert("apps Button clicked");
	};
	const notiHandler = () => {
		alert("Notification Button clicked");
	};
	const userHandler = () => {
		alert("User Button clicked");
	};
	return (
		<header className={classes.header}>
			<div className={classes.logo}>
				<button className={classes.btn} onClick={onClickHandler}>
					<FontAwesomeIcon className={classes.fas} icon={faBars} />
				</button>
				<img src={logo} alt="Youtube Logo" />
			</div>
			<div className={classes.search_bar}>
				<input
					type="text"
					onChange={searchHandler}
					className={classes.search_input}
					placeholder="Search"
					value={value}
				/>
				<button
					className={`${classes.btn} ${classes.search_btn}`}
					onClick={onSearchHandler}
				>
					<FontAwesomeIcon className={classes.search_icon} icon={faSearch} />
				</button>
			</div>
			<div className={classes.icons}>
				<button onClick={appsHandler} className={classes.btn}>
					<FontAwesomeIcon
						className={`${classes.fas} ${classes.icon}`}
						icon={faBox}
					/>
				</button>
				<button onClick={notiHandler} className={classes.btn}>
					<FontAwesomeIcon
						className={`${classes.fas} ${classes.icon}`}
						icon={faBell}
					/>
				</button>
				<button onClick={userHandler} className={classes.btn}>
					<FontAwesomeIcon
						className={`${classes.fas} ${classes.icon}`}
						icon={faUser}
					/>
				</button>
			</div>
		</header>
	);
};

export default Header;
