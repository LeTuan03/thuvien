import React from 'react'
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip,
    Card,
    useTheme,
    Button
} from '@mui/material';
import { IconEdit, IconTrash } from '@tabler/icons';

function ManageBookTable(props) {
    let {
        data,
        handleEdit,
        handleOpenDelete
    } = props;

    const theme = useTheme();
    return (

        <Card sx={{ mt: 2 }}>
            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                <Table
                    aria-label="simple table"
                    sx={{
                        whiteSpace: "nowrap",
                        '& th': {
                            padding: "6px 16px"
                        }
                    }}

                >
                    <TableHead sx={{
                        backgroundColor: "primary.main",
                        color: "#fff",
                    }}>
                        <TableRow>
                            <TableCell sx={{ width: 10, textAlign: "center" }}>
                                <Typography variant="subtitle2" fontWeight={600} color={"white"}>
                                    STT
                                </Typography>
                            </TableCell>
                            <TableCell sx={{ w: 10 }}>
                                <Typography variant="subtitle2" fontWeight={600} color={"white"}>
                                    Thao tác
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600} color={"white"}>
                                    Tên sách
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600} color={"white"}>
                                    Tác giả
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600} color={"white"}>
                                    Loại sách
                                </Typography>
                            </TableCell>
                            <TableCell align="center">
                                <Typography variant="subtitle2" fontWeight={600} color={"white"}>
                                    Số lượng
                                </Typography>
                            </TableCell>
                            <TableCell align="center">
                                <Typography variant="subtitle2" fontWeight={600} color={"white"}>
                                    Số lượng có sẵn
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((product, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                            width: 10,
                                            textAlign: "center"
                                        }}
                                    >
                                        {index + 1}
                                    </Typography>
                                </TableCell>
                                <TableCell sx={{ cursor: "pointer", w: 10 }}>
                                    <Button onClick={() => handleEdit(product)} sx={{ minWidth: 0, mr: 1 }} variant='contained' size='small'><IconEdit size="1.3rem" /></Button>
                                    <Button onClick={() => handleOpenDelete(product)} sx={{ minWidth: 0 }} variant='contained' size='small'><IconTrash size="1.3rem" /></Button>
                                </TableCell>
                                <TableCell>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                {product?.title}
                                            </Typography>
                                            {/* <Typography
                                                color="textSecondary"
                                                sx={{
                                                    fontSize: "13px",
                                                }}
                                            >
                                                {product.post}
                                            </Typography> */}
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {product?.author}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {product?.genre?.genreName}
                                    </Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={600}>
                                        {product?.quantity}
                                    </Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={600}>
                                        {product?.availableQuantity}
                                    </Typography>
                                </TableCell>
                                {/* <TableCell align="center">
                                    <Chip
                                        sx={{
                                            px: "4px",
                                            backgroundColor: product.pbg,
                                            color: "#fff",
                                        }}
                                        size="small"
                                        label={product.priority}
                                    ></Chip>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="h6">${product.budget}k</Typography>
                                </TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </Card>
    )
}

export default ManageBookTable
