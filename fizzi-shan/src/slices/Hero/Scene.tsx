"use client";

import { Environment } from "@react-three/drei";
import FloatingCan from "@/components/FloatingCan";
import { Group } from "three";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type Props = {};

export default function Scene({}: Props) {
  const can1ref = useRef<Group>(null);
  const can2ref = useRef<Group>(null);
  const can3ref = useRef<Group>(null);
  const can4ref = useRef<Group>(null);
  const can5ref = useRef<Group>(null);

  const can1GroupRef = useRef<Group>(null);
  const can2GroupRef = useRef<Group>(null);

  const groupRef = useRef<Group>(null);

  const FLOAT_SPEED = 1.5;

  useGSAP(() => {
    if()
  });

  return (
    <group ref={groupRef}>
      <group ref={can1GroupRef}>
        <FloatingCan
          ref={can1ref}
          flavor="blackCherry"
          floatSpeed={FLOAT_SPEED}
        />
      </group>
      <group ref={can2GroupRef}>
        <FloatingCan
          ref={can2ref}
          flavor="lemonLime"
          floatSpeed={FLOAT_SPEED}
        />
      </group>
      <FloatingCan ref={can3ref} flavor="grape" floatSpeed={FLOAT_SPEED} />
      <FloatingCan
        ref={can4ref}
        flavor="strawberryLemonade"
        floatSpeed={FLOAT_SPEED}
      />
      <FloatingCan ref={can5ref} flavor="watermelon" floatSpeed={FLOAT_SPEED} />

      <Environment files="/hdr/lobby.hdr" environmentIntensity={1.5} />
    </group>
  );
}
