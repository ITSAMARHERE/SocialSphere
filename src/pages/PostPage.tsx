import { useParams } from "react-router-dom";
import { PostDetail } from "../components/PostDetail";

export const PostPage = () => {
  const { id } = useParams<{ id: string }>();
  console.log("Post ID from route:", id); 

  return (
    <div className="pt-20">
      <PostDetail postId={Number(id)} />
    </div>
  );
};
