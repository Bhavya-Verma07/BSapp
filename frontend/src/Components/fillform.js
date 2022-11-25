import { CardContent } from "@mui/material";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./style.css";

import axios from "axios";

export const Fillsellform = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const [price, setPrice] = useState("");
  const [bookName, setBookName] = useState("");
  const [bookDetails, setBookDetails] = useState("");

  const handlesubmit = async () => {
    try {
      const response = await axios.post("/api/saveinfo", {
        firstName,
        lastName,
        mobileNumber,
        emailId,
        price,
        bookName,
        bookDetails,
      });
      if (response.data.success) {
        alert("Information successfully saved");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong..");
    }
  };

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Fill your details</h3>
      <Card className="sellcard mx-auto ">
        <CardContent>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
          >
            <div className="row-col-6">
              <TextField
                required
                id="outlined-required"
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                width="100%"
                defaultValue="abc"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                  borderColor: " #008E97",
                  color: "GrayText",
                }}
              />
              <TextField
                id="outlined-required"
                label="Last Name"
                defaultValue="abc"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="row-col-6">
              <TextField
                required
                id="outlined-number"
                label="Mobile Number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                //   type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                required
                id="filled-required"
                label="e-mail Id"
                defaultValue="abc"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                variant="filled"
              />
            </div>

            <div className="row">
              <div className="col-6">
                <TextField
                  id="filled-search"
                  label="Search field"
                  type="search"
                  variant="filled"
                />
                <TextField
                  required
                  id="outlined-number"
                  label="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  //   type="number"
                  helperText="Price(in Rupees) on which you want to sell your book(s)"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <div className="col-6">
                <TextField
                  id="outlined-required"
                  label="Book Name"
                  defaultValue="abc"
                  value={bookName}
                  onChange={(e) => setBookName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <TextField
                id="standard-helperText"
                label="Details"
                placeholder="details about book"
                helperText="Like book's edition"
                value={bookDetails}
                onChange={(e) => setBookDetails(e.target.value)}
                variant="standard"
              />
              {/* <TextField
                id="filled"
                label="About You"
                defaultValue="abc"
                variant="filled"
              /> */}
            </div>
            <div>
              {/* <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        
        /> */}

              <div className="row mx-auto">
                <Button
                  variant="contained"
                  component="label"
                  style={{ margin: "3px" }}
                >
                  Upload File
                  <input type="file" hidden />
                </Button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handlesubmit()}
                >
                  Submit
                </button>
              </div>
            </div>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};
