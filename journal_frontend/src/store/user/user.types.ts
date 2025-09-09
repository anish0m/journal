export interface UserProfile {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  title: string;
  mobile: string;
  address: string;
  social_links: {
    linkedin: string;
    github: string;
    twitter: string;
    instagram: string;
    facebook: string;
  };
  avatar: string;
}

export interface UserState {
  profile: UserProfile | null;
  loading: boolean;
  error: string;
}
