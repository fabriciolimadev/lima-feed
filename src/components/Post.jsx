import { Avatar } from './Avatar';
import { Comment } from './Comment';
import style from './Post.module.css';

export function Post(props) {
    
    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar src={props.avatar} hasBorder={true}/>
                    <div className={style.authorInfo}>
                        <strong>{props.name}</strong>
                        <span>{props.role}</span>
                    </div>
                    <time title='11 de Setembro ás 12:10' dateTime="2024-09-06 12:10:00" >Públicado há 1h</time>
                </div>
            </header>

                <div className={style.content}>
                    <p>Fala galeraa 👋</p>

                    <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                    <p>👉 <a href="#">jane.design/doctorcare</a></p>

                    <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>

                </div>
                <form className={style.commentForm}>
                    <strong>Deixe seu feedback</strong>
                    <textarea 
                    placeholder="Escreva um comentário..."
                    />
                    <footer>
                        <button type="submit">Comentar</button>
                    </footer>
                </form>

                <div className={style.commentList}>
                    <Comment avatar="https://github.com/maykbrito.png"/>
                </div>
        </article>
    );
}