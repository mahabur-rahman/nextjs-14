"use client";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

// Define your steps and their descriptions
const steps = [
  { label: "Basic Information" },
  { label: "Project Visualization" },
  { label: "Location and Plans" },
];

export default function CreatePropertyStep() {
  const [activeStep, setActiveStep] = useState(0);

  // Define the state object to store form data
  const [formData, setFormData] = useState({
    projectName: "",
    projectTag: "",
    completionDate: { quarter: "", year: "" },
    projectStatus: "",
    unitType: [],
    floors: "",
    furnishing: "",
    serviceCharge: "",
    readinessProgress: "",
    currency: "",
    sizeUnit: "",
    country: "",
    district: "",
    city: "",
    projectGeneralFacts: "",
    projectFinishingAndMaterials: "",
    projectKitchenAndAppliances: "",
    projectFurnishingDetails: "",
    projectImages: [],
    exteriorImages: [],
    interiorImages: [],
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setFormData({
      projectName: "",
      projectTag: "",
      completionDate: { quarter: "", year: "" },
      projectStatus: "",
      unitType: [],
      floors: "",
      furnishing: "",
      serviceCharge: "",
      readinessProgress: "",
      currency: "",
      sizeUnit: "",
      country: "",
      district: "",
      city: "",
      projectGeneralFacts: "",
      projectFinishingAndMaterials: "",
      projectKitchenAndAppliances: "",
      projectFurnishingDetails: "",
      projectImages: [],
      exteriorImages: [],
      interiorImages: [],
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCompletionDateChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      completionDate: {
        ...prev.completionDate,
        [name]: value,
      },
    }));
  };

  const handleFileChange = (e, type) => {
    const files = e.target.files;
    setFormData((prev) => ({
      ...prev,
      [type]: files,
    }));
  };


  console.log('Form data wil be : ', formData)

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
              {activeStep === 0 && (
                <>
                  <TextField
                    fullWidth
                    label="Project Name"
                    required
                    name="projectName"
                    value={formData.projectName}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    select
                    label="Project Tag"
                    required
                    name="projectTag"
                    value={formData.projectTag}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  >
                    <MenuItem value="Tag 1">Tag 1</MenuItem>
                    <MenuItem value="Tag 2">Tag 2</MenuItem>
                  </TextField>
                  <TextField
                    fullWidth
                    select
                    label="Completion Quarter"
                    required
                    name="quarter"
                    value={formData.completionDate.quarter}
                    onChange={handleCompletionDateChange}
                    sx={{ mb: 2 }}
                  >
                    <MenuItem value="Q1">Q1</MenuItem>
                    <MenuItem value="Q2">Q2</MenuItem>
                    <MenuItem value="Q3">Q3</MenuItem>
                    <MenuItem value="Q4">Q4</MenuItem>
                  </TextField>
                  <TextField
                    fullWidth
                    type="number"
                    label="Completion Year"
                    required
                    name="year"
                    value={formData.completionDate.year}
                    onChange={handleCompletionDateChange}
                    sx={{ mb: 2 }}
                    InputProps={{ inputProps: { min: 2024, max: 2100 } }}
                  />
                  <TextField
                    fullWidth
                    select
                    label="Project Status"
                    required
                    name="projectStatus"
                    value={formData.projectStatus}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  >
                    <MenuItem value="CONSTRUCTION">CONSTRUCTION</MenuItem>
                    <MenuItem value="COMPLETED">COMPLETED</MenuItem>
                    <MenuItem value="PLANNED">PLANNED</MenuItem>
                  </TextField>
                  <TextField
                    fullWidth
                    label="Floors"
                    required
                    name="floors"
                    value={formData.floors}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="Furnishing"
                    required
                    name="furnishing"
                    value={formData.furnishing}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="Service Charge"
                    required
                    name="serviceCharge"
                    value={formData.serviceCharge}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="Readiness Progress"
                    required
                    name="readinessProgress"
                    value={formData.readinessProgress}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    select
                    label="Currency"
                    required
                    name="currency"
                    value={formData.currency}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  >
                    <MenuItem value="USD">USD</MenuItem>
                    <MenuItem value="AED">AED</MenuItem>
                  </TextField>
                  <TextField
                    fullWidth
                    select
                    label="Size Unit"
                    required
                    name="sizeUnit"
                    value={formData.sizeUnit}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  >
                    <MenuItem value="Square Meter">Square Meter</MenuItem>
                    <MenuItem value="Square Feet">Square Feet</MenuItem>
                  </TextField>
                  <TextField
                    fullWidth
                    label="Country"
                    required
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="District"
                    required
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="City"
                    required
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  />
                  <Typography variant="subtitle1" sx={{ mt: 2 }}>
                    Project Images
                  </Typography>
                  <Button
                    variant="contained"
                    component="label"
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Upload Image 1
                    <input
                      type="file"
                      multiple
                      onChange={(e) => handleFileChange(e, "projectImages")}
                    />
                  </Button>
                </>
              )}
              {activeStep === 1 && (
                <>
                  <TextField
                    fullWidth
                    label="Project Overview"
                    required
                    name="projectGeneralFacts"
                    value={formData.projectGeneralFacts}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="Project General Facts"
                    required
                    name="projectFinishingAndMaterials"
                    value={formData.projectFinishingAndMaterials}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="Finishing and material"
                    required
                    name="projectKitchenAndAppliances"
                    value={formData.projectKitchenAndAppliances}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="Furnishing Details"
                    required
                    name="projectFurnishingDetails"
                    value={formData.projectFurnishingDetails}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  />
                </>
              )}
              {activeStep === 2 && (
                <>
                  <Typography variant="subtitle1" sx={{ mt: 2 }}>
                    Project Images
                  </Typography>
                  <Button
                    variant="contained"
                    component="label"
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Upload Exterior Image
                    <input
                      type="file"
                      multiple
                      onChange={(e) => handleFileChange(e, "exteriorImages")}
                    />
                  </Button>
                  <Button
                    variant="contained"
                    component="label"
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Upload Interior Image
                    <input
                      type="file"
                      multiple
                      onChange={(e) => handleFileChange(e, "interiorImages")}
                    />
                  </Button>
                </>
              )}
              <Box sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleNext}
                  sx={{ mr: 1 }}
                >
                  Finish
                </Button>
                <Button
                  variant="outlined"
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                  disabled={activeStep === 0}
                >
                  Back
                </Button>
                <Button
                  variant="outlined"
                  onClick={handleReset}
                  disabled={activeStep === 0}
                >
                  Reset
                </Button>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
