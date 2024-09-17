import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar  hasBorder={false}/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Fabrício Lima</strong>
                            <time title='11 de Setembro ás 12:10' dateTime="2024-09-06 12:10:00" >Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito bom Fabrício, parabéns!!👏👏</p>
                </div>
                <footer>
                    <button>
                    <ThumbsUp/>
                    Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}