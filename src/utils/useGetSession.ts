import { useEffect, useState } from "react";
import { getSession } from "next-auth/client";
import { isNullOrUndefined } from "util";

import { getProfile, ProfileType } from "./getProfile";

interface SessionAPIResponse {
  provider: string;
  email: string | null;
  exp: number;
  iat: number;
  name: string;
  picture: string;
  profile: {};
}

export const useGetSession = () => {
  const [profileData, setProfile] = useState<ProfileType | undefined>();
  useEffect(() => {
    const getFunction = async () => {
      await getSession().then<SessionAPIResponse>((session) => {
        if (!isNullOrUndefined(session)) {
          const profile = getProfile(session);
          setProfile(profile);
        }
      });
    };
    getFunction();
  }, []);

  return { profileData };
};
