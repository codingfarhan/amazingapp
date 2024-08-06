import { createThirdwebClient } from "thirdweb";

export const client = createThirdwebClient({
  clientId: process.env.CLIENT_ID as any,
});
