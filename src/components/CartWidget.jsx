import React from "react";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import { GrCart } from "react-icons/gr";

const CartWidget = () => {
  return (
    <Flex>
      <Box p="2">
        <GrCart />
      </Box>

      <Box p="2">
        <p>3</p>
      </Box>
    </Flex>
  );
};

export default CartWidget;
