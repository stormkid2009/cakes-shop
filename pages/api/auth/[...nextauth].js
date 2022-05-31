import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  session:{
    strategy:'jwt',
    maxAge:30 * 24 * 60 * 60,
  },
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    // ...add more providers here
  ],
  secret:"dTPrcxYNuKzv9+4qIfVZKeVOUtANvNdc9/kV5n/pO8k="
})