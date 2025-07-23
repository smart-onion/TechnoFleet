import type {ContactType} from "@/data/types.ts";
import basePath from "@/data/api.ts";
import {useForm} from "react-hook-form";
import  {Box, type BoxProps, Button, Field, Grid, GridItem, Input, Textarea} from "@chakra-ui/react";
import {MyAlert} from "@/components/MyAlert.tsx";

type ContactFormProps = BoxProps & {}

export function ContactForm({...props}: ContactFormProps) {
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        reset,
        setError
    } = useForm<ContactType>();

    const onSubmit = async (data: ContactType) => {
        // sending data to .net server
        try {
            const request = await fetch(basePath + "api/Contact/GetMessage", {
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
        <Box {...props}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {errors.root?.serverError && (
                    <MyAlert title={errors.root?.serverError.type} message={errors.root?.serverError.message}
                             status={"error"}/>
                )}
                <Grid templateColumns={{base: "repeat(1,1fr)", md: "repeat(2,1fr)"}} gapX={6}>
                    {/* First name */}
                    <Field.Root invalid={!!errors.firstName}>
                        <Field.Label>First Name</Field.Label>
                        <Input {...register("firstName", {
                            required: "First Name is required"
                        })} />
                        <Field.ErrorText>{errors.firstName?.message}</Field.ErrorText>
                    </Field.Root>

                    {/* Last name */}
                    <Field.Root invalid={!!errors.lastName}>
                        <Field.Label>Last Name</Field.Label>
                        <Input {...register("lastName", {
                            required: "Last Name is required"
                        })} />
                        <Field.ErrorText>{errors.lastName?.message}</Field.ErrorText>
                    </Field.Root>

                    {/* Email  */}
                    <Field.Root invalid={!!errors.email}>
                        <Field.Label>Email</Field.Label>
                        <Input {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Please enter a valid email address"
                            }
                        })} />
                        <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
                    </Field.Root>

                    {/* Phone  */}
                    <Field.Root invalid={!!errors.phone}>
                        <Field.Label>Phone</Field.Label>
                        <Input {...register("phone", {
                            required: "Phone number is required",
                            pattern: {
                                value: /^\+?[0-9\s\-()]{7,20}$/,
                                message: "Invalid phone number format",
                            }
                        })} />
                        <Field.ErrorText>{errors.phone?.message}</Field.ErrorText>
                    </Field.Root>

                    {/* Subject  */}
                    <GridItem colSpan={{base: 1, md: 2}}>
                        <Field.Root invalid={!!errors.subject}>
                            <Field.Label>Subject</Field.Label>
                            <Input {...register("subject", {
                                required: "Subject is required",
                            })} />
                            <Field.ErrorText>{errors.subject?.message}</Field.ErrorText>
                        </Field.Root>
                    </GridItem>

                    {/* Message  */}
                    <GridItem colSpan={{base: 1, md: 2}}>
                        <Field.Root invalid={!!errors.message}>
                            <Field.Label>Message</Field.Label>
                            <Textarea {...register("message", {
                                required: "Message is required",
                            })} />
                            <Field.ErrorText>{errors.message?.message}</Field.ErrorText>
                        </Field.Root>
                    </GridItem>

                    <GridItem colSpan={{base: 1, md: 2}} px={{base: 0, md: 12}} my={2}>
                        <Button type={"submit"} loading={isSubmitting} w={"full"}>Submit</Button>
                    </GridItem>
                </Grid>

            </form>
        </Box>
    );
}