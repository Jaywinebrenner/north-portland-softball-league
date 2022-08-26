import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"


export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    clientId: '6aa5b3213c7a044a7daa',
    clientSecret: "7ba29ccedd5579e4d6b64b09fbd1684b488b535f",
    }),
    // ...add more providers here
  ],
})