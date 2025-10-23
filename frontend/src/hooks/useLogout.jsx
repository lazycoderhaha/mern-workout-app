import { useUserContext } from "./useUserContext";

export const useLogout = () => {
    const { dispatch } = useUserContext();
    const logout = () => {
        // logout logic here
        localStorage.removeItem('user');
        dispatch({ type: 'LOGOUT' });
    }

    return { logout };
}
