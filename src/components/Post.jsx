import { useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import style from './Post.module.css';
import { format , formatDistanceToNow} from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';



// Data formatada
export function Post({name, role, avatar, content, publishedAt}) {
    const publishedDateFormatted = format(publishedAt,"d 'de' LLLL 'ás' HH:mm'h'",{
        locale: ptBR
    })

    //Gera a data comparando a data de agora.
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })
    
    function handleCreateNewComment(event) {
        event.preventDefault();
        setComments([...comments, comments.length + 1]);
        console.log(event);
    }

    const [comments, setComments] = useState([
        1,
        2
    ])

    return (
        
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar src={avatar} hasBorder={true}/>
                    <div className={style.authorInfo}>
                        <strong>{name}</strong>
                        <span>{role}</span>
                    </div>
                    <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()} >{publishedDateRelativeToNow}</time>
                </div>
            </header>

                <div className={style.content}>
                {content.map((item) => {
                    if(item.type === 'paragraph') {
                        return <><p key={item.content}>{item.content}</p> </>
                    } else if(item.type === 'link') {
                        return <><a key={item.content} href="#">{item.content}</a> </>
                    }
                    return null; // Ensure a return value for other cases
                })}
                </div>

                <form onSubmit={handleCreateNewComment} className={style.commentForm}>
                    <strong>Deixe seu feedback</strong>
                    <textarea 
                    name='comment'
                    placeholder="Escreva um comentário..."
                    />
                    <footer>
                        <button type="submit">Comentar</button>
                    </footer>
                </form>

                <div className={style.commentList}>
                    {comments.map(comment => {
                        return <Comment key={comment}/>
                    })}
                </div>
        </article>
    );
}