import React, { useEffect, useState } from "react";
import { TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getSellerAllUsers } from "../../redux/actions/user";
import { DataGrid } from "@material-ui/data-grid";


const AllUser = () => {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.user);
    const [filterValue, setFilterValue] = useState("");

    useEffect(() => {
        dispatch(getSellerAllUsers());
    }, [dispatch]);

    const handleFilterChange = (event) => {
        setFilterValue(event.target.value);
    };


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

    const rows = users
        ? users.map((item) => ({
            id: item._id,
            name: item.name,
            email: item.email,
            role: item.role,
            joinedAt: item.createdAt.slice(0, 10),
        }))
        : [];

    const filteredRows = rows.filter((row) => {
        return row.name.toLowerCase().includes(filterValue.toLowerCase());
    });



    return (
        <div className="w-full mx-8 pt-1 mt-10 bg-white">
            <div className="m-3">
                <TextField
                    label="Search"
                    variant="outlined"
                    value={filterValue}
                    onChange={handleFilterChange}
                    className="mb-4 w-[50%]"
                />
            </div>
            <DataGrid
                rows={filteredRows}
                columns={columns}
                pageSize={10}
                disableSelectionOnClick
                autoHeight
            />
        </div>
    )
}

export default AllUser