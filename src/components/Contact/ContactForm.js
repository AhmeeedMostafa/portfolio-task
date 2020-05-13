import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { withStyles, Button, TextField, Typography } from '@material-ui/core';

const styles = ((theme) => ({
  root: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(3),
    width: '40%',
  },
  form: {
    '& div': {
      margin: theme.spacing(0.35),
    }
  },
  field: {
    width: '49%',
  },
  btn: {
    marginTop: theme.spacing(1),
    left: '37%',
  },
}));


const ContactForm = ({ classes }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const deleteError = (errorName) => {
    const currentErrors = errors;
    delete currentErrors[errorName];

    setErrors(currentErrors);
  }

  const handleValueChange = (event) => {
    if (event.target.value === '') {
      setErrors({ ...errors, [event.target.name]: true })
    } else {
      deleteError(event.target.name);
    }

    setFormData({ ...formData, [event.target.name]: event.target.value.trim() });
  }

  const sendMessage = () => {
    // Delete the general error that shows the whole form error
    deleteError('general');

    if (formData && Object.keys(formData).length === 3 && Object.keys(errors).length === 0) {
      console.log(formData);
      setIsSubmitted(true);
    } else {
      setErrors({ ...errors, general: true });
    }
  }

  if (isSubmitted) {
    return <div className={classes.root} id="contact">
      <Typography color="primary" align="center">
        Message has been sent successfully, Thank you!
      </Typography>
    </div>
  }

  return (
    <div className={classes.root} id="contact">
      <Typography align="center" gutterBottom>Let's get in touch!</Typography>
      {errors.general 
        && <Typography align="center" color="error">All the fields are required, please fill them.</Typography>}
      <form className={classes.form}>
        <div>
          <TextField
            label="Name"
            variant="outlined"
            name="name"
            className={classes.field}
            onChange={handleValueChange}
            error={errors.name}
            helperText={errors.name && 'Name is required!'}
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            className={classes.field}
            onChange={handleValueChange}
            error={errors.email}
            helperText={errors.email && 'Email is required!'}
            required
          />
        </div>
        <div>
          <TextField
            label="Your message"
            variant="outlined"
            name="body"
            multiline
            rows={4}
            fullWidth
            onChange={handleValueChange}
            error={errors.body}
            helperText={errors.body && 'Message is required!'}
            required
          />
        </div>
        <Button variant="contained" color="primary" className={classes.btn} onClick={sendMessage}>
          Send message
        </Button>
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ContactForm);
