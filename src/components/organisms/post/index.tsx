import { useCallback, useMemo } from "react";
import { RatesService } from "../../../services/api/openapi";
import { useAuth } from "../../../states/hooks/use-auth";
import { PostContainer } from "../../atoms/containers/post-container";
import { PostContent } from "../../molecules/contents/post-content";
import { PostContentPreview } from "../../molecules/post-content-preview";
import { PostRateControls } from "../../molecules/controls/post-rate-controls";
import { PostFooter } from "../../molecules/footers/post-footer";
import { PostHeader } from "../../molecules/headers/post-header";
import { PostProps } from "./post.type";

export function Post({ 
  containerProps,
  isPostPreview,
  data: post,
}: PostProps) {
  const session = useAuth();

  const {
    id,
    tags,
  } = useMemo(() => post, [post]);

  const handlePostRate = useCallback(async (value: number) => {
    return RatesService.postRatesControllerCreate({
      postId: id,
      userId: session.data?.user?.id,
      value,
    });
  }, [id, session]);

  const Aside = useMemo(() => 
    <PostRateControls 
      data={{ rates: post.rates }} 
      handleRate={handlePostRate} 
      hideRateControl={!isPostPreview}
      size="md"
    />
  ,[post.rates, handlePostRate, isPostPreview]);

  const PostContentByContext = useMemo(() => 
    isPostPreview 
      ? PostContentPreview 
      : PostContent,
    [isPostPreview],
  );

  return (
    <PostContainer size="md" {...containerProps} rightSide={Aside}>
      <PostHeader isPostPreview={isPostPreview} data={post}/>
      <PostContentByContext data={post} />
      <PostFooter data={{ id: post.id, commentsLength: post.comments.length, tags }}/>
    </PostContainer>
  );
}