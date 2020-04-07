import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SweetAlert from 'react-bootstrap-sweetalert';

class UserRegister extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			phone: "",
			birthday: "",
			country: "",
			profile: "",
			fnInvalid: false,
			lnInValid: false,
			pInvalid: false,
			eInValid: false,
			date : "",
			loader : false
		};
	}
	
	_handleSubmit = (e) => {
		e.preventDefault();
		// if(_validateForm){
		
		// }
		if(this._validateForm()){
			this.setState({loader : true})
		}
	};
	
	onChangeDate = d => {
		//this.setState({ date })
		let formatDate = this._DateFormat(d);
		this.setState({
			date : formatDate
		})
	}
	
	_DateFormat(d){
		var nd = new Date(d);
		var dt = nd.getDate();
		dt = (dt <= 9) ? "0"+dt : dt;
		var dm = nd.getMonth();
		dm = dm+1;
		dm = (dm <= 9) ? "0"+dm : dm;
		var dy = nd.getFullYear();
		var hrs = nd.getHours();
		var mins = nd.getMinutes();
		return dm+"-"+dt+"-"+dy;
	}
	
	_validateForm() {
		let validate = true;
		let state = {};
		let strongRegex = new RegExp(
			"(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
			);
			if (!this.state.firstName || this.state.firstName.length < 2) {
				state["fnInvalid"] = true;
				validate = false;
			} else {
				state["fnInvalid"] = false;
				validate = true;
			}
			if (!this.state.lastName || !validate || this.state.lastName.length < 2) {
				state["lnInValid"] = !validate && this.state.lastName ? false : true;
				validate = false;
			} else {
				state["lnInValid"] = false;
				validate = true;
			}
			if (!this.state.password || !validate || !strongRegex.test(this.state.password)) {
				// added regex for strong password
				state["pInvalid"] = !validate && this.state.password && strongRegex.test(this.state.password) ? false : true;
				validate = false;
			} else {
				state["pInvalid"] = false;
				validate = true;
			}
			if (
				!validate ||
				(!this.state.email &&
					!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email))
					) {
						state["eInValid"] = !validate && this.state.email ? false : true;
						validate = false;
					} else {
						state["eInValid"] = false;
						validate = true;
					}
					
					if (validate) {
						//this.props.mapData(this.state, true);
						return validate;
					} else {
						this.setState(state);
					}
				}
				
				hideSweetalert(){
					this.setState({
						loader : false
					})
				}
				
				render() {
					return (
						<>
						<div className="page-wrapper bg-blue p-t-100 p-b-100 font-robo">
						<div className="wrapper wrapper--w680 relative">
						<div className="card card-1">
						<div className="card-body">
						<h2 className="title">Registration Information</h2>
						<p style={{"position": "relative","textAlign": "left","fontSize": "10px","top": "-10px","color": "#b77f7f"}}>All * mark fields be filled</p>
						<form method="POST" onSubmit={this._handleSubmit}>
						<div className="row row-space">
						<div className="col-2">
						<div
						className={`input-group ${
							this.state.fnInvalid ? "has-error" : ""
						}`}
						>
						<input
						autofocus="true"
						className="input--style-1 req"
						type="text"
						placeholder="FIRST NAME *"
						name="fname"
						onChange={(event) => {
							let v = event.target.value;
							this.setState({
								firstName: v,
							});
						}}
						/>
						{this.state.fnInvalid ? (
							<div className="error-msg">
							<p>
							First name is required and must contain atleast 3
							characters
							</p>
							</div>
							) : (
								<></>
								)}
								</div>
								</div>
								<div className="col-2">
								<div
								className={`input-group ${
									this.state.lnInValid ? "has-error" : ""
								}`}
								>
								<input
								className="input--style-1 req"
								type="text"
								placeholder="LAST NAME *"
								name="lname"
								onChange={(event) => {
									let v = event.target.value;
									this.setState({
										lastName: v,
									});
								}}
								/>
								{this.state.lnInValid ? (
									<div className="error-msg">
									<p>
									Last name is required and must contain atleast 3
									characters
									</p>
									</div>
									) : (
										<></>
										)}
										</div>
										</div>
										</div>
										
										<div className="row row-space">
										<div className="col-2">
										<div
										className={`input-group ${
											this.state.eInValid ? "has-error" : ""
										}`}
										>
										<input
										className="input--style-1 req"
										type="text"
										placeholder="EMAIL *"
										name="email"
										onChange={(event) => {
											let v = event.target.value;
											this.setState({
												email: v,
											});
										}}
										/>
										{this.state.eInValid ? (
											<div className="error-msg">
											<p>Email provided is invalid</p>
											</div>
											) : (
												<></>
												)}
												</div>
												</div>
												<div className="col-2">
												<div
												className={`input-group ${
													this.state.pInvalid ? "has-error" : ""
												}`}
												>
												<input
												className="input--style-1 req"
												type="password"
												placeholder="PASSWORD *"
												name="password"
												onChange={(event) => {
													let v = event.target.value;
													this.setState({
														password: v,
													});
												}}
												/>
												{this.state.pInvalid ? (
													<div className="error-msg">
													<p>
													Password is required and must contain a number,1
													an uppercase letter and 1 special character
													</p>
													</div>
													) : (
														<></>
														)}
														</div>
														</div>
														</div>
														<div className="input-group">
														<input
														className="input--style-1"
														type="file"
														title=" PROFILE IMAGE "
														name="profile"
														onChange={(event) => {
															let v = event.target.value;
															this.setState({
																profile: v,
															});
														}}
														/>
														</div>
														<div className="row row-space">
														<div className="col-2">
														<div className="input-group">
														{/* added phone validation here allow only numbers */}
														<input
														className="input--style-1"
														type="number"
														placeholder="PHONE"
														name="phone"
														id="phoneOnly"
														onChange={(event) => {
															let v = event.target.value;
															this.setState({
																phone: v,
															});
														}}
														/>
														</div>
														</div>
														<div className="col-2">
														<div className="input-group relative">
														{/* <input className="input--style-1 js-datepicker" type="text" placeholder="BIRTHDATE" name="birthday" /> */}
														<i class="fa fa-calendar" aria-hidden="true" style={{"position": "absolute","right": "3px","zIndex": "9","top": "10px"}}></i>
														
														<DatePicker
														placeholderText="BIRTHDATE"
														onChange={this.onChangeDate}
														value={this.state.date}
														/>
														</div>
														</div>
														</div>
														<div className="row-space">
														<div className="input-group">
														<Dropdown
														options={[
															"Algeria",
															"American Samoa",
															"Botswana",
															"Bouvet Island",]}
															onChange={this._onSelectGender}
															value={""}
															placeholder="Select Country"
															/>
															</div>
															</div>
															
															<div className="p-t-20">
															<button
															className="btn btn--radius btn--green"
															type="submit"
															>
															Submit
															</button>
															</div>
															</form>
															</div>
															</div>
															</div>
															</div>
															
															<SweetAlert
															success
															show={this.state.loader}
															showLoaderOnConfirm={true}
															onConfirm={() => {
																this.hideSweetalert();
															}}
															>
															Form is successfully validated  
															</SweetAlert>
															</>
															);
														}
													}
													
													export default UserRegister;
													