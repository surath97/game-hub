import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {

  const { data, error, isLoading } = useTrailers(gameId);
  console.log(data);

  if (isLoading) return null;

  if (error) throw error;

  if(!data?.results[0]) return null;

  return (
    <video
      src={data?.results[0].data[480]}
      poster={data?.results[0].preview}
      controls
      loop
    >
      Sorry.. This video is not supported in your browser
    </video>
  );
};

export default GameTrailer;
