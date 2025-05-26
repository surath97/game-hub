import { Badge } from "@chakra-ui/react"

interface Props{
  score: number | null
}

function CriticScore({score}: Props) {

  let colorMode = score !== null ? (score > 75 ? 'green' : score > 60 ? 'yellow' : score > 50 ? 'orange' : 'red') : 'red';
  
  return (
    <span>
      <Badge colorPalette={colorMode} fontSize={'14px'} paddingX={2}>{score !== null ? score : 'N/A'}</Badge>
    </span>
  )
}

export default CriticScore;