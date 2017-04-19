import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import './App.css';

import Menu from './Menu/Menu.js';
import Logo from './Logo/Logo.js';
import MenuMobile from './Menu/MenuMobile.js';
// import Home from './Home/Home.js';
// import Categories from './Products/Categories.js';
import Acute from './Angles/Acute.js';
// import Contacts from './Contacts/Contacts.js';

class App extends Component {
  render() {
    return (
		<Grid >
			<Grid.Row >
				<Grid.Column width={6}>
					<Grid padded='horizontally'>
						<Grid.Row  >
							<Grid.Column width={1}>	</Grid.Column>
							<Grid.Column width={14} only='computer'>
								<Logo />
							</Grid.Column>
							<Grid.Column width={1}>	</Grid.Column>
						</Grid.Row>
					</Grid>
				</Grid.Column>
			</Grid.Row>

			<Grid.Row only='tablet mobile'>
				<Grid.Column width={16}>
					<MenuMobile />
				</Grid.Column>
			</Grid.Row>

			<Grid.Row>
				<Grid.Column width={4} only='computer'>
					<Grid>
						<Grid.Row >
							<Grid.Column width={14} >
								<Menu />
							</Grid.Column>
							<Grid.Column width={2}>	</Grid.Column>
						</Grid.Row>
					</Grid>
				</Grid.Column>
				<Grid.Column computer={12} mobile={16}>
					<Grid>
						<Grid.Row >
							<Grid.Column computer={15} mobile={16}>
								{/* <Home /> */}
								{/* <Categories /> */}
								<Acute />
								{/* <Contacts /> */}
							</Grid.Column>
							<Grid.Column width={1} only='computer'>	</Grid.Column>
						</Grid.Row>
					</Grid>
				</Grid.Column>
			</Grid.Row>
		</Grid>
    );
  }
}

export default App;
