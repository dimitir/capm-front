import React from 'react';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { PropsTypesModalSingAll } from './ContainerModalsCreator';

import style from './styleModalCreator.scss';
import modalNamesList from '../../store/modals/modalNamesList';
import env from '../../env';
import queryString from 'query-string';
import googleLoginUrl from '../authFront/googleAuth/googleLoginUrl';
import { google } from 'googleapis';
import { useLocation } from 'react-router-dom';
import SingAll from './_SingAll';

const ModalSingUpAll: React.FC<PropsTypesModalSingAll> = ({ open, handleClose, handleShowModal }: PropsTypesModalSingAll) => {
    // const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

    /*  const location = useLocation();
     console.log(location); */


    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={style.modal}
                open={open}
                onClose={() => handleClose()}
                disableAutoFocus={true}
                disableEnforceFocus={true}
                BackdropProps={{
                    timeout: 100,
                    style: {
                        backgroundColor: 'rgba(255, 255, 255, 0.8)'
                    }
                }}
            >
                <Fade in={open}>
                    <div className={style.paper}>
                        <h2 id="transition-modal-title">Go to adventure</h2>
                        <p id="transition-modal-description" className={style.descriptionTitle} >react-transition-group animates me.</p>

                        <SingAll handleShowModal={handleShowModal} />
                        <p className={style.questionSingIn}>Already have an account?
                        <Link
                                onClick={() => handleShowModal(modalNamesList.SING_IN_ALL)}
                                className={style.linkToSing}>
                                Sign in
                        </Link> </p>
                    </div>
                </Fade>
            </Modal>
        </>
    );
}


export default ModalSingUpAll;