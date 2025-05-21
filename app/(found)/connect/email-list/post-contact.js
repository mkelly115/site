'use server';

const apiKey = process.env.API_KEY;
const secretKey = process.env.SECRET_KEY;

export default async function postContact({ name, email }) {
    const url = 'https://api.mailjet.com/v3/REST/contact';
    const body = JSON.stringify({ Name: name, Email: email, IsExcludedFromCampaigns: true });
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${Buffer.from(`${apiKey}:${secretKey}`).toString('base64')}`
    };

    const response = await fetch(url, { method: 'POST', headers, body });

    const text = await response.text();

    let json;
    try {
        json = text ? JSON.parse(text) : null;
    } catch (err) {
        console.error('Failed to parse JSON response:', err);
    }

    console.log('status', response.status);
    console.log('response body:', json || text);
    return json
};

