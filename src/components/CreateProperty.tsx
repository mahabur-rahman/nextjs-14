"use client";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

// Define your fields as part of the first step's description
const steps = [
  {
    label: "Basic Information",
    description: (
      <>
        <TextField fullWidth label="Project Name" required sx={{ mb: 2 }} />
        <TextField fullWidth select label="Project Tag" required sx={{ mb: 2 }}>
          <MenuItem value="Tag 1">Tag 1</MenuItem>
          <MenuItem value="Tag 2">Tag 2</MenuItem>
          {/* Add more tags here */}
        </TextField>
        <TextField fullWidth select label="Completion Date" required sx={{ mb: 2 }}>
          <MenuItem value="Q1 2024">Q1 2024</MenuItem>
          <MenuItem value="Q2 2024">Q2 2024</MenuItem>
          {/* Add more options here */}
        </TextField>
        <TextField fullWidth select label="Project Status" required sx={{ mb: 2 }}>
          <MenuItem value="Active">Active</MenuItem>
          <MenuItem value="Inactive">Inactive</MenuItem>
          {/* Add more statuses here */}
        </TextField>
        <TextField fullWidth select label="Unit Type" required sx={{ mb: 2 }}>
          <MenuItem value="Type 1">Type 1</MenuItem>
          <MenuItem value="Type 2">Type 2</MenuItem>
          {/* Add more unit types here */}
        </TextField>
        <TextField fullWidth label="Floors" required sx={{ mb: 2 }} />
        <TextField fullWidth label="Furnishing" required sx={{ mb: 2 }} />
        <TextField fullWidth label="Service Charge" required sx={{ mb: 2 }} />
        <TextField fullWidth label="Readiness Progress" required sx={{ mb: 2 }} />
        <TextField fullWidth select label="Currency" required sx={{ mb: 2 }}>
          <MenuItem value="USD">USD</MenuItem>
          <MenuItem value="AED">AED</MenuItem>
          {/* Add more currencies here */}
        </TextField>
        <TextField fullWidth select label="Size Unit" required sx={{ mb: 2 }}>
          <MenuItem value="Square Meter">Square Meter</MenuItem>
          <MenuItem value="Square Feet">Square Feet</MenuItem>
          {/* Add more size units here */}
        </TextField>
        <TextField fullWidth label="Commission" required sx={{ mb: 2 }} />
        <TextField fullWidth label="Country" required sx={{ mb: 2 }} />
        <TextField fullWidth label="District" required sx={{ mb: 2 }} />
        <TextField fullWidth label="City" required sx={{ mb: 2 }} />
        <Typography variant="subtitle1" sx={{ mt: 2 }}>Project Images</Typography>
        <Button variant="contained" component="label" sx={{ mt: 1, mr: 1 }}>
          Upload Image 1
          <input type="file" hidden />
        </Button>
        <Button variant="contained" component="label" sx={{ mt: 1, mr: 1 }}>
          Upload Image 2
          <input type="file" hidden />
        </Button>
        <Button variant="contained" component="label" sx={{ mt: 1, mr: 1 }}>
          Upload Image 3
          <input type="file" hidden />
        </Button>
      </>
    ),
  },
  {
    label: "Project Overview and Visualizations",
    description: "Add more details about the project in this step.",
  },
  {
    label: "Location and Plans",
    description: "Specify the location and layout plans here.",
  },
];

export default function CreatePropertyStep() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 600 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === steps.length - 1 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              {step.description}
              <Box sx={{ mb: 2 }}>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                >
                  {index === steps.length - 1 ? "Finish" : "Continue"}
                </Button>
                <Button
                  disabled={index === 0}
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Back
                </Button>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you're finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
