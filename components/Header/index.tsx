import React from 'react';
import Link from 'next/link';
import {
    Paper,
    Button,
    IconButton,
    Avatar,
} from '@material-ui/core';
import {
    SearchOutlined as SearchIcon,
    SmsOutlined as MessageIcon,
    ExpandMoreOutlined as ArrowBottom,
    NotificationsNoneOutlined as NotificationIcon,
} from '@material-ui/icons';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import styles from './Header.module.scss';
import {AuthDialog} from "../AuthDialog";
import {useAppSelector} from "../../redux/hooks";
import {selectUserData} from "../../redux/slices/user";

export const Header: React.FC = () => {
    const userData = useAppSelector(selectUserData)
    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    //Закрываем окно после того как усер авторизовался
    React.useEffect(() => {
        if(open && userData) {
            setOpen(false)
        }
    }, [open, userData])

    return (
        <Paper classes={{root: styles.root}} elevation={0}>
            <div className="d-flex align-center">
                <IconButton>
                </IconButton>
                <Link href="/">
                    <a>
                        <img height={35} className="mr-20" src="/static/img/logo.svg" alt="Logo"/>
                    </a>
                </Link>

                <div className={styles.searchBlock}>
                    <SearchIcon/>
                    <input placeholder="Поиск"/>
                </div>

                <Link href={'/write/'}>
                    <Button variant="contained" className={styles.penButton}>
                        Новая запись
                    </Button>
                </Link>
            </div>
            <div className="d-flex align-center">
                <IconButton>
                    <MessageIcon/>
                </IconButton>
                <IconButton>
                    <NotificationIcon/>
                </IconButton>
                {
                    userData
                        ? <Link href="/profile/1">
                            <a className="d-flex align-center">
                                <Avatar
                                    className={styles.avatar}
                                    alt="Remy Sharp"
                                    src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
                                />
                                <ArrowBottom/>
                            </a>
                        </Link>
                        : <div onClick={handleClickOpen} className={styles.loginButton}>
                            <AccountCircleIcon/>
                            Войти
                        </div>
                }


            </div>
            <AuthDialog setOpen={setOpen} open={open}/>
        </Paper>
    );
};
