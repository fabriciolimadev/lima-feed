import { useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import style from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

// Data formatada
export function Post({ name, role, avatar, content, publishedAt }) {
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'ás' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  //Gera a data comparando a data de agora.
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const [newCommentText, setNewCommentText] = useState("");

  function handleNewCommentChange() {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleCreateNewComment(event) {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  const [comments, setComments] = useState([
    "Nosso post muito bacana",
    "Meus parabens, sucesso!",
    "Oloco meu, que post top!",
    "Genial, parabéns!",
  ]);

  function handleNewCommentInvalid() {
    event.target.setCustomValidity("Seu comentário não pode estar vazio");
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    console.log(commentToDelete);

    setComments(commentsWithoutDeletedOne);
  }
  const isNewCommentTextEmpty = newCommentText.length === 0;
  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <Avatar src={avatar} hasBorder={true} />
          <div className={style.authorInfo}>
            <strong>{name}</strong>
            <span>{role}</span>
          </div>
          <time
            title={publishedDateFormatted}
            dateTime={publishedAt.toISOString()}
          >
            {publishedDateRelativeToNow}
          </time>
        </div>
      </header>

      <div className={style.content}>
        {content.map((item) => {
          if (item.type === "paragraph") {
            return (
              <>
                <p key={item.content}>{item.content}</p>{" "}
              </>
            );
          } else if (item.type === "link") {
            return (
              <>
                <a key={item.content} href="#">
                  {item.content}
                </a>{" "}
              </>
            );
          }
          return null; // Ensure a return value for other cases
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={style.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Escreva um comentário..."
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentTextEmpty}>Comentar</button>
        </footer>
      </form>

      <div className={style.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
              avatar={
                "https://media.licdn.com/dms/image/v2/D4D03AQGe7IjV2jfYIg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724613242933?e=1732147200&v=beta&t=hk2e8YQ9R9Di4i_4P5FmZMmy_F99jR2sNc9MiRzK-4k"
              }
            />
          );
        })}
      </div>
    </article>
  );
}
