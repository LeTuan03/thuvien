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
import { IconEdit, IconEye, IconTrash } from '@tabler/icons';

function ManageGenreTable(props) {
    let {
        data,
        handleEdit
    } = props;

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
                                    Tên đăng nhập
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((product, index) => (
                            <TableRow key={product.name}>
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
                                    <Button onClick={() => handleEdit(product)} sx={{ minWidth: 0, mr: 1 }} variant='contained' size='small'><IconEye size="1.3rem" /></Button>
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
                                                {product.userName}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </Card>
    )
}

export default ManageGenreTable
