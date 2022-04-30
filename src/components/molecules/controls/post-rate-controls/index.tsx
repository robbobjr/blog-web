import { Icon, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import { logger } from "../../../../services/logger";
import { userAuth } from "../../../../states/hooks/use-auth";
import { simpleHover } from "../../../../styles/theme";
import { RateValue } from "./post-rate-controls.enum";
import { PostRateControlsProps } from "./post-rate-controls.type";

export function PostRateControls({ 
  handleRate,
  data: { rates }, 
  hideRateControl,
  isBorderLeft,
  size, 
}: PostRateControlsProps) {
  const { data } = userAuth();
  const router = useRouter();

  const [rateData, setRateDate] = useState(rates);
  const [rateSum, setRateSum] = useState(0);
  const [userVote, setUserVote] = useState<undefined | RateValue>();

  useEffect(() => {
    const sum = [...rateData].reduce((a, b) => a + b.value, 0);
    const rateI = [...rateData].findIndex(rate => rate.userId === data?.user.id);
    if (rateI >= 0) setUserVote(rateData[rateI].value);
    setRateSum(sum);
  },[data?.user.id, rateData]);
  
  const handlePostRate = useCallback(async (value: number) => {
    if (!data) return router.push('/login');
    if (userVote && userVote === value) return; 

    try {
      const rate = await handleRate(value);
      const newRate = [...rateData];
      
      if (userVote) {
        newRate[
          newRate.findIndex(r => r.userId === data?.user?.id)
        ].value = value;
      } else {
        newRate.push(rate);
      }

      setRateDate(newRate as any);
    } catch (error) {
      logger.error({ error, context: "PostRateControls" });
    }
  }, [data, router, userVote, handleRate, rateData]);

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
      display={['none', hideRateControl ? 'none': 'inherit' ]}
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
    >
      <Icon 
        as={AiOutlineCaretUp} 
        fontSize={counterSize.iconSize} 
        color={userVote === RateValue.UP ? "pink.400" : "gray.600"} 
        _hover={simpleHover}
        onClick={() => handlePostRate(RateValue.UP)}
      />
      <Text
        fontSize={counterSize.textSize}
        fontWeight="medium"
        color="pink.400"
      >
        {rateSum}
      </Text>
      <Icon 
        as={AiOutlineCaretDown} 
        fontSize={counterSize.iconSize} 
        color={userVote === RateValue.DOWN ? "pink.400" : "gray.600"} 
        _hover={simpleHover}
        onClick={() => handlePostRate(RateValue.DOWN)}
      />
    </Stack>
  );
}