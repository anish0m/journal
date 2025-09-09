import type { UserState } from "./user.types";

export const getters = {
  userProfile: (state: UserState) => state.profile,
  userLoading: (state: UserState) => state.loading,
  userError: (state: UserState) => state.error,
};
