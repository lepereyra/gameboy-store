import React from "react";

import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Flex,
  Box,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" p="5">
      <Box>
        <Heading size="md">GameBoy Store</Heading>
      </Box>
      <Spacer />
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Menu
        </MenuButton>
        <MenuList>
          <MenuItem>GB</MenuItem>
          <MenuItem>GB Color</MenuItem>
          <MenuItem>GBA</MenuItem>
          <MenuItem>GBA SP</MenuItem>
          <MenuItem>NDS</MenuItem>
        </MenuList>
      </Menu>
      <Spacer />
      <CartWidget />
    </Flex>
  );
};

export default NavBar;
