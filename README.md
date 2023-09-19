This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## About

This is an app built by following JavaScript Mastery tutorials to learn NextJS (https://www.youtube.com/@javascriptmastery)

It uses Google OAuth and MongoDb and is running on AWS Lighsail at http://patrick-ward.ie:5050

## Notes

To run on production server:

1. npm run build
2. pm2 start npm --name "NextJS-Promptopia" -- start

Useful pm2 commands

- pm2 status
- pm2 logs
