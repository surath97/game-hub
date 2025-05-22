import { Badge } from "@chakra-ui/react"

interface Props{
  score: number
}

function CriticScore({score}: Props) {

  let colorMode = score > 75 ? 'green' : score > 60 ? 'yellow' : score > 50 ? 'orange' : 'red';
  
  return (
    <span>
      <Badge colorPalette={colorMode} fontSize={'14px'} paddingX={2}>{score}</Badge>
    </span>
  )
}

export default CriticScore;