import DiscordProvider from "next-auth/providers/discord";
import NextAuth from "next-auth";

export default NextAuth({
  secret: "cow",
  providers: [
    DiscordProvider({
      clientId: process.env.id,
      clientSecret: process.env.secret




    })
    ],
callbacks: {
  async jwt({ token, account }) {
    // Persist the OAuth access_token to the token right after signin
    if (account) {
      token.accessToken = account.access_token
    }
    return token
  },
  async session({ session, token, user }) {
    // Send properties to the client, like an access_token from a provider.
    session.accessToken = token.accessToken
    return session
  },
  async signIn({ user, account, profile, email, credentials }) {
    const isAllowedToSignIn = true
    if (isAllowedToSignIn) {
      return true
    } else {
      // Return false to display a default error message
      return false
      // Or you can return a URL to redirect to:
      // return '/unauthorized'
    }
  },
  redirect({ url, baseUrl   }) {
    if (url.startsWith(baseUrl)) return url
    // Allows relative callback URLs
    else if (url.startsWith("/")) return new URL(url, baseUrl).toString()
    return baseUrl
  }
}
})