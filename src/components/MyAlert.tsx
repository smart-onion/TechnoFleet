import {Alert} from "@chakra-ui/react";
import {MotionBox} from "@/components/MotionBox.tsx";
import {useEffect} from "react";

type StatusType = "info" | "warning" | "success" | "error" | "neutral" | undefined

type MyAlertProps = {
    status: StatusType;
    message: string;
}

export function MyAlert({status, message}: MyAlertProps) {
    useEffect(() => {

        }
        , []
    )
    return (
        <MotionBox position={"fixedx"} top={0}
                   initial={{right: 100}}
                   animate={{right: 0}}
        >
            <Alert.Root status={status}>
                <Alert.Indicator/>
                <Alert.Title>{message}</Alert.Title>
            </Alert.Root>
        </MotionBox>
    )
}