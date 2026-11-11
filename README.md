This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## MongoDB Contact Messages

The booking form stores submissions in the `contacts` collection of the `prince_portfolio` database. View them in the password-protected `/admin` page.

1. Create a MongoDB Atlas cluster and database user, and allow your app's server IP in Network Access.
2. Set `MONGODB_URI` and `MONGODB_DB=prince_portfolio` in `.env.local`. Keep database credentials private and do not add `.env.local` to source control.
3. Set `ADMIN_PASSWORD` to a private password with at least 12 characters and `ADMIN_SESSION_SECRET` to a random secret with at least 32 characters. Generate a secret with `node -e "console.log(require('node:crypto').randomBytes(32).toString('base64'))"`.
4. Restart the app and open `/admin` to sign in. Contact messages are available only after MongoDB is configured.
5. SMTP settings are optional. If configured, new submissions also send an email notification; a mail delivery failure does not prevent the message from appearing in the admin inbox.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
