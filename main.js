"use strict";

const soap = require("strong-soap").soap;
const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());
app.use(express.json());

const XMLHandler = soap.XMLHandler;
const xmlHandler = new XMLHandler();

const util = require("util");
// wsdl of the web service this client is going to invoke. For local wsdl you can use, url = './wsdls/stockquote.wsdl'
// const url = 'https://pureservices.salesdemo.ssp-development.com/PureWCFServices/PureMessagingService.svc?singleWsdl';
const url = "./PMS-single-Policy.wsdl.xml";

const requestArgs = {
  PolicyProcessRequest: {
    BranchCode: "HeadOff",
    AddNewParty: "true",
    AgentCode: "AONUK",
    ClientCodeSpecified: "false",
    ClientID: "0",
    CurrencyCode: "GBP",
    CurrencyCodeSpecified: "false",
    Item: {
      $attributes: {
        $xsiType: {
          type: "BasePartyPCType",
          xmlns: "http://www.siriusfs.com/SFI/SAM/BaseTypes/20050929",
        },
      },
      BranchCode: "HeadOff",
      AccountExecutive: null,
      Addresses: {
        BaseAddressType: {
          AddressLine1: "6 Dale Street",
          AddressLine2: "Graiseley",
          AddressLine3: "Wolverhampton",
          AddressLine4: "West Midlands",
          AddressLine5: null,
          AddressLine6: null,
          AddressLine7: null,
          AddressLine8: null,
          AddressLine9: null,
          AddressTypeCode: "Item3131XCO",
          CountryCode: "GBR",
          PostCode: "WV3 0PJ",
        },
      },
      Contacts: null,
      Currency: "GBP",
      FileCode: null,
      TPIntroducer: null,
      TPUserCode: null,
      AlternativeId: null,
      DateOfBirth: "0001-01-01T00:00:00Z",
      DateOfBirthSpecified: "false",
      EmployersBusinessCode: null,
      EmploymentStatusCode: "C",
      EmploymentStatusCodeSpecified: "false",
      Forename: "Rahul",
      GenderCode: null,
      Initials: "R",
      MaritalStatusCode: "D",
      MaritalStatusCodeSpecified: "false",
      OccupationCode: null,
      Surname: "Jaiswal",
      Title: "Mr",
    },
    Policy: {
      BranchCode: "HeadOff",
      AlternateReference: null,
      AnalysisCode: null,
      BusinessTypeCode: null,
      CoInsurancePlacement: null,
      CoverEndDate: "2024-12-31T00:00:00Z",
      CoverStartDate: "2024-02-01T00:00:00Z",
      CurrencyCode: "GBP",
      Description: "BDX Imported Policy",
      InsuredName: null,
      IsMarketPlacePolicy: "false",
      LastTransDescription: null,
      MTAReasonCode: null,
      NewQuoteRef: "POLBDX13762019",
      OldPolicyNumber: null,
      PartyKey: null,
      PolicyProcessType: "Bind",
      PolicyStatusCode: "POLICY",
      ProductCode: "SSPPVTM",
      QuoteRef: "POLBDX13762019",
      SkipNumberingScheme: "false",
      TransactionDueDate: "0001-01-01T00:00:00Z",
      TransactionTypeCode: "POLICY",
      UnderwritingYearCode: null,
      CoInsurers: null,
      CommissionRate: "0",
      CommissionValue: "500",
      DeletePolicyUnderRenewal: "1",
      DoNotCopyRiskAtRenSelection: "1",
      IsBDXRequest: "true",
      OverrideNetPremium: "0",
      Risks: {
        BaseRiskType: {
          BranchCode: "HeadOff",
          DataModelCode: "SSPPMPROD",
          OriginalRiskKey: "0",
          OriginalRiskKeySpecified: "false",
          ProductBuilderDetail: {
            BaseProductBuilderRiskType: [
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/VEHICLES/@REG_NUMBER",
                  Value: "1",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/GENERAL/@QUICK_QUOTE",
                  Value: "0",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/GENERAL/@FULL_QUOTE",
                  Value: "1",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/GENERAL/@USERLEVEL",
                  Value: "3",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/GENERAL/@ISBROKER",
                  Value: "0",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/GENERAL/@LOGGEDINUSER",
                  Value: "BDX",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/GENERAL/@NEXUSQS",
                  Value: "1",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/DRIVER/@IS_POLICYHOLDER",
                  Value: "1",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/DRIVER/@TITLE",
                  Value: "128",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/DRIVER/@FIRST_NAME",
                  Value: "Eric",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/DRIVER/@LAST_NAME",
                  Value: "Smith BDX",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/DRIVER/@DOB",
                  Value: "1990-01-01",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/DRIVER/@LICENCE",
                  Value: "1",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/DRIVER/@LICENCE_NO",
                  Value: "LN00001",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/DRIVER/@LICENCE_YEARS",
                  Value: "5",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/VEHICLES/@REG_NUMBER",
                  Value: "XBR151GP",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/VEHICLES/@MAKE",
                  Value: "BMW",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/VEHICLES/@MODEL",
                  Value: "116D SPORT",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/VEHICLES/@YEAR_OF_MAKE",
                  Value: "2020",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/VEHICLES/@ENGINE_CAPACITY",
                  Value: "1496",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/VEHICLES/@DOOR_PLAN",
                  Value: "5 Door Hatchback",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/VEHICLES/@CURRENT_VALUE",
                  Value: "25000",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/VEHICLES/@COVER_TYPE",
                  Value: "1",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/VEHICLES/@COVER_TYPECODE",
                  Value: "COMP",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/VEHICLES/@VEHICLE_USAGE",
                  Value: "1",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/VEHICLES/@VEHICLE_USAGECODE",
                  Value: "SDP",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/VEHICLES/@ANNUAL_MILEAGE",
                  Value: "1000",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/VEHICLES/@BASIC_PREMIUM",
                  Value: "2500",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/VEHICLES/@PREMIUM",
                  Value: "2500",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/SOF/@INSURANCE_CANCELLED",
                  Value: "0",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/SOF/@CONVICTIONS",
                  Value: "0",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/SOF/@MEDICAL",
                  Value: "0",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/SOF/@CLAIMS",
                  Value: "0",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/PREMIUM_SUMMARY/@ANNUAL_COMP_PREMIUM",
                  Value: "2500",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/PREMIUM_SUMMARY/@TRANS_COMP_PREMIUM",
                  Value: "2500",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/PREMIUM_SUMMARY/@ANNUAL_TPFT_PREMIUM",
                  Value: "2500",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/PREMIUM_SUMMARY/@TRANS_TPFT_PREMIUM",
                  Value: "2500",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/PREMIUM_SUMMARY/@ANNUAL_TPO_PREMIUM",
                  Value: "2500",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/PREMIUM_SUMMARY/@TRANS_TPO_PREMIUM",
                  Value: "2500",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/PREMIUM_SUMMARY/@TOTAL_ANNUAL_PREMIUM",
                  Value: "2500",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/PREMIUM_SUMMARY/@TOTAL_TRANS_PREMIUM",
                  Value: "2500",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/PREMIUM_SUMMARY/@FINAL_ANNUAL_PREMIUM",
                  Value: "2500",
                },
              },
              {
                ProductBuilderData: {
                  ItemName:
                    "/DATA_SET/RISK_OBJECTS/SSPPMPROD_POLICY_BINDER/PREMIUM_SUMMARY/@FINAL_TRANS_PREMIUM",
                  Value: "2500",
                },
              },
            ],
          },
          QuoteTimeStamp: null,
          RiskDescription: "XBR151GP",
          RiskFolderKey: "0",
          RiskFolderKeySpecified: "false",
          RiskTypeCode: "SSPPVTM",
          RunDefaultRules: "false",
          ScreenCode: "MPPROD",
          Taxes: {
            BaseTaxesType: {
              Amount: "0",
              Description: null,
              TaxBandCode: "IPT",
              TaxRate: "0",
            },
          },
          XMLDataSet: null,
        },
      },
      Taxes: {
        BaseTaxesType: {
          Amount: "120",
          Description: null,
          TaxBandCode: "IPT",
          TaxRate: "0",
        },
      },
    },
    UpdateParty: "true",
  },
};

app.post("/soap-service", (req, res) => {
  const options = {};
  soap.createClient(url, options, async (err, client) => {
    const method = await client["PolicyProcess"];
    method(req.body, (err, result, envelope, soapHeader) => {
      if (err) {
        console.log(err);
        return;
      }

      res.send(result);
    });
  });
});

app.listen(3000, () => console.log("App running on Port: 3000"));
