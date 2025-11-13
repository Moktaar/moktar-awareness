import { getMoktarAIReply } from './MoktarAIReplyEngine';

describe('MoktarAIReplyEngine', () => {
  test('returns Somali OPSEC response', async () => {
    const reply = await getMoktarAIReply('opsec waa maxay?', 'so');
    expect(reply.toLowerCase()).toContain('opsec');
  });

  test('returns English hero response', async () => {
    const reply = await getMoktarAIReply('what is a hero?', 'en');
    expect(reply.toLowerCase()).toContain('hero');
  });

  test('handles unknown Somali input', async () => {
    const reply = await getMoktarAIReply('wax aan la aqoon', 'so');
    expect(reply).toMatch(/su’aashaada|jawaab/i);
  });

  test('handles unknown English input', async () => {
    const reply = await getMoktarAIReply('something random', 'en');
    expect(reply).toMatch(/received|reply/i);
  });

  test('responds to identity question in Somali', async () => {
    const reply = await getMoktarAIReply('yaad tahay?', 'so');
    expect(reply).toMatch(/MoktarAI|assistant/i);
  });

  test('responds to identity question in English', async () => {
    const reply = await getMoktarAIReply('who are you?', 'en');
    expect(reply).toMatch(/MoktarAI|mythic/i);
  });
});