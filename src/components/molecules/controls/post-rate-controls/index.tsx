import { Icon, Stack, Text, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import { RatesService } from "../../../../services/api/openapi";
import { logger } from "../../../../services/logger";
import { useAuth } from "../../../../states/hooks/use-auth";
import { simpleHover } from "../../../../styles/theme";
import { createPostRateErrorToast } from "../../../../utils/toast";
import { RateValue } from "./post-rate-controls.enum";
import { PostRateControlsProps } from "./post-rate-controls.type";

export function PostRateControls({ 
  handleRate,
  data: { postId, commentId },
  hideRateControl,
  isDislikeEnabled,
  isBorderLeft,
  size, 
}: PostRateControlsProps) {
  const { data } = useAuth();
  const router = useRouter();
  const toast = useToast();

  const [rateData, setRateData] = useState([]);
  const [rateSum, setRateSum] = useState(0);
  const [userVote, setUserVote] = useState<undefined | RateValue>();  
  const [dislikePosition, setDislikePosition] = useState({});

  const changeDislikePosition = useCallback(() => {
    if (isDislikeEnabled) return;
    setDislikePosition(state => !Object.keys(state).length ? {
      height: '80%',
    } : {});
  }, [isDislikeEnabled]);

  useEffect(() => {
    // TODO: Refactor this block
    (async () => {
      let rateData: any[];
      if (postId) rateData = await RatesService.postsControllerFindAllPostRate(`${postId}`);
      if (commentId) rateData = await RatesService.postsControllerFindAllCommentRate(`${commentId}`);
      const sum = [...rateData].reduce((a, b) => a + b.value, 0);
      const rateI = [...rateData].findIndex(rate => rate.userId === data?.user?.id);
      if (rateI >= 0) setUserVote(rateData[rateI].value);
      setRateSum(sum);
      setRateData(rateData);
    })();
  },[commentId, data, postId]);
  
  const handlePostRate = useCallback(async (value: number) => {
    if (!data) return router.push('/login');
    if (userVote && userVote === value) return; 
    setUserVote(value);
    try {
      await handleRate(value);
      const newRate = [...rateData];
      
      if (userVote) {
        newRate[
          newRate.findIndex(r => r.userId === data?.user?.id)
        ].value = value;
      } else {
        newRate.push({ value, userId: data?.user?.id });
      }

      setRateData(newRate as any);
    } catch (error) {
      toast(createPostRateErrorToast);
      logger.error({ error, context: "PostRateControls" });
    }
  }, [data, router, userVote, handleRate, rateData, toast]);

  const counterSize = useMemo(() => {
    const sizeValues = {
      md: {
        iconSize: 28,
        textSize: 'md',
        iconsSpacing: 2,
        minH: 32,
      },
      sm: {
        iconSize: 20,
        textSize: 'sm',
        iconsSpacing: 0.1,
        minH: 24,
      }
    }

    return sizeValues[size];
  }, [size]);

  return (
    <Stack 
      display={{ base: "none", sm: 'none', md: hideRateControl ? 'none': 'inherit' }}
      spacing={counterSize.iconsSpacing}
      borderRightWidth={isBorderLeft ? 0 : 1} 
      borderRightColor="gray.700" 
      minW="14"
      maxW="14" 
      align="center" 
      justify="center"
      pr={isBorderLeft ? 0 : "4"}
      pl={isBorderLeft ? "4" : 0}
      ml={isBorderLeft ? "auto" : 0}
      onMouseLeave={() => setDislikePosition({})}
    >
      <Icon 
        transition="0.2s"
        as={AiOutlineCaretUp} 
        fontSize={counterSize.iconSize} 
        color={userVote === RateValue.UP ? "pink.400" : "gray.600"} 
        _hover={simpleHover}
        onClick={() => handlePostRate(RateValue.UP)}
        {...dislikePosition}
      />
      <Text
        fontSize={counterSize.textSize}
        fontWeight="medium"
        color="pink.400"
      >
        {rateSum}
      </Text>
      <Icon 
        transition="0.2s"
        as={AiOutlineCaretDown} 
        fontSize={counterSize.iconSize} 
        _hover={simpleHover}
        onMouseEnter={changeDislikePosition}
        color={userVote === RateValue.DOWN ? "pink.400" : "gray.600"} 
        onClick={() => handlePostRate(RateValue.DOWN)}
      />
    </Stack>
  );
}