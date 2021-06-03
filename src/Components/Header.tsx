import React, { useMemo } from "react";
import { Link, RouteComponentProps, useLocation, useParams, useRouteMatch, withRouter } from "react-router-dom";
import styled from "styled-components";
import useRouter from "use-react-router";

const Head = styled.header`
	color: white;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	padding: 0 10px;
	background-color: rgba(20, 20, 20, 0.8);
	z-index: 10;
	box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
    display: flex;
`;

const Item = styled.li < { current: boolean }> `
	width: 50px;
	text-align: center;
	border-bottom: 5px solid ${props => (props.current ? "#EEC425" : "transparent")};
	transition: border-bottom .5s ease-in-out;
`;

const SLink = styled(Link)`
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Header = () => {
	const { match: { url }, location: { pathname } } = useRouter();

	return useMemo(() => (
		<Head>
			<List>
				<Item current={pathname === "/" || pathname.includes("/movie")}>
					<SLink to="/">Movies</SLink>
				</Item>
				<Item current={pathname === "/tv" || pathname.includes("/show")}>
					<SLink to="/tv">TV</SLink>
				</Item>
				<Item current={pathname.includes("/search")}>
					<SLink to="/search">Search</SLink>
				</Item>
			</List>
		</Head>
	), [url]);
}

export default Header;
