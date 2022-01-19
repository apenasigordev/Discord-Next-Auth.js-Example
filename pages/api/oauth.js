import DiscordProvider from "next-auth/providers/discord";
import NextAuth from "next-auth";

export default NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.id,
      clientSecret: process.env.secret
,
      callback: "https://discord-oauth-test.jasperweb.repl.co/redirect"
    })
  ]
})