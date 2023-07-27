# James Aspinall | Frontend Developer

## Getting Started

### **It is best to view with it served. You can run the server with the following command.**

```bash
# cd into the root and install dependencies
npm i

# build and serve the app
npm run build

# then
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Know Issues

**1. Mocking `useRouter()` in tests**

I wanted to use the latest version on NextJS (v13). I struggled to find away to successful mock the `useRouter()` used on the Login test. The test is there but commented out.

**2. Auth - Checking user logged in**

I tested this and it wasn't working the way I wanted it to, but I ran out of time. I would have liked to have added a check to see if the user was logged in and if not redirect them to the login page.

## Tech Stack

- NextJS (v13)
- Typescript
- TailwindCSS

## Approach

I want to demonstrate as many things as I could in the timeframe.
So I have tried to show the following:

- Custom Hooks
- Server Components
- Testing
- Typescript
- CSS/Responsive Design

## What I would do next

- Add more tests (test `useRouter`)
- Make it more responsive
- Make the search/filter better
- Replace the x-scroll on the rows with a Carousel
- Use a database instead of local storage (Primsa, Apollo, RailwayDB)

---

# Thank you for your time
