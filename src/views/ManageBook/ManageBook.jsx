import React, { useEffect, useState } from 'react';
import { Button, Card } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import ManageBookTable from './ManageBookTable';
import ManageBookDialog from './ManageBookDialog';
import ConfirmDialog from '../components/ConfirmDialog';
import { deleteBook, getAllBook } from './ManageBookServices';
import { toast } from 'react-toastify';

const ManageBook = () => {

    const [item, setItem] = useState(null);
    const [listitem, setListItem] = useState([]);
    const [open, setOpen] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setItem(null);
        setOpen(false);
        setOpenDelete(false);
    };

    const handleEdit = (value) => {
        setOpen(true);
        setItem(value);
    }

    const handleOpenDelete = (value) => {
        setOpenDelete(true);
        setItem(value);
    }

    const handleYesDelete = async () => {
        try {
            await deleteBook(item?.book_id);
            toast.success("Xóa thành công")
        } catch (error) {

        } finally {
            handleClose();
            search();
        }
    }

    const search = async () => {
        try {
            const data = await getAllBook();
            if (data?.status === 200) {
                setListItem(data?.data)
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        search();
    }, []);

    return (
        <PageContainer title="Quản lý sách">
            <Card sx={{ p: 1, minHeight: "screen" }}>
                <Button variant='contained' size='small' onClick={handleClickOpen}>Thêm mới</Button>
                <ManageBookTable data={listitem} handleEdit={handleEdit} handleOpenDelete={handleOpenDelete} />
            </Card>
            {open && <ManageBookDialog
                open={open}
                item={item}
                search={search}
                handleClose={handleClose}
            />}
            {openDelete && <ConfirmDialog
                open={openDelete}
                handleClose={handleClose}
                handleYesDelete={handleYesDelete}
            />}
        </PageContainer>
    );
};

export default ManageBook;
