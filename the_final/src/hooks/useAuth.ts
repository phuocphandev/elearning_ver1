import { useSelector } from "react-redux";
import { RootState } from "store";

export const useAuth = () => {
  const { accessToken,user } = useSelector(
    (state: RootState) => state.manageUser
  );
  return { accessToken,user };
};

