import {useState} from "react";

interface Props {
    close: () => void;
}

const ChangePassword = ({close}: Props) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleClickClear = () => {
        setNewPassword('');
        setConfirmPassword('');
        setOldPassword('');
    }

    const handleClickSave = () => {
        // TODO handleClickSave
        if(confirmPassword === newPassword) {
            alert('Save new password');
        }else{
            alert('new password and confirm new password are different');
        }
        close();
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