import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import {emailValidation} from './../validate';
import React from 'react';
import {Field} from 'redux-form';


const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
    <div>
        <label>
            {
                (touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>)))
                ||
                (<span>{label}</span>)
            }
        </label>
        <div>
            <input {...input} type={type}/>
        </div>
    </div>
);

class EmailForm extends React.Component {
    render() {
        const {handleSubmit, form, valid} = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field name="email" component={renderField} type="email" label="EMAIL"/>
                </div>
                <div>
                    <Field name="password" component={renderField} type="password" label="PASSWORD"/>
                </div>
                <div>
                    <Field name="confirmPassword" component={renderField} type="password" label="CONFIRM PASSWORD"/>
                </div>
                <button type="submit" disabled={!valid}>Next</button>
            </form>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        valid: props.valid
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSubmit(values, dispatch, props) {
            console.log(values);
        }
    }
};


let EmailFormWrapper = reduxForm({
    form: 'email',
    validate: emailValidation
})(EmailForm);

export default connect(mapStateToProps, mapDispatchToProps)(EmailFormWrapper);
