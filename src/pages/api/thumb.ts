import { NextApiRequest, NextApiResponse } from "next";
import { createCanvas, registerFont } from 'canvas';

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse
  ) {
  try {
    registerFont('./public/static/JetBrainsMono-Regular.ttf', { family:  'JetBrainsMono' })
    const { title } = req.query;
    const canvas = createCanvas(1200, 630);
    const context = canvas.getContext('2d');

    context.fillStyle="#1d1e26";
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    context.font = `10rem JetBrainsMono`
    context.textAlign ="center";
    context.fillStyle="#ff79c6";
    context.fillText(title as string, canvas.width / 2, canvas.height / 2);

    const file = canvas.toBuffer('image/png');
    const cacheTimeSeconds = 60 * 60 * 24 * 30; 

    res.setHeader('Content-Type', 'image/png');
    res.setHeader(
      'Cache-Control', 
      `public, immutable, no-transform, s-maxage=${cacheTimeSeconds}, max-age=${cacheTimeSeconds}`
    );

    res.end(file);
  } catch (error) {
    res.status(500).json({
      statusCode: 500,
      error: `error during process due to: ${error.message}`,
    })
  }
}