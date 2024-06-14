'use server';

export default async function requestApi(formData: FormData): Promise<boolean> {

  const username = process.env.WP_USERNAME;
  const password = process.env.WP_PASSWORD;
  const url = `http://${process.env.WP_DOMAIN}/wp-json/tamer-inawy/v1/contact-form`

  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  };

  try {
    const apiRes: any = await fetch(
      url,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':
            'Basic ' +
            Buffer.from(username + ':' + password).toString('base64'),
        },
        body: JSON.stringify(data),
      }
    );

    const final = await apiRes.json();
    if (final.id) {
      return true;
    }
    throw new Error(final.message || 'Error!');
  } catch (e: any) {
    throw new Error(e.message);
  }
}