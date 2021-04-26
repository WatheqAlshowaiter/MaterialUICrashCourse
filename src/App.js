import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import SaveIcon from "@material-ui/icons/SaveOutlined";
import DeletIcon from "@material-ui/icons/Delete";
import CheckBox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import DoneIcon from "@material-ui/icons/Done";
import TextField from "@material-ui/core/TextField";
import {
	makeStyles,
	ThemeProvider,
	createMuiTheme,
} from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";
import "@fontsource/roboto";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles({
	root: {
		background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
		borderRadius: 3,
		border: 0,
		color: "white",
		height: 48,
		padding: "0 30px",
		marginBottom: "1rem",
		boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
	},
});

function CheckBoxExample() {
	const [checked, setChecked] = React.useState(true);
	return (
		<FormControlLabel
			control={
				<CheckBox
					checked={checked}
					icon={<DoneIcon />}
					checkedIcon={<DoneIcon color="secondary" />}
					onChange={(e) => setChecked(e.target.checked)}
					color="primary"
					inputProps={{
						"aria-label": "secondary checkbox",
					}}
				/>
			}
			label="testing checkbox"
		/>
	);
}

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#61DAF9",
		},
		secondary: {
			main: green[500],
		},
	},
	typography: {
		h2: {
			fontSize: 36,
		},
	},
});

function App() {
	const classes = useStyles();

	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<header className="App-header">
					<Container maxWidth="md">
						<AppBar color="secondary">
							<Toolbar>
								<IconButton>
									<MenuIcon />
								</IconButton>
								<Typography variant="h6">MUI Theming</Typography>
								<Button>Login</Button>
							</Toolbar>
						</AppBar>
						<Typography variant="h2" component="div">
							Hello, this is a typography
						</Typography>
						<Typography variant="body1">
							Hello, this is another typography
						</Typography>
						<Button className={classes.root}>Test Styled Button</Button>
						<TextField
							variant="outlined"
							color="secondary"
							type="email"
							label="the time"
							placeholder="som@gmail.com"
						/>
						<CheckBoxExample />
						<Grid
							container
							spacing={2}
							justify="center"
							style={{ margin: "1rem", padding: "1rem" }}
						>
							<Grid item xs={6} sm={12} md={3}>
								<Paper style={{ height: 75, width: "100%" }} />
							</Grid>
							<Grid item xs={6} sm={4} md={3}>
								<Paper style={{ height: 75, width: "100%" }} />
							</Grid>
							<Grid item xs={6} sm={4} md={3}>
								<Paper style={{ height: 75, width: "100%" }} />
							</Grid>
							<Grid item xs={6} sm={4} md={3}>
								<Paper style={{ height: 75, width: "100%" }} />
							</Grid>
						</Grid>
						<ButtonGroup size="large">
							<Button
								onClick={() => console.log("save")}
								startIcon={<SaveIcon />}
								disabled={false}
								style={{
									fontSize: 20,
								}}
								variant="contained"
								color="primary"
							>
								Save
							</Button>
							<Button
								onClick={() => console.log("discard")}
								endIcon={<DeletIcon />}
								disabled={false}
								style={{
									fontSize: 20,
								}}
								variant="contained"
								color="secondary"
							>
								Discard
							</Button>
						</ButtonGroup>
						<img src={logo} className="App-logo" alt="logo" />
					</Container>
				</header>
			</div>
		</ThemeProvider>
	);
}

export default App;
