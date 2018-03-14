import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        {field.meta.error}
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field label="Title" name="title" component={this.renderField} />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    error.title = 'Enter a title!';
  }

  if (!values.categories) {
    error.categories = 'Enter some categories!';
  }

  if (!values.content) {
    error.content = 'Enter some content!';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
