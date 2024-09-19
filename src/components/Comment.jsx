import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { useState } from "react";

export function Comment({content, avatar, onDeleteComment}) {
    const [likeCount, setLikeCount] = useState(0);
    function handleDeleteComment() {
        
        onDeleteComment(content);
    }

    function handleLike() {
        setLikeCount(likeCount + 1);
    }

    return (
        <div className={styles.comment}>
            <Avatar src={avatar} hasBorder={false}/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Fabrício Lima</strong>
                            <time title='11 de Setembro ás 12:10' dateTime="2024-09-06 12:10:00" >Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLike}>
                    <ThumbsUp/>
                    Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}