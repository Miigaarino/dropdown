import React, { useState } from 'react'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import data from '../data/data'
import Typography from '@material-ui/core/Typography'

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
})

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant='h6'>{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label='close'
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent)

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions)

const DialogAfter = ({ state }) => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = (e) => {
    setOpen(false)
  }

  console.log('1')
  return (
    <>
      <Button
        variant='contained'
        styles={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
        onClick={handleClickOpen}
      >
        Илгээх
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
      >
        <DialogTitle id='customized-dialog-title' onClose={handleClose}>
          Таны илгээж буй мэдээллүүд:
        </DialogTitle>
        <DialogContent dividers>
          <p>{state.firstName != null ? state.firstName : null}</p>
          <p>{state.lastName != null ? state.lastName : null}</p>
          <p>{state.idNumber != null ? state.idNumber : null}</p>
          <p>{state.birthday != null ? state.birthday : null}</p>
          <p>{state.addressDetails != null ? state.addressDetails : null}</p>
          <p>{state.email != null ? state.email : null}</p>

          <p>{state.aimagKhot != null ? data[state.aimagKhot].label : null}</p>
          <p>
            {state.sumDuureg != null
              ? data[state.aimagKhot].sumDuurguud[state.sumDuureg].label
              : null}
          </p>
          <p>
            {state.bagKhoroo != null
              ? data[state.aimagKhot].sumDuurguud[state.sumDuureg].bagKhorood[
                  state.bagKhoroo
                ].label
              : null}
          </p>
        </DialogContent>
        <DialogActions>
          <form action='/thanks'>
            <Button
              autoFocus
              type='submit'
              onClick={handleClose}
              color='primary'
            >
              Илгээх
            </Button>
          </form>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DialogAfter
