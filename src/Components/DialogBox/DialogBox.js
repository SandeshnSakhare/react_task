import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function DialogBox({ openModal, toggleModal, headTitle, ...props }) {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
        toggleModal();
    };

    useEffect(() => {
        if (openModal) {
            setOpen(true);
        }
    }, [openModal])

    return (
        <div>
            <div>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title"><b>{headTitle}</b></DialogTitle>
                    <DialogContent>
                        {props.children}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Close
          </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    )
}

export default DialogBox;