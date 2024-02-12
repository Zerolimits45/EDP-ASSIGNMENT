import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import http from '../../http'

function RenderButton(props) {
    const { post } = props;
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button
                variant="contained"
                size="small"
                style={{ backgroundColor: '#C70000' }}
                onClick={handleOpen}
            >
                Delete
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    Delete Feedback
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this Post?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="inherit"
                        onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="contained" color="error"
                        onClick={() => {
                            http.delete(`/Post/${post.id}`).then((res) => {
                                console.log(res.data)
                                handleClose()
                            });
                        }}>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

function PostsView() {
    const [postList, setPostList] = useState([]);

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'title', headerName: 'Title', width: 100 },
        { field: 'description', headerName: 'Description', width: 300 },
        { field: 'likes', headerName: 'Likes', width: 70 },
        { field: 'createdAt', headerName: 'CreatedAt', width: 100 },
        { field: 'updatedAt', headerName: 'UpdatedAt', width: 100 },
        { field: 'action', headerName: 'Actions', width: 200, renderCell: (params) => <RenderButton post={params.row} /> },

    ];

    const rows = postList.map((post) => ({
        id: post.id,
        title: post.title,
        description: post.description,
        likes: post.likes,
        createdAt: new Date(post.createdAt).toLocaleDateString(),
        updatedAt: new Date(post.updatedAt).toLocaleDateString(),
    }));

    const getPosts = () => {
        http.get(`/Post/All`).then((res) => {
            setPostList(res.data);
        });
    };

    useEffect(() => {
        getPosts();
    }, [postList]);

    return (
        <>
            <div style={{ width: '100%', backgroundColor: 'white' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    sx={{ height: 500 }}
                />
            </div>
        </>
    )
}

export default PostsView