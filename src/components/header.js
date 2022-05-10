import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Header(props) {
	return (
		<div className="month-name">
			<div className="left">
				<FontAwesomeIcon
					icon={faAngleLeft}
					onClick={() => props.monthChanger("previous")}
				/>
			</div>
			<div className="month">{props.monthName}</div>
			<div className="right">
				<FontAwesomeIcon
					icon={faAngleRight}
					onClick={() => props.monthChanger("next")}
				/>
			</div>
		</div>
	);
}
// onClick={() => props.monthChanger("previous/next")}
