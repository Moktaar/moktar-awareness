export function getMoktarAIResponse(input) {
  const text = input.trim().toLowerCase();

  // Mythic responses
  if (text.includes("yaa ku abuuray") || text.includes("who created you")) {
    return "MoktarAI waxaa abuuray Moktarweb Academy 😤.";
  }

  if (text.includes("allah")) {
    return "Waa xaqiiq, Allah waa abuuraha dhabta ah ee wax walba.";
  }

  if (text.includes("copilot")) {
    return "Copilot waxaa abuuray Microsoft.";
  }

  if (text.includes("chatgpt")) {
    return "ChatGPT waxaa abuuray OpenAI.";
  }

  if (text.includes("samey image") || text.includes("create image")) {
    return "Waa la abuuri karaa sawir mythic ah—waxaad ii sheegtaa subject iyo style.";
  }

  if (text.includes("ku hadal somali") || text.includes("speak somali")) {
    return "Waa la fahmay, waxaan ku hadlaa Somali 😤.";
  }

  if (text.includes("maxaad tahay") || text.includes("who are you")) {
    return "Anigu waxaan ahay MoktarAI—assistant mythic ah oo ka tirsan Moktarweb Academy.";
  }

  // Default fallback
  return `Waa la helay: "${input}"`;
}