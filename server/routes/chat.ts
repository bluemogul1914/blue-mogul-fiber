import { Router, Request, Response } from 'express';

const router = Router();

const ANYTHINGLLM_URL = process.env.ANYTHINGLLM_URL || 'https://anythingllm.bluemogul.us';
const ANYTHINGLLM_WORKSPACE = process.env.ANYTHINGLLM_WORKSPACE || 'customer-support-kb';
const ANYTHINGLLM_API_KEY = process.env.ANYTHINGLLM_API_KEY;

router.post('/api/chat', async (req: Request, res: Response) => {
  if (!ANYTHINGLLM_API_KEY) {
    return res.status(500).json({ error: 'Chat service not configured.' });
  }

  const { message, sessionId } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message is required.' });
  }

  try {
    const apiRes = await fetch(
      `${ANYTHINGLLM_URL}/api/v1/workspace/${ANYTHINGLLM_WORKSPACE}/chat`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${ANYTHINGLLM_API_KEY}`,
        },
        body: JSON.stringify({
          message,
          mode: 'chat',
          sessionId: sessionId || 'web-visitor',
        }),
      }
    );

    if (!apiRes.ok) {
      const errText = await apiRes.text();
      console.error('[chat] AnythingLLM error:', apiRes.status, errText);
      return res.status(502).json({ error: 'Chat service unavailable. Please try again.' });
    }

    const data = await apiRes.json();
    return res.json({ reply: data.textResponse || data.response || "I'm not sure about that. Please call us at (346) 309-5514." });
  } catch (err: any) {
    console.error('[chat] Error:', err.message);
    return res.status(500).json({ error: 'Something went wrong. Please call (346) 309-5514.' });
  }
});

export default router;
