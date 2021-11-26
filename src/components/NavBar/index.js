import React from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
                    <NavBtn href="/AddRecipeform">
                        Our Recipes
                    </NavBtn>
                    <NavBtn>
                        Add Recipe
                    </NavBtn>
				</NavMenu>
                <Bars />
                <NavMenu>
                    <NavBtn>
                        Search
                    </NavBtn>
                    <NavBtn>
                        About us
                    </NavBtn>
                </NavMenu>
			</Nav>
		</>
	);
};
export { Navbar };
