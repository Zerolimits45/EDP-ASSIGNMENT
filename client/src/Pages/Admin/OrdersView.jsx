import React from 'react'
import { Button } from '@mui/material'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';

function RenderButton(props) {
    const { hasFocus, value, user } = props;
    const buttonElement = React.useRef(null);
    const rippleRef = React.useRef(null);

    React.useLayoutEffect(() => {
        if (hasFocus) {
            const input = buttonElement.current?.querySelector('input');
            input?.focus();
        } else if (rippleRef.current) {
            rippleRef.current.stop({});
        }
    }, [hasFocus]);

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
                ref={buttonElement}
                variant="contained"
                size="small"
                style={{ backgroundColor: '#6CA0DC' }}
            //   LinkComponent={Link} to={`/admin/users/edit/${user.id}`}
            >
                Edit
            </Button>

            <Button
                ref={buttonElement}
                variant="contained"
                size="small"
                style={{ marginLeft: 16, backgroundColor: '#C70000' }}
                onClick={handleOpen}
            >
                Delete
            </Button>


            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    Delete Order
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this order?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="inherit"
                        onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="contained" color="error"
                        onClick={() => {
                            // http.delete(`/user/${user.id}`).then((res) => {
                            //   console.log(res.data)
                            //   navigate('/admin/dashboard')
                            // });
                        }}>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>

        </>


    );
}

const columns = [
    { field: 'id', headerName: 'ID', width: 30 },
    { field: 'EventName', headerName: 'Event Name', width: 200 },
    { field: 'MerchantName', headerName: 'Merchant Name', width: 200 },
    { field: 'startdate', headerName: 'Start Date', width: 100 },
    { field: 'enddate', headerName: 'End Date', width: 100 },
    { field: 'price', headerName: 'Price', width: 100 },
    { field: 'action', headerName: 'Actions', width: 500, renderCell: (params) => <RenderButton booking={params.row} /> },
];

const rows = "" ;

function OrdersView() {
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

export default OrdersView