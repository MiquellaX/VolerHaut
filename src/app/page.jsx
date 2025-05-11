import React from "react";
import HeaderContents from "@/Components/Main/HeaderContens";
import BodyContents from "@/Components/Main/BodyContents";
import FooterContents from "@/Components/Main/FooterContents";
import HeaderAnnouncement from "@/Components/Main/HeaderAnnouncements";

export default function Home() {
	return (
		<>
			<HeaderAnnouncement />
			<HeaderContents />
			<BodyContents />
			<FooterContents />
		</>
	);
}
