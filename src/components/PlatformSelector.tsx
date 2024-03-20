import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import usePlaftorms, { Platform } from "../hooks/usePlaftorms"
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectPlatform: (platform: Platform) => void,
  selectedPlatform: Platform | null
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlaftorms()

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data.map(platform => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform)}
          >{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default PlatformSelector
