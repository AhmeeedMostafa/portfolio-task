import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { withStyles, Button, TextField, Typography } from '@material-ui/core';

import sendMail from '../../utils/sendMail';

const styles = ((theme) => ({
  root: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(3),
    maxWidth: '80%',
  },
  form: {
    '& div': {
      margin: theme.spacing(0.35),
    }
  },
  btn: {
    marginTop: theme.spacing(1),
    left: '37%',
  },
}));


const ContactForm = ({ classes }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const sendMessage = async () => {
    setIsSubmitting(true);
    // Delete the general error that shows the whole form error
    deleteError('general');

    if (formData && Object.keys(formData).length === 3 && Object.keys(errors).length === 0) {
      const sendingMail = await sendMail(formData);
      if (sendingMail) {
        setIsSubmitted(true);
      } else {
        alert("Something went wrong while sending your message, try again later.");
      }
    } else {
      setErrors({ ...errors, general: true });
    }
    setIsSubmitting(false);
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
      <Typography align="center" variant="h6" compoent="b" gutterBottom>Let's get in touch!</Typography>
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
            fullWidth
          />
        </div>
        <div>
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            className={classes.field}
            onChange={handleValueChange}
            error={errors.email}
            helperText={errors.email && 'Email is required!'}
            required
            fullWidth
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
        <Button 
          variant="contained"
          color="primary"
          className={classes.btn}
          onClick={!isSubmitting ? sendMessage : undefined}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send message'}
        </Button>
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ContactForm);
