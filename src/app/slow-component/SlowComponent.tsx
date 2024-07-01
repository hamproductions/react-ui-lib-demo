"use client"

import { Text } from "components/ui/text";
import { use } from "react";

const makeDelay = () => Math.round(Math.random()* 9999);

export const SlowComponentUse = () => {
    const delay = makeDelay();
    const message = use(new Promise<string>((resolve) => setTimeout(() => resolve(`"Hello World" ${delay}`), delay) ));
    return <Text>{message}</Text>
}
