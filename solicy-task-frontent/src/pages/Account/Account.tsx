import { Box, Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import moment from "moment";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

import { useDeleteAccountMutation, useLazyGetAccountQuery } from "../../redux/rtk-query/accounts.api";

const Account = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [getAccount, { data }] = useLazyGetAccountQuery();
  const [deleteAccountAction] = useDeleteAccountMutation();

  useEffect(() => {
    if (id) {
      getAccount(id);
    }
  }, [id]);

  const deleteAccount = (id: string) => async () => {
    const res = await deleteAccountAction(id);

    if ("data" in res) {
      toast("Account deleted successfully!", { type: "success" });
      navigate("/accounts");
    }

    if ("error" in res) {
      toast((res.error as any).data, { type: "error" });
    }
  };

  return data ? (
    <Box>
      <TableContainer sx={{ marginTop: "50px" }} component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableBody>
            <TableRow>
              <TableCell variant={"head"} sx={{ fontWeight: 700 }}>
                ID
              </TableCell>
              <TableCell>{data.id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant={"head"} sx={{ fontWeight: 700 }}>
                Name
              </TableCell>
              <TableCell>{data.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant={"head"} sx={{ fontWeight: 700 }}>
                Owner
              </TableCell>
              <TableCell>{data.owner.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant={"head"} sx={{ fontWeight: 700 }}>
                Created On
              </TableCell>
              <TableCell>{moment(data.createdAt).format("LLL")}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant={"head"} sx={{ fontWeight: 700 }}>
                Updated On
              </TableCell>
              <TableCell>{moment(data.updatedAt).format("LLL")}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Stack flexDirection={"row"} gap={2} sx={{ marginTop: "30px" }}>
        <Button variant={"outlined"} onClick={() => navigate("/accounts")}>
          Go Back
        </Button>
        <Button variant={"contained"} color={"error"} onClick={deleteAccount(data.id)}>
          Delete
        </Button>
      </Stack>
    </Box>
  ) : null;
};

export default Account;
