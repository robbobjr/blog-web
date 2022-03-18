import { Fade, useDisclosure } from '@chakra-ui/react';
import { useCallback } from 'react';
import Picker from 'react-emojipicker'
import { RiEmotionFill } from 'react-icons/ri';
import { Icon } from '..';
import styles from './styles.module.scss';
import Draggable from 'react-draggable';

export function PickEmojiIcon({ handler }) {
  const { isOpen, onToggle } = useDisclosure()

  const handleEmojiClick = useCallback(async (emoji) => {
    console.log(emoji.unicode)
    handler(emoji.unicode);
  }, [handler]);

  if (!document) return null

  return (
    <button className={styles.button} type='button'>
      <Icon  as={RiEmotionFill}  onClick={onToggle} fontSize={22} color="purple.400" />
      <Fade in={isOpen}>
        <Draggable>
          <div className={styles.wrapper}>
            <div className={styles.container}>
              <Picker onEmojiSelected={handleEmojiClick}  />
            </div>
          </div>
        </Draggable>
      </Fade>
    </button>
  )
}