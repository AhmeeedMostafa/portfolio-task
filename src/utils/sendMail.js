import { mailingApiCredentials } from '../utils/constants';

const sendMail = async ({ name, email, body }) => {
    mailingApiCredentials.template_params = {
        name,
        email,
        body,
    };

    const apiUrl = 'https://api.emailjs.com/api/v1.0/email/send';

    const sentMailData = await fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(mailingApiCredentials),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (sentMailData.status === 200) {
        return true;
    } else {
        return false;
    }
}

export default sendMail;