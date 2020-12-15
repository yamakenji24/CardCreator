import {useEffect, useState} from 'react';
import { getSession } from 'next-auth/client';

interface SessionAPIResponse {
  provider: string;
  email: string | null;
  exp: number;
  iat: number;
  name: string;
  picture: string;
  profile: {}
}

export const useGetSession = () => {
  const [profileData, setProfile] = useState<SessionAPIResponse | undefined>()
  useEffect(() => {
    const getFunction = async() => {
      await getSession()
      .then<SessionAPIResponse>(profile => setProfile(profile))
    }
    getFunction()
  }, [])

  return {profileData};
}