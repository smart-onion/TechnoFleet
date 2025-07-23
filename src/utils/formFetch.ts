import basePath from "@/data/api.ts";
import type {DefaultValues, ErrorOption, KeepStateOptions} from "react-hook-form";

type setError = (name: ("root" | "email" | "firstName" | "lastName" | "phone" | "subject" | "message" | `root.${string}`), error: ErrorOption, options?: {
    shouldFocus: boolean
}) => void

type reset<T> = (values?: (DefaultValues<T>  | T), keepStateOptions?: KeepStateOptions) => void

export async function formFetch<T>(data: T, path: string, setError: setError, reset: reset<T>): Promise<void> {
    // sending data to .net server
    try {
        const request = await fetch(basePath + `api/${path}`, {
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