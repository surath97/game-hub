import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSerach: (searchText: string) => void;
}


function SearchInput({onSerach}: Props) {
  
  const inputRef = useRef<HTMLInputElement>(null);

  return (

    <form onSubmit={(event) => {
      event.preventDefault();
      if(inputRef.current) onSerach(inputRef.current.value);
    }}>
      <InputGroup startElement={<BsSearch/>}>
        <Input ref={inputRef} borderRadius='4xl' variant='subtle' placeholder='Search Games...' />
      </InputGroup>
    </form>
  )
}

export default SearchInput;