import {useState, useEffect} from 'react';
import {Alert, CloseButton, Box, Portal} from '@chakra-ui/react';
import {AnimatePresence} from 'framer-motion';
import {MotionBox} from "@/components/MotionBox.tsx";

type StatusType = "info" | "warning" | "success" | "error" | "neutral" | undefined;

export function MyAlert({status, message, title}: { status: StatusType, message?: string, title?: string | number }) {
    const [showAlert, setShowAlert] = useState(true);

    useEffect(() => {
        if (showAlert) {
            const timer = setTimeout(() => {
                setShowAlert(false);
            }, 50000); // Auto-close after 5 seconds
            return () => clearTimeout(timer); // Cleanup to prevent memory leaks
        }
    }, [showAlert]);

    return (
        <Portal>
            <Box display="block" position={"fixed"} top={20} zIndex={1001} right={2}>
                <AnimatePresence>
                    {showAlert && (
                        <MotionBox
                            initial={{opacity: 0, x: 100}}
                            animate={{opacity: 1, x: 0}}
                            exit={{opacity: 0, scale: 0.9}}
                            transition={{duration: 0.5}}
                        >
                            <Alert.Root status={status}>
                                <Alert.Indicator/>
                                <Alert.Content>
                                    <Alert.Title>{title}</Alert.Title>
                                    <Alert.Description>{message}</Alert.Description>
                                </Alert.Content>
                                <CloseButton pos="relative" top="-2" insetEnd="-2" onClick={() => setShowAlert(false)}/>
                            </Alert.Root>
                        </MotionBox>
                    )}
                </AnimatePresence>
            </Box>
        </Portal>
    );
}

