import React from 'react'
import PropTypes from 'prop-types'
import { Box, withStyles, Typography, Divider } from '@material-ui/core'

const styles = ((theme) => ({
  root: {
    padding: theme.spacing(3, 3, 5, 3),
    height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px - 10px)`,
    backgroundColor: theme.palette.default,
    overflowY: 'auto',
  },
  divider: {
    height: 7,
    width: '9%',
    backgroundColor: theme.palette.primary.main,
  },
  txt: {
    padding: theme.spacing(2, 0),
  }
}));

const Details = ({ classes }) => {
  return (
    <Box className={classes.root}>
      <Divider className={classes.divider} />
      <Typography variant="h6" className={classes.txt}>
        Ahmed M. Khallaf
      </Typography>
      <Divider className={classes.divider} />
      <div className={classes.txt}>
        <strong>Full-stack developer</strong>
        <Typography>
          A computer & control Engineering student, turning 22 years old, lives in Cairo & had humble experience with extra-curricular activities ending by AIESEC & TEDx.
        </Typography>
      </div>
      <Divider className={classes.divider}  />
      <div className={classes.txt}>
        <strong>Technologies</strong>
        <div>
          <em><u>Front-end</u></em>
          <ul>
            <li>HTML, CSS, Javascript & jQuery</li>
            <li>ReactJS & React Native</li>
            <li>Bootstrap, Material-UI & GraphQL</li>
          </ul>
        </div>
        <div>
          <em><u>Back-end</u></em>
          <ul>
            <li>NodeJS, PHP & Python</li>
            <li>MySQL & Firebase</li>
          </ul>
        </div>
        <div>
          <em><u>Others</u></em>
          <ul>
            <li>JAVA</li>
            <li>Git (Github & GitLab)</li>
            <li>AWS</li>
            <li>Agile Develop. (Jira)</li>

          </ul>
        </div>
      </div>
    </Box>
  )
}

Details.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Details);
