import React from 'react';
import { makeStyles, Typography, Grid, Modal, IconButton, Backdrop, Grow } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 300
    },
    paper: {
      flexBasis: 'content',
      maxWidth: 400,
      color: '#403B3B',
      backgroundColor: theme.palette.background.paper,
      borderRadius: 10,
      boxShadow: theme.shadows[5],
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%', 
      marginBottom: 10,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      background: '#f50057',
    },
    textHeader: {
      marginLeft: 40,
      color: '#fff',
    },
    body: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    },
  }));

const ModalHouse = ({open, handleClose, houses}) => {
    const classes = useStyles();

    return (  
        <Modal
        className={classes.modal}
        open={open}
        onClose={() => handleClose()}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      > 
        <Grow in={open}>
          <Grid 
              container 
              item
              xs={12} 
              className={classes.paper}
              direction='column'
          >
              <div className={classes.header}>
                  <Typography variant="h5" className={classes.textHeader}>
                      Casas
                  </Typography>
                  <IconButton
                    onClick={() => handleClose()}
                  >
                      <CloseIcon/>
                  </IconButton>
              </div>
              <div className={classes.body}>
                  {houses.map((house) => (
                      <div>
                          <Typography>
                              {`Descripcion: ${house.description}`}
                          </Typography>
                          <Typography>
                              {`Direccion: ${house.address}`}
                          </Typography>
                      </div>    
                  ))}      
              </div>
          </Grid>
        </Grow>
      </Modal>   
    );
}
 
export default ModalHouse;