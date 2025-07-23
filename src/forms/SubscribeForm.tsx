import {Box, type BoxProps, Button, Field, Input, Stack} from "@chakra-ui/react";
import {useForm} from "react-hook-form";
import basePath from "@/data/api.ts";
import {bgColors, textColors} from "@/theme/main-colors.ts";
import {MyAlert} from "@/components/MyAlert.tsx";

type SubscribeFormType = {
    email: string
}

export function SubscribeForm({...props}: BoxProps) {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        reset,
        setError
    } = useForm<SubscribeFormType>();

    const onSubmit = async (data: SubscribeFormType) => {
        // sending data to .net server
        try {
            const request = await fetch(basePath + "api/subscriber/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
            });
            if (!request.ok) {
                const result = await request.json();

                setError("root.serverError", {
                    type: "error",
                    message: result.error || "Something went wrong"
                })
            } else {
                reset();
            }
        } catch (err) {
            console.log(err)
            setError("root.serverError", {
                type: "network",
                message: "Network error. Please try again later."
            })
        }
    }

    return (
        <Box {...props} justifyItems="end" w={{base:"80%",md:"100%"}}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {errors.root?.serverError && (
                   <MyAlert status={"error"} message={`${errors.root?.serverError.message}`}/>
                )}
                {/* Email  */}
                <Stack direction={{base: "column", md: "row"}} w={{base: "full", md: "md"}}>
                    <Field.Root invalid={!!errors.email} _focus={{transform: "none"}}>
                        <Input
                            _placeholder={{color: textColors.main}}
                            borderColor={textColors.main}
                            placeholder={"Email address"}
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Please enter a valid email address"
                                }
                            })} />
                        <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
                    </Field.Root>
                    <Button colorPalette={"white"}

                            variant="surface"
                            bg={bgColors.main}
                            borderColor={textColors.main}
                            loading={isSubmitting}
                            type="submit"
                    >
                        Subscribe
                    </Button>
                </Stack>
            </form>
        </Box>
    )
}