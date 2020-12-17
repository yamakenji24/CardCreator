export interface ProfileType {
  provider: string;
  email: string | null;
  name: string;
  picture: string;
  twitter: string | null;
  blog: string | null;
}

export function getProfile(response): ProfileType {
  const twitter = response.provider === 'github' ? response.profile.twitter_username : null;
  const blog = response.provider === 'github' ? response.profile.blog : null;

  return {
    provider: response.provider,
    email: response.email,
    name: response.name,
    picture: response.picture,
    twitter: twitter,
    blog: blog
  }
}