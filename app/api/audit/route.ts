import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { businessName, website, city, serviceType, email } = await req.json();

  // Validate required fields
  if (!businessName || !website || !city || !serviceType || !email) {
    return NextResponse.json(
      { error: 'All fields are required' },
      { status: 400 }
    );
  }

  const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;

  if (!n8nWebhookUrl) {
    console.error('N8N_WEBHOOK_URL environment variable is not set');
    // Return a mock response for development/testing
    // In production, you should ensure the webhook URL is set
    return NextResponse.json({
      wisdom_score: 68,
      tier: 'Mid-Tier',
      quickWins: [
        'Fix Primary GBP Category',
        'Increase Review Velocity',
        'Add LocalBusiness + FAQ Schema',
        'Improve Page Speed to 70+',
        'Build City-Specific Landing Pages'
      ],
      businessName,
    });
  }

  try {
    // Call n8n webhook with audit data
    const response = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        businessName,
        website,
        city,
        serviceType,
        email,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error(`n8n webhook returned ${response.status}`);
    }

    const data = await response.json();

    // Return the audit results
    return NextResponse.json({
      wisdom_score: data.wisdom_score || 0,
      tier: data.tier || 'Unknown',
      quickWins: data.quickWins || [],
      businessName: data.businessName || businessName,
    });
  } catch (error) {
    console.error('Error calling n8n webhook:', error);
    
    // Return a fallback response if webhook fails
    return NextResponse.json(
      { 
        error: 'Failed to process audit. Please try again later.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

