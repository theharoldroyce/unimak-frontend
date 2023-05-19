import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSellerAllUsers } from "../../redux/actions/user";
import { DataGrid } from "@material-ui/data-grid";
import { AiOutlineDelete } from "react-icons/ai";
import { Button } from "@material-ui/core";
import styles from "../../styles/styles";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";

const AllUser = () => {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.user);
    const [open, setOpen] = useState(false);
    const [userId, setUserId] = useState("");

    useEffect(() => {
        dispatch(getSellerAllUsers());
    }, [dispatch]);
    const columns = [
        { field: "id", headerName: "User ID", minWidth: 150, flex: 0.7 },

        {
            field: "name",
            headerName: "name",
            minWidth: 130,
            flex: 0.7,
        },
        {
            field: "email",
            headerName: "Email",
            type: "text",
            minWidth: 130,
            flex: 0.7,
        },
        {
            field: "role",
            headerName: "User Role",
            type: "text",
            minWidth: 130,
            flex: 0.7,
        },

        {
            field: "joinedAt",
            headerName: "joinedAt",
            type: "text",
            minWidth: 130,
            flex: 0.8,
        },
    ];

    const row = [];
    users &&
        users.forEach((item) => {
            row.push({
                id: item._id,
                name: item.name,
                email: item.email,
                role: item.role,
                joinedAt: item.createdAt.slice(0, 10),
            });
        });

    return (
        <div className="w-full flex justify-center pt-5">
            <div className="w-[97%]">
                <h3 className="text-[22px] font-Poppins pb-2">All Users</h3>
                <div className="w-full min-h-[45vh] bg-white rounded">
                    <DataGrid
                        rows={row}
                        columns={columns}
                        pageSize={10}
                        disableSelectionOnClick
                        autoHeight
                    />
                </div>
            </div>
        </div>
    )
}

export default AllUser