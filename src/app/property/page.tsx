import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

// Define Property interface to match GraphQL data
interface Property {
  id: string;
  projectName: string;
  projectTag: string;
  completionDate: {
    quarter: number;
    year: number;
  };
  projectStatus: string;
  unitType: string;
  floors: number;
  furnishing: string;
  serviceCharge: number;
  readinessProgress: number;
  currency: string;
  sizeUnit: string;
  country: string;
  district: string;
  city: string;
  projectImages: string[];
  projectGeneralFacts: string;
  projectFinishingAndMaterials: string;
  projectKitchenAndAppliances: string;
  projectFurnishingDetails: string;
  exteriorImages: string[];
  interiorImages: string[];
}

const fetchProperties = async (): Promise<Property[]> => {
  const response = await fetch("http://localhost:8000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
          query {
            findAllProperties {
              id
              projectName
              projectTag
              completionDate {
                quarter
                year
              }
              projectStatus
              unitType
              floors
              furnishing
              serviceCharge
              readinessProgress
              currency
              sizeUnit
              country
              district
              city
              projectImages
              projectGeneralFacts
              projectFinishingAndMaterials
              projectKitchenAndAppliances
              projectFurnishingDetails
              exteriorImages
              interiorImages
            }
          }
        `,
    }),
    cache: "no-store",
  });

  const { data } = await response.json();
  return data.findAllProperties;
};

const Property = async () => {
  const properties: Property[] = await fetchProperties();

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h2" gutterBottom>
        Property Page
      </Typography>

      <Grid container spacing={4}>
        {properties.map((property: Property) => (
          <Grid item xs={12} sm={6} md={4} key={property.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                <div className="bg-red-200 text-black p-2">Delete</div>
                  {property.projectName} ({property.projectTag})
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Status: {property.projectStatus}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Completion Date: Q{property.completionDate.quarter}{" "}
                  {property.completionDate.year}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Location: {property.city}, {property.district},{" "}
                  {property.country}
                </Typography>
              </CardContent>

              <CardContent>
                <Typography variant="h6">Project Images</Typography>
                <Grid container spacing={1}>
                  {property.projectImages.map((imgUrl, index) => (
                    <Grid item xs={4} key={index}>
                      <CardMedia
                        component="img"
                        height="100"
                        image={imgUrl}
                        alt={`${property.projectName} Project Image ${
                          index + 1
                        }`}
                        sx={{ borderRadius: 1 }}
                      />
                    </Grid>
                  ))}
                </Grid>

                <Typography variant="h6" sx={{ marginTop: 2 }}>
                  Exterior Images
                </Typography>
                <Grid container spacing={1}>
                  {property.exteriorImages.map((imgUrl, index) => (
                    <Grid item xs={4} key={index}>
                      <CardMedia
                        component="img"
                        height="100"
                        image={imgUrl}
                        alt={`${property.projectName} Exterior Image ${
                          index + 1
                        }`}
                        sx={{ borderRadius: 1 }}
                      />
                    </Grid>
                  ))}
                </Grid>

                <Typography variant="h6" sx={{ marginTop: 2 }}>
                  Interior Images
                </Typography>
                <Grid container spacing={1}>
                  {property.interiorImages.map((imgUrl, index) => (
                    <Grid item xs={4} key={index}>
                      <CardMedia
                        component="img"
                        height="100"
                        image={imgUrl}
                        alt={`${property.projectName} Interior Image ${
                          index + 1
                        }`}
                        sx={{ borderRadius: 1 }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </CardContent>

              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  General Facts: {property.projectGeneralFacts}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Finishing and Materials:{" "}
                  {property.projectFinishingAndMaterials}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Kitchen and Appliances: {property.projectKitchenAndAppliances}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Furnishing Details: {property.projectFurnishingDetails}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Property;
