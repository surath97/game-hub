import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";


function SearchInput() {
  
  const inputRef = useRef<HTMLInputElement>(null);

  const setSearchText = useGameQueryStore(s => s.setSearchText);

  const navigate = useNavigate();

  return (

    <form onSubmit={(event) => {
      event.preventDefault();

      if(inputRef.current){
        setSearchText(inputRef.current.value);
        navigate('/');
      };
    }}>
      <InputGroup startElement={<BsSearch/>}>
        <Input ref={inputRef} borderRadius='4xl' variant='subtle' placeholder='Search Games...' />
      </InputGroup>
    </form>
  )
}

export default SearchInput;