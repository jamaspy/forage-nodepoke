# James Aspinall | Frontend Developer

## Getting Started

### **It is best to view with it served. You can run the server with the following command.**

```bash
# cd into the root and install dependencies
npm i

# ensure you are using node < v18 (I think...)
nvm use 18

# build and serve the app
npm run build

# then
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Know Issues

**1.Navigating from Profile page to Favourite**

If you are on the `/pokemon/id` page and you navigate to the `/favourites` page if causes an error. I think this is because the `useRouter()` hook is not available on the server. I would have liked to have fixed this but I ran out of time.

**2. Mocking `useRouter()` in tests**

I wanted to use the latest version on NextJS (v13). I struggled to find away to successful mock the `useRouter()` used on the Login test. The test is there but commented out.

**3. Auth - Checking user logged in**

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

## Screenshots

![Alt text](./public/readme/1.png "Login")
![Alt text](./public/readme/2.png "Home")
![Alt text](./public/readme/3.png "Details")
![Alt text](./public/readme/4.png "Favorites")

# Thank you for your time
