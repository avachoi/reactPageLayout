import React from "react";
import Header from "./Header.js";
import SearchBar from "./SearchBar.js";
import EmployeeList from "./EmployeeList.js";
import EmployeeListItem from "./EmployeeListItem.js";

function Homepage() {
	return (
		<div className="homepage">
			<Header />
			<SearchBar />
			<EmployeeList />
			<EmployeeListItem />
		</div>
	);
}

export default Homepage;
