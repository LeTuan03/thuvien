import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect, useState } from 'react';
import { insertBook, updateBook } from './ManageBookServices';
import { getListGenre } from '../ManageGenre/ManageGenreServices';
import { toast } from 'react-toastify';

export default function ManageBookDialog(props) {
    let {
        open,
        item,
        search,
        handleClose
    } = props;
    const [state, setState] = useState({});
    const [option, setOption] = useState([]);

    const handleChange = (value, name) => {
        setState((pre) => ({ ...pre, [name]: value }));
    }

    const convertData = (value) => {
        return {
            idBook: value?.book_id,
            title: value?.title,
            author: value?.author,
            idGenre: value?.genre?.genre_id,
            quantity: value?.quantity,
            availableQuantity: value?.availableQuantity,
        }
    }

    const handleSubmit = async () => {
        try {
            const dataSubmit = convertData(state);
            if (state?.book_id) {
                const data = await updateBook(dataSubmit);
                toast.success("Cập nhật thành công")
            } else {
                const data = await insertBook(dataSubmit);
                toast.success("Thêm mới thành công")
            }
        } catch (error) {

        } finally {
            handleClose();
            search();
        }
    }

    const getListGenres = async () => {
        try {
            const data = await getListGenre();
            if (data?.status === 200) {
                setOption(data?.data);
            }
        } catch (error) {

        }
    }
    useEffect(() => {
        getListGenres();
        setState({
            ...item
        })
    }, [item])
    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="md"
                fullWidth
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        handleSubmit()
                    },
                }}
            >
                <DialogTitle>Thêm mới/Cập nhật sách</DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item md={4} sm={6} xs={12}>
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                name="title"
                                label="Tiêu đề"
                                fullWidth
                                variant="standard"
                                value={state?.title}
                                onChange={(e) => handleChange(e.target.value, "title")}
                            />
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <TextField
                                required
                                margin="dense"
                                name="author"
                                label="Tác giả"
                                fullWidth
                                variant="standard"
                                value={state?.author}
                                onChange={(e) => handleChange(e.target.value, "author")}
                            />
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <TextField
                                required
                                margin="dense"
                                name="quantity"
                                label="Số lượng"
                                type='number'
                                fullWidth
                                variant="standard"
                                value={state?.quantity}
                                onChange={(e) => handleChange(e.target.value, "quantity")}
                            />
                        </Grid>
                        <Grid item md={4} sm={6} xs={12}>
                            <TextField
                                required
                                margin="dense"
                                name="available_quantity"
                                label="Số lượng còn lại"
                                type='number'
                                fullWidth
                                variant="standard"
                                value={state?.availableQuantity}
                                onChange={(e) => handleChange(e.target.value, "availableQuantity")}
                            />
                        </Grid>
                        <Grid item md={4} sm={6} xs={12} sx={{ mt: "8px" }}>
                            <Autocomplete
                                options={option}
                                getOptionLabel={(option) => option.genreName}
                                fullWidth
                                value={state?.genre}
                                defaultValue={item?.genre}
                                onChange={(e, value) => handleChange(value, 'genre')}
                                renderInput={(params) => <TextField
                                    {...params}
                                    required
                                    label="Loại sách"
                                    variant="standard"
                                    value={state?.genre}
                                />}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>

                <DialogActions>
                    <Button variant='contained' size='small' color='error' onClick={handleClose}>Hủy</Button>
                    <Button variant='contained' size='small' type="submit">Lưu</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
