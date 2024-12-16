import {useState} from "react";

interface Props {
    close: () => void;
}

const EditProfile = ({close}: Props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleClickClear = () => {
        setFirstName('');
        setLastName('');
    }

    const handleClickSave = () => {
        // TODO handleClickSave
        alert('Save profile data');
        close();
    }

    return (
        <>
            <label>First name:
                <input
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                />
            </label>
            <label>Last name:
                <input
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                />
            </label>
            <button onClick={handleClickSave}>Save and Close</button>
            <button onClick={close}>Close without Save</button>
            <button onClick={handleClickClear}>Clear</button>
        </>
    );
};

export default EditProfile;