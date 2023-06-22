import { Button, FormControl, InputLabel, MenuItem, Paper, Select, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

import { useCreateAccountMutation } from "../../redux/rtk-query/accounts.api";
import { useGetOwnersQuery } from "../../redux/rtk-query/owner.api";

const CreateAccount = () => {
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [ownerId, setOwnerId] = useState<string>("");

  const { data: owners } = useGetOwnersQuery();
  const [createAccount] = useCreateAccountMutation();

  const onTextChange = (e: any) => setName(e.target.value);
  const handleChange = (e: any) => setOwnerId(e.target.value);
  const handleSubmit = async () => {
    if (!name || !ownerId) {
      toast("Fields is required", { type: "error" });

      return;
    }

    const res = await createAccount({ name, ownerId });

    if ("data" in res) {
      toast("Account created successfully!", { type: "success" });
      navigate("/accounts");
    }
  };
  const handleReset = () => {
    setName("");
    setOwnerId("");

    navigate("/accounts");
  };

  return (
    <Paper sx={{ marginTop: "50px" }}>
      <Stack alignItems={"center"} gap={3} sx={{ padding: "20px" }}>
        <h2>Create Account</h2>

        <FormControl fullWidth>
          <TextField variant={"standard"} onChange={onTextChange} value={name} label={"Name"} required />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id='owner'>Owner</InputLabel>
          <Select labelId='demo-simple-select-label' value={ownerId} label='Owner' onChange={handleChange}>
            {owners &&
              owners.map(owner => (
                <MenuItem key={owner.id} value={owner.id}>
                  {owner.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Stack>

      <Stack flexDirection={"row"} gap={2} justifyContent={"center"} sx={{ paddingBottom: "30px" }}>
        <Button variant={"contained"} onClick={handleSubmit}>
          Submit
        </Button>
        <Button variant={"outlined"} onClick={handleReset}>
          Go Back
        </Button>
      </Stack>
    </Paper>
  );
};

export default CreateAccount;
