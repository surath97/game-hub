import bullsEye from '../assets/bulls-eye.webp';
import thumbsUp from '../assets/thumbs-up.webp';
import meh from '../assets/meh.webp';
import { Image, type ImageProps } from '@chakra-ui/react';

interface Props {
  rating: number;
}


function Emoji({rating}: Props) {

  if(rating < 3) return null;

  const emojiMap: { [key:number]: ImageProps } = {
    3 : {src: meh, alt: 'meh', boxSize: '20px'},
    4 : {src: thumbsUp, alt: 'recommended', boxSize: '20px'},
    5 : {src: bullsEye, alt: 'exceptional', boxSize: '25px'}
  }
  
  return (
    <Image {...emojiMap[rating]} marginTop={1} />
  )

}

export default Emoji;