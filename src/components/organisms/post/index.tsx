import { useCallback, useMemo } from "react";
import { RatesService } from "../../../services/api/openapi";
import { useAuth } from "../../../states/hooks/use-auth";
import { PostContainer } from "../../molecules/containers/post-container";
import { PostContent } from "../../molecules/contents/post-content";
import { PostPreviewContent } from "../../molecules/contents/post-preview-content";
import { PostRateControls } from "../../molecules/controls/post-rate-controls";
import { PostFooter } from "../../molecules/footers/post-footer";
import { PostTagsFooter } from "../../molecules/footers/post-tags-footer";
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
      ? PostPreviewContent 
      : PostContent,
    [isPostPreview],
  );

  return (
    <PostContainer size="md" {...containerProps} rightSide={Aside}>
      <PostHeader isPostPreview={isPostPreview} data={post}/>
      <PostContentByContext data={post} />
      <PostFooter data={{ id: post.id, commentsLength: post.comments.length }}/>
      <PostTagsFooter data={{ tags }} />
    </PostContainer>
  );
}