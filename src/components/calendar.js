import React, { Component } from "react";

import Header from "./header";
import Weeks from "./weekwrapper";
import Footer from "./footer";

export default class Calendar extends Component {
	constructor(props) {
		super(props);

		this.monthList = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];

		this.now = this.calculateDateData();

		this.state = {
			month: {},
			monthData: [],
		};

		this.handleMonthChange = this.handleMonthChange.bind(this);
	}

	handleMonthChange(direction) {
		const currentMonthIndex = this.monthList.indexOf(this.state.month.name);
		const newMonthName =
			this.monthList[
				direction === "next"
					? currentMonthIndex + 1
					: currentMonthIndex - 1
			];
		const newMonthData = this.state.monthData.filter(
			(month) => month.name === newMonthName
		)[0];
		this.setState({ month: newMonthData });
	}

	calculateDateData() {
		const now = new Date();
		const month = this.monthList[now.getMonth()];
		const year = now.getFullYear();
		return { month, year };
	}

	componentDidMount() {
		fetch("http://127.0.0.1:5000/month/get")
			.then((response) => response.json())
			.then((data) =>
				this.setState({
					monthData: data,
					month: data.filter(
						(month) =>
							month.name === this.now.month &&
							month.year === this.now.year
					)[0],
				})
			);
	}

	render() {
		return (
			<div className="calendar-container">
				<Header
					monthName={this.state.month.name}
					monthChanger={this.handleMonthChange}
				/>
				<Weeks month={this.state.month} />
				<Footer year={this.state.month.year} />
				<h3>Calendar by OasisWolf</h3>
			</div>
		);
	}
}
