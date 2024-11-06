import { gql } from "@apollo/client";

export const CREATE_PROPERTY_MUTATION = gql`
 mutation CreateProperty($createPropertyInput: CreatePropertyDto!) {
  createProperty(createPropertyInput: $createPropertyInput) {
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

`;
