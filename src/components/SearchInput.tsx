import { Input, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";


function SearchInput() {
  
  return (
    <InputGroup startElement={<BsSearch/>}>
      <Input borderRadius='4xl' variant='subtle' placeholder='Search Games...' />
    </InputGroup>
  )
}

export default SearchInput;