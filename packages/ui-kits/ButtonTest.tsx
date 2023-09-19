import * as React from 'react';
import {Button} from "@chakra-ui/react"

export function ButtonTest(props: any) {
  return <Button>{props.children}</Button>;
}

export default ButtonTest;