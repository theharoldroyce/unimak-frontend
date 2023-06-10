import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
} from '@material-ui/core';
import { barangayData } from "../../static/data"
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/styles";
import { updatUserAddress } from "../../redux/actions/user";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
    dialogContent: {
        paddingBottom: theme.spacing(2),
    },
}));

const AddressCreate = ({ open, title, content, onClose, onConfirm }) => {
   
    const classes = useStyles();

    const [country, setCountry] = useState("Philippines");
    const [city, setCity] = useState("Oriental Mindoro");
    const [zipCode, setZipCode] = useState(5200);
    const [address1, setAddress1] = useState("Calapan City");
    const [address2, setAddress2] = useState("");
    const [address3, setAddress3] = useState("");
    const [addressType, setAddressType] = useState("");
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const addressTypeData = [
        {
            name: "Home",
        },
        {
            name: "Office",
        },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (addressType === "" || country === "" || city === "") {
            toast.error("Please fill all the fields!");
        } else {
            dispatch(
                updatUserAddress(
                    country,
                    city,
                    address1,
                    address2,
                    address3,
                    zipCode,
                    addressType
                )
            );
            onClose(true);
            setCountry("");
            setCity("");
            setAddress1("");
            setAddress2("");
            setAddress3("");
            setZipCode(null);
            setAddressType("");
        }
    };


    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>{title}</DialogTitle>
            <DialogContent >
                <div className="w-full block p-4">
                    <div className="w-full pb-2 hidden">
                        <label className="block pb-2">Country</label>
                        <input
                            type="text"
                            className={`${styles.input} !w-[95%] mb-1 800px:mb-0`}
                            required
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                    </div>

                    <div className="w-full pb-2 hidden">
                        <label className="block pb-2">Province</label>
                        <input
                            type="text"
                            className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                            required
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>

                    <div className="w-full pb-2">
                        <label className="block pb-2">City / Municipality</label>
                        <input
                            type="address"
                            className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                            required
                            disabled
                            value={address1}
                            onChange={(e) => setAddress1(e.target.value)}
                        />
                    </div>

                    <div className="w-full pb-2">
                        <label className="block pb-2">Select Barangay</label>
                        <select
                            name=""
                            id=""
                            value={address2}
                            onChange={(e) => setAddress2(e.target.value)}
                            className="w-[95%] border h-[40px] rounded-[5px]"
                        >
                            <option value="" className="block border pb-2">
                                Select Barangay
                            </option>
                            {barangayData &&
                                barangayData.map((item) => (
                                    <option
                                        className="block pb-2"
                                        key={item.name}
                                        value={item.name}
                                    >
                                        {item.name}
                                    </option>
                                ))}
                        </select>
                    </div>

                    <div className="w-full pb-2">
                        <label className="block pb-2">House # / Street </label>
                        <input
                            type="address"
                            className={`${styles.input}`}
                            required
                            value={address3}
                            onChange={(e) => setAddress3(e.target.value)}
                        />
                    </div>

                    <div className="w-full pb-2 hidden">
                        <label className="block pb-2">Zip Code</label>
                        <input
                            type="number"
                            className={`${styles.input}`}
                            required
                            disabled
                            value={zipCode}
                        // onChange={(e) => setZipCode(e.target.value)}
                        />
                    </div>

                    <div className="w-full pb-2">
                        <label className="block pb-2">Address Type</label>
                        <select
                            name=""
                            id=""
                            value={addressType}
                            onChange={(e) => setAddressType(e.target.value)}
                            className="w-[95%] border h-[40px] rounded-[5px]"
                        >
                            <option value="" className="block border pb-2">
                                Select Type
                            </option>
                            {addressTypeData &&
                                addressTypeData.map((item) => (
                                    <option
                                        className="block pb-2"
                                        key={item.name}
                                        value={item.name}
                                    >
                                        {item.name}
                                    </option>
                                ))}
                        </select>
                    </div>

                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary" variant="contained">
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddressCreate;
