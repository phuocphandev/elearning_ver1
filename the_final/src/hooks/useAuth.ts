import { useSelector } from "react-redux";
import { RootState } from "store";

export const useAuth = () => {
  const { accessToken, user, AllAccount } = useSelector(
    (state: RootState) => state.manageUser
  );
  return { accessToken, user, AllAccount };
};
