import * as React from 'react';

export function ButtonTest(props: any) {
  return <button  onClick={() => props.onClick()}>{props.children}</button>;
}

export default ButtonTest;