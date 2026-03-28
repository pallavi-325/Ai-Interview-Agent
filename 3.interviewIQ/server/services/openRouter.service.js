import axios from "axios"

function openRouterErrorMessage(error) {
    const data = error.response?.data
    if (data?.error?.message) return data.error.message
    if (typeof data?.error === "string") return data.error
    if (error.response?.status === 401 || error.response?.status === 403) {
        return "OpenRouter rejected the API key. Set OPENROUTER_API_KEY in server/.env (https://openrouter.ai/keys)."
    }
    if (error.message) return error.message
    return "OpenRouter request failed."
}

export const askAi = async (messages) => {
    try {
        if (!messages || !Array.isArray(messages) || messages.length === 0) {
            throw new Error("Messages array is empty.")
        }
        const key = process.env.OPENROUTER_API_KEY?.trim()
        if (!key || key === "dummy" || key === "dummy_key") {
            throw new Error(
                "OPENROUTER_API_KEY is not set to a real key. Add one from https://openrouter.ai/keys or the server will use built-in demo questions when configured."
            )
        }

        const response = await axios.post(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                model: "openai/gpt-4o-mini",
                messages,
            },
            {
                headers: {
                    Authorization: `Bearer ${key}`,
                    "Content-Type": "application/json",
                },
            }
        )

        const content = response?.data?.choices?.[0]?.message?.content

        if (!content || !content.trim()) {
            throw new Error("AI returned empty response.")
        }

        return content
    } catch (error) {
        console.error("OpenRouter Error:", error.response?.data || error.message)
        throw new Error(openRouterErrorMessage(error))
    }
}