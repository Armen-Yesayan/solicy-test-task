import {
  Button,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow
} from "@mui/material";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import moment from "moment";
import React, { useCallback, useMemo } from "react";
import { AiFillEye } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { useDeleteAccountMutation, useGetAccountsQuery } from "../../redux/rtk-query/accounts.api";

const Accounts = () => {
  const navigate = useNavigate();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const { data: accounts } = useGetAccountsQuery();
  const [deleteAccountAction] = useDeleteAccountMutation();

  const deleteAccount = useCallback(async (id: string) => {
    const res = await deleteAccountAction(id);

    if ("data" in res) {
      toast("Account deleted successfully!", { type: "success" });
    }

    if ("error" in res) {
      toast((res.error as any).data, { type: "error" });
    }
  }, []);

  const accountsMemo = useMemo(() => {
    if (accounts) {
      return (rowsPerPage > 0 ? accounts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : accounts).map(
        account => (
          <TableRow key={account.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component='th' scope='row'>
              {account.id}
            </TableCell>
            <TableCell component='th' scope='row'>
              {account.name}
            </TableCell>
            <TableCell>{moment(account.createdAt).format("LLL")}</TableCell>
            <TableCell>{account.owner.name}</TableCell>
            <TableCell>
              <Stack flexDirection={"row"} gap={2}>
                <Link to={`/accounts/${account.id}`}>
                  <IconButton>
                    <AiFillEye size={24} color={"blue"} />
                  </IconButton>
                </Link>
                <IconButton onClick={() => deleteAccount(account.id)}>
                  <BsTrash size={24} color={"red"} />
                </IconButton>
              </Stack>
            </TableCell>
          </TableRow>
        )
      );
    }

    return null;
  }, [accounts, rowsPerPage, page, deleteAccount]);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Stack alignItems={"center"} gap={3}>
      <TableContainer sx={{ marginTop: "50px" }} component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Crated On</TableCell>
              <TableCell>Owner</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{accountsMemo}</TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={accounts ? accounts.length : 0}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page"
                  },
                  native: true
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>

      <Button size={"large"} variant={"contained"} color={"info"} onClick={() => navigate("/account/create")}>
        Create Account
      </Button>
    </Stack>
  );
};

export default Accounts;
