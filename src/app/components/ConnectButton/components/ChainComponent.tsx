"use client";
import { NetworkSelectorProps } from "thirdweb/react";
export default function ChainComponent(props: any) {
  return (
    <button>
      name: {props.chain.name} id: {props.chain.id}
    </button>
  );
}
