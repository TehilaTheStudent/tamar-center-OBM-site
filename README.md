# Base44 App


This app was created automatically by Base44.
It's a Vite+React app that communicates with the Base44 API.

## Contact form email setup

The contact form uses [Web3Forms](https://web3forms.com) to send emails directly to your inbox (no mail app on the visitor's computer).

1. Go to https://web3forms.com
2. Enter **TAMAR@OBM.CO.IL** and verify your email
3. Copy your **Access Key**
4. Add to `.env`:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```
5. Add the same variable in your hosting provider (e.g. Vercel → Settings → Environment Variables)
6. Restart the dev server after changing `.env`

## Running the app

```bash
npm install
npm run dev
```

## Building the app

```bash
npm run build
```

For more information and support, please contact Base44 support at app@base44.com.