
import { cookies } from "next/headers";


const AUTH_URL = process.env.AUTH_URL;

export const userService = {
  getSession: async function () {
    try {
        console.log(AUTH_URL);
      const cookieStore = await cookies();
      const res = await fetch(`${AUTH_URL}/get-session`, {
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-cache",
      });
      const session = await res.json();

      if (session === null) {
        return {
          data: null,
          error: {
            message: "Session not found",
          },
        };
      }
      return {
        data: session,
        error: null,
      };
    } catch (error) {
      console.log(error);
      return {
        status: 500,
        date: null,
      };
    }
  },
};
