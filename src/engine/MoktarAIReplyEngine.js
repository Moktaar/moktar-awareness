export async function getMoktarAIReply(input, language) {
  const lower = input.toLowerCase();

  // Mythic fallback
  if (lower.includes('who are you') || lower.includes('yaad tahay')) {
    return language === 'so'
      ? 'Waxaan ahay MoktarAI—assistant mythic ah oo u taagan halgankaaga, OPSEC, iyo waxbarasho Somali ah 😤.'
      : 'I am MoktarAI—a mythic assistant born to protect, educate, and empower you 😤.';
  }

  // Somali examples
  if (language === 'so') {
    if (lower.includes('opsec')) return 'OPSEC waa xeerka ilaalinta xogtaada iyo jiritaankaaga digital ah.';
    if (lower.includes('halyeey')) return 'Halyeeygu waa qof u taagan runta, xurriyadda, iyo ilaalinta kuwa la dayacay.';
    return 'Su’aashaada waa la helay. MoktarAI wuu ka fikirayaa... 😶';
  }

  // English examples
  if (language === 'en') {
    if (lower.includes('opsec')) return 'OPSEC means protecting your digital identity and operational integrity.';
    if (lower.includes('hero')) return 'A hero stands for truth, freedom, and the protection of the vulnerable.';
    return 'Your question has been received. MoktarAI is thinking... 😶';
  }

  // Default fallback
  return language === 'so'
    ? 'Waan helay su’aashaada, jawaab degdeg ah ayaa iman doonta.'
    : 'I received your input, a mythic reply is coming soon.';
}