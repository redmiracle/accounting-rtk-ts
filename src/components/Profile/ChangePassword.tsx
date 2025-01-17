import {useState} from "react";
import {useAppDispatch} from "../../app/hooks.ts";
import {changePassword} from "../../features/api/accountApi.ts";

interface Props {
    close: () => void;
}

const ChangePassword = ({close}: Props) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useAppDispatch();

    const handleClickClear = () => {
        setNewPassword('');
        setConfirmPassword('');
        setOldPassword('');
    }

    const handleClickSave = () => {
        const {token}=JSON.parse(localStorage.getItem("state")!)
        const data:string=token.split(' ')[1]
        const decodeData=atob(data)
        const password=decodeData.split(":")[1]

        if(password===oldPassword) {

            if (confirmPassword === newPassword) {
                dispatch(changePassword(newPassword));
            } else {
                alert('new password and confirm new password are different');
            }
            close();
        }else alert("Old password is not correct");
    }

    return (
        <>
            <label>Old password:
                <input
                    onChange={(e) => setOldPassword(e.target.value)}
                    value={oldPassword}
                    type="password"/>
            </label>
            <label>New Password:
                <input
                    onChange={(e) => setNewPassword(e.target.value)}
                    value={newPassword}
                    type="password"/>
            </label>
            <label>Confirm Password:
                <input
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    type="password"/>
            </label>
            <button onClick={handleClickSave}>Save and Close</button>
            <button onClick={close}>Close without Save</button>
            <button onClick={handleClickClear}>Clear</button>
        </>
    );
};

export default ChangePassword;