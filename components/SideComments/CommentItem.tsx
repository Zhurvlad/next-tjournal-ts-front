import React from "react";
import styles from "./SideComments.module.scss";
import Link from "next/link";
import {PostDto, ResponseCreateUser} from "../../utils/api/types";
import {Avatar} from "@material-ui/core";

interface CommentItemProps {
    user: ResponseCreateUser;
    text: string;
    post: PostDto;
}

export const CommentItem: React.FC<CommentItemProps> = ({user, text, post}) => {


    return (
        <div className={styles.commentItem}>
            <div className={styles.userInfo}>
                <Avatar style={{marginRight: 10}}>{user.fullName[0]}</Avatar>
                <Link href={`/profile/${user.id}`}>
                    <b>{user.fullName}</b>
                </Link>
            </div>
            <p className={styles.text}>{text}</p>
            <Link href={`/news/${post.id}`}>
                <span className={styles.postTitle}>{post.title}</span>
            </Link>
        </div>
    );
};