import {connect} from 'react-redux';
import React, {Component} from 'react';


class Profile extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    render() {
        // const {
        //     firstName, lastName, age, city, description, address, mobile, email,
        //     sex, avatar, background, social: {facebook, vk, instagram}
        // } = this.props.profile;

        return (
            <div>
                <div>Profile Page</div>
                {/*<br/>*/}
                {/*<form className="form-horizontal">*/}
                    {/*<div className="form-group">*/}
                        {/*<label className="col-md-2 control-label" htmlFor="firstName">First Name</label>*/}
                        {/*<div className="col-md-10"><input className="form-control" type="text" name="firstName"*/}
                                                          {/*value={firstName}/></div>*/}
                    {/*</div>*/}

                    {/*<div className="form-group">*/}
                        {/*<label className="col-md-2 control-label" htmlFor="lastName">Last Name</label>*/}
                        {/*<span className="col-md-10"><input className="form-control" type="text" name="lastName"*/}
                                                           {/*value={lastName}/></span>*/}
                    {/*</div>*/}

                    {/*<div className="form-group">*/}
                        {/*<label className="col-md-2 control-label" htmlFor="age">Age</label>*/}
                        {/*<div className="col-md-10"><input className="form-control" type="text" name="age" value={age}/>*/}
                        {/*</div>*/}
                    {/*</div>*/}

                    {/*<div className="form-group">*/}
                        {/*<label className="col-md-2 control-label" htmlFor="city">City</label>*/}
                        {/*<div className="col-md-10"><select className="form-control" type="text" name="city"*/}
                                                           {/*value={city}>*/}
                            {/*<option value="Москва">Moscow</option>*/}
                            {/*<option value="Saint-Petersburg">Saint-Petersburg</option>*/}
                        {/*</select></div>*/}
                    {/*</div>*/}

                    {/*<div className="form-group">*/}
                        {/*<label className="col-md-2 control-label" htmlFor="description">Description</label>*/}
                        {/*<div className="col-md-10"><textarea rows="3" className="form-control" type="text"*/}
                                                             {/*name="description"*/}
                                                             {/*value={description}/></div>*/}
                    {/*</div>*/}

                    {/*<div className="form-group">*/}
                        {/*<label className="col-md-2 control-label" htmlFor="address">Address</label>*/}
                        {/*<span className="col-md-10"><input className="form-control" type="text" name="address"*/}
                                                           {/*value={address}/></span>*/}
                    {/*</div>*/}
                    {/*<div className="form-group">*/}
                        {/*<label className="col-md-2 control-label" htmlFor="mobile">Mobile</label>*/}
                        {/*<span className="col-md-10"><input className="form-control" type="tel" name="mobile"*/}
                                                           {/*value={mobile}/></span>*/}
                    {/*</div>*/}

                    {/*<div className="form-group">*/}
                        {/*<label className="col-md-2 control-label" htmlFor="email">Email</label>*/}
                        {/*<div className="col-md-10"><input className="form-control" type="email" name="email"*/}
                                                          {/*value={email}/></div>*/}
                    {/*</div>*/}

                    {/*<div className="form-group">*/}
                        {/*<label className="col-md-2 control-label" htmlFor="sex">Sex</label>*/}
                        {/*<div className="col-md-10"><select className="form-control" name="sex" value={sex}>*/}
                            {/*<option value="male">Male</option>*/}
                            {/*<option value="female">Female</option>*/}
                            {/*<option value="other">Other</option>*/}
                        {/*</select></div>*/}
                    {/*</div>*/}


                    {/*<div className="form-group">*/}
                        {/*<label className="col-md-2 control-label" htmlFor="facebook">Facebook</label>*/}
                        {/*<span className="col-md-10"><input className="form-control" type="text" name="facebook"*/}
                                                           {/*value={facebook}/></span>*/}
                    {/*</div>*/}

                    {/*<div className="form-group">*/}
                        {/*<label className="col-md-2 control-label" htmlFor="vk">VK</label>*/}
                        {/*<span className="col-md-10"><input className="form-control" type="vk" name="vk"*/}
                                                           {/*value={vk}/></span>*/}
                    {/*</div>*/}

                    {/*<div className="form-group">*/}
                        {/*<label className="col-md-2 control-label" htmlFor="instagram">Instagram</label>*/}
                        {/*<span className="col-md-10"><input className="form-control" type="instagram" name="instagram"*/}
                                                           {/*value={instagram}/></span>*/}
                    {/*</div>*/}

                    {/*<button className="btn btn-primary pull-right" onClick={() => {*/}
                        {/*this.props.onProfileSave();*/}
                    {/*}}>Save*/}
                    {/*</button>*/}
                {/*</form>*/}
            </div>
        )
    }
}

export default connect()(Profile);
