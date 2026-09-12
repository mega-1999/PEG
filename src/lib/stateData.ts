export interface StateLink {
  label: string;
  url: string;
  tooltip?: string;
  }

export interface StateData {
  state: string;
  links: StateLink[];
}

export const stateData: StateData[] = [
  {
    state: "Alabama",
    links: [
      {
        label: "Standard Drawings",
        url: "https://alletting.alabama.gov/Docs/Standard_Drawings/StdDrawingSelect.html",
        tooltip: "Alabama standards available",
      },
    ],
  }, {
    state: "Alaska",
    links: [
      {
        label: "Standard Plans",
        url: "https://dot.alaska.gov/stwddes/dcsprecon/standardplans.shtml",
        tooltip: "Alaska standards available",
      },
    ],
  },
  {
    state: "Arizona",
    links: [
      {
        label: "Roadway Standard Drawings",
        url: "https://azdot.gov/business/engineering-and-construction/roadway-engineering/roadway-design/construction-standard",
        tooltip: "Arizona standards available",
      },
      {
        label: "Bridge Structure Detail Drawings",
        url: "https://azdot.gov/business/engineering-and-construction/bridge/bridge-design-services/structure-detail-drawings",
        tooltip: "Other Arizona standards",
      },
    ],
  },
  {
    state: "Arkansas",
    links: [
      {
        label: "Standard Roadway Drawings",
        url: "https://www.arkansas.gov/divisions/roadway-design/standard-roadway-drawings/",
        tooltip: "Arkansas standards available",
      },
      {
        label: "List of Standard Drawings",
        url: "https://www.arkansas.gov/divisions/bridge/list-of-standard-drawings/",
        tooltip: "Other Arkansas standards",
      },
    ],
  },
  {
    state: "California",
    links: [
      {
        label: "Standard Plans",
        url: "https://dot.ca.gov/programs/design/manual-highway-design-manual-hdm/cadd-hd",
        tooltip: "California standards available",
      },
    ],
  },
  {
    state: "Colorado",
    links: [
      {
        label: "M Standards",
        url: "https://www.codot.gov/business/designsupport/mstandards",
        tooltip: "Colorado standards available",
      },
      {
        label: "S Standards",
        url: "https://www.codot.gov/safety/traffic-safety/design/s-standards",
        tooltip: "Other Colorado standards",
      },
    ],
  },
  {
    state: "Connecticut",
    links: [
      {
        label: "Standard Drawings and Details",
        url: "https://www.ct.gov/dot/cwp/view.asp?a=3212&q=414742",
        tooltip: "Connecticut standards available",
      },
    ],
  },
  {
    state: "Delaware",
    links: [
      {
        label: "Construction Details",
        url: "https://www.deldot.gov/Publications/manuals/const_details/",
        tooltip: "Delaware standards available",
      },
    ],
  },
  {
    state: "District of Columbia",
    links: [
      {
        label: "Standard Specifications for Highways and Structures",
        url: "https://ddot.dc.gov/page/standard-specifications-and-drawings",
        tooltip: "District of Columbia standards available (opens in a new window)",
      },
    ],
  },
  {
    state: "Florida",
    links: [
      {
        label: "Standard Plans",
        url: "https://www.fdot.gov/design/standardplans/",
        tooltip: "Florida standards available",
      },
    ],
  },
  {
    state: "Georgia",
    links: [
      {
        label: "Construction Standards and Details",
        url: "http://mydocs.georgia.gov/info/gdotpubs/ConstructionStandardsAndDetails/Forms/AllItems.aspx",
        tooltip: "Georgia standards available",
      },
    ],
  },
  {
    state: "Guam",
    links: [
      {
        label: "Standard Plans",
        url: "https://www.guamtransportationprogram.com/about-the-program/design-and-construction-resources",
        tooltip: "Guam standards available (opens in a new window)",
      },
    ],
  },
  {
    state: "Hawaii",
    links: [
      {
        label: "Standard Plans",
        url: "https://hidot.hawaii.gov/highways/s2005-standard-specifications/",
        tooltip: "Hawaii standards NOT available",
      },
    ],
  },
  {
    state: "Idaho",
    links: [
      {
        label: "Standard Drawings",
        url: "https://apps.itd.idaho.gov/apps/StandardDrawings/StandardDrawings.htm",
        tooltip: "Idaho standards available",
      },
    ],
  },
  {
    state: "Illinois",
    links: [
      {
        label: "Highway Standards",
        url: "https://idot.illinois.gov/doing-business/industry-marketplace/construction-services/highway-standards-and-district-specific-details.html",
        tooltip: "Illinois standards available",
      },
    ],
  },
  {
    state: "Indiana",
    links: [
      {
        label: "Standard Drawings",
        url: "https://www.in.gov/dot/div/contracts/standards/drawings/",
        tooltip: "Indiana standards available",
      },
    ],
  },
  {
    state: "Iowa",
    links: [
      {
        label: "Standard Road Plans",
        url: "https://iowadot.gov/design/standard-road-plans",
        tooltip: "Iowa standards available",
      },
    ],
  },
  {
    state: "Kansas",
    links: [
      {
        label: "KART Standard Drawings",
        url: "https://kart.ksdot.org/",
        tooltip: "Kansas KART standards repository available",
      },
    ],
  },
  {
    state: "Kentucky",
    links: [
      {
        label: "Standard Drawings",
        url: "https://transportation.ky.gov/Highway-Design/Pages/Standard-Drawings.aspx",
        tooltip: "Kentucky standards available",
      },
    ],
  },
  {
    state: "Louisiana",
    links: [
      {
        label: "Standard Plans",
        url: "https://wwwsp.dotd.la.gov/Inside_LaDOTD/Divisions/Engineering/Standard_Plans/Pages/default.aspx",
        tooltip: "Louisiana standards available",
      },
    ],
  },
  {
    state: "Maine",
    links: [
      {
        label: "Standard Details",
        url: "https://www.maine.gov/mdot/cadd/standarddetails/",
        tooltip: "Maine standards available",
      },
    ],
  },
  {
    state: "Maryland",
    links: [
      {
        label: "Standard Details",
        url: "https://apps.roads.maryland.gov/businesswithsha/bizwithsha/standarddetails/index.asp",
        tooltip: "Maryland SHA standard details",
      },
    ],
  },
  {
    state: "Massachusetts",
    links: [
      {
        label: "Construction and Traffic Standard Details",
        url: "https://www.mass.gov/info-details/construction-standard-details",
        tooltip: "Massachusetts standards available",
      },
    ],
  },
  {
    state: "Michigan",
    links: [
      {
        label: "Standard Plans",
        url: "https://mdotjboss.state.mi.us/stdplan/standardPlansHome.htm",
        tooltip: "Michigan standards available (opens in a new window)",
      },
    ],
  },
  {
    state: "Minnesota",
    links: [
      {
        label: "Standard Plans",
        url: "https://www.dot.state.mn.us/design/design-standards/standard-plans.html",
        tooltip: "Minnesota standards available (opens in a new window)",
      },
    ],
  },
  {
    state: "Mississippi",
    links: [
      {
        label: "Standard Drawings",
        url: "https://mdot.ms.gov/portal/engineering_standards_guides_manuals",
        tooltip: "Mississippi standards available",
      },
    ],
  },
  {
    state: "Missouri",
    links: [
      {
        label: "Standard Plans",
        url: "https://www.modot.org/missouri-standard-plans-highway-construction",
        tooltip: "Missouri standards available (opens in a new window)",
      },
    ],
  },
  {
    state: "Montana",
    links: [
      {
        label: "Detailed Drawings",
        url: "https://www.mdt.mt.gov/business/contracting/detailed-drawings.aspx",
        tooltip: "Montana standards available",
      },
    ],
  },
  {
    state: "Nebraska",
    links: [
      {
        label: "Standard Plans",
        url: "https://dot.nebraska.gov/business-center/design-consultant/stand-spec-manual/",
        tooltip: "Nebraska standards available",
      },
    ],
  },
  {
    state: "Nevada",
    links: [
      {
        label: "Standard Plans",
        url: "https://www.dot.nv.gov/doing-business/about-ndot/ndot-divisions/engineering/design/standard-specifications-and-plans",
        tooltip: "Nevada standards available",
      },
    ],
  },
  {
    state: "New Hampshire",
    links: [
      {
        label: "Standard Plans",
        url: "https://www.dot.nh.gov/doing-business-nhdot/contractors/standard-plans-road-construction",
        tooltip: "New Hampshire standards available",
      },
    ],
  },
  {
    state: "New Jersey",
    links: [
      {
        label: "Standard Details and Drawings",
        url: "https://www.nj.gov/transportation/eng/CADD/v8/stdconsdtls.shtml",
        tooltip: "New Jersey standards available",
      },
    ],
  },
  {
    state: "New Mexico",
    links: [
      {
        label: "Standard Drawings",
        url: "https://www.dot.nm.gov/infrastructure/plans-specifications-estimates-pse-bureau/standards/",
        tooltip: "New Mexico standards available",
      },
    ],
  },
  {
    state: "New York",
    links: [
      {
        label: "Standard Sheets and Bridge Detail Sheets",
        url: "https://www.dot.ny.gov/main/business-center/engineering/cadd-info/drawings",
        tooltip: "New York standards available",
      },
    ],
  },
  {
    state: "North Carolina",
    links: [
      {
        label: "Roadway Standard Drawings",
        url: "https://nc.gov/resources/Specifications/Pages/2024-Roadway-Standard-Drawings.aspx",
        tooltip: "North Carolina standards available",
      },
    ],
  },
  {
    state: "North Dakota",
    links: [
      {
        label: "Standard Drawings",
        url: "https://www.dot.nd.gov/construction-and-planning/construction-planning/research/cadd-standards/standard-drawings",
        tooltip: "North Dakota standards available",
      },
    ],
  },
  {
    state: "Ohio",
    links: [
      {
        label: "Standard Construction Drawings",
        url: "https://www.transportation.ohio.gov/working/publications/all-publications",
        tooltip: "Ohio standards available",
      },
    ],
  },
  {
    state: "Oklahoma",
    links: [
      {
        label: "Design Standards and Specifications Drawings",
        url: "https://www.odot.org/cnstrctengr.htm",
        tooltip: "Oklahoma standards available (opens in a new window)",
      },
    ],
  },
  {
    state: "Oregon",
    links: [
      {
        label: "Standard Drawings and Details",
        url: "https://www.oregon.gov/odot/engineering/pages/standards.aspx",
        tooltip: "Oregon standards available",
      },
    ],
  },
  {
    state: "Pennsylvania",
    links: [
      {
        label: "Roadway Construction Standards",
        url: "https://www.pa.gov/content/dam/copapwp-pagov/en/penndot/documents/public/pubsforms/publications/pub-72m/72m_2010.pdf",
        tooltip: "Pennsylvania standards available",
      },
      {
        label: "Bridge Standard Drawings",
        url: "https://www.pa.gov/agencies/penndot/programs-and-doing-business/bridges/bridge-plans-standards-and-specifications.html",
        tooltip: "Other Pennsylvania standards",
      },
    ],
  },
  {
    state: "Puerto Rico",
    links: [
      {
        label: "Planos Modelo",
        url: "https://act.dtop.pr.gov/planos-modelo/",
        tooltip: "Puerto Rico standards available",
      },
    ],
  },
  {
    state: "Rhode Island",
    links: [
      {
        label: "Standard Details Drawings",
        url: "http://www.dot.ri.gov/business/contractorsandconsultants.php",
        tooltip: "Rhode Island standards available",
      },
    ],
  },
  {
    state: "South Carolina",
    links: [
      {
        label: "Standard Drawings",
        url: "https://www.scdot.org/business/standard-drawings.aspx",
        tooltip: "South Carolina standards available (opens in a new window)",
      },
    ],
  },
  {
    state: "South Dakota",
    links: [
      {
        label: "Standard Plates",
        url: "https://dot.sd.gov/doing-business/engineering/design-services/standard-plates",
        tooltip: "South Dakota standards available",
      },
    ],
  },
  {
    state: "Tennessee",
    links: [
      {
        label: "Standard Drawings",
        url: "https://www.tn.gov/tdot/state-engineering-technical-training/production-support/standard-drawings-library/standard-roadway-drawings.html",
        tooltip: "Tennessee standards available",
      },
    ],
  },
  {
    state: "Texas",
    links: [
      {
        label: "Standard Plans",
        url: "https://www.dot.state.tx.us/business/standardplanfiles.htm",
        tooltip: "Texas standards available (opens in a new window)",
      },
    ],
  },
  {
    state: "Utah",
    links: [
      {
        label: "Standard Drawings",
        url: "https://www.udot.utah.gov/connect/business/standards/",
        tooltip: "Utah standards available",
      },
    ],
  },
  {
    state: "Vermont",
    links: [
      {
        label: "Standard Drawings",
        url: "https://vtrans.vermont.gov/cadd/downloads/standard-drawings",
        tooltip: "Vermont standards available",
      },
    ],
  },
  {
    state: "Virginia",
    links: [
      {
        label: "Road and Bridge Standards",
        url: "https://www.vdot.virginia.gov/doing-business/technical-guidance-and-support/technical-guidance-documents/road-and-bridge-standards/",
        tooltip: "Virginia standards available",
      },
    ],
  },
  {
    state: "Washington",
    links: [
      {
        label: "Standard Plans",
        url: "https://wsdot.wa.gov/engineering-standards/all-manuals-and-standards/standard-plans",
        tooltip: "Washington standards available",
      },
    ],
  },
  {
    state: "West Virginia",
    links: [
      {
        label: "Standard Details Book",
        url: "https://transportation.wv.gov/highways/engineering/Pages/Details.aspx",
        tooltip: "West Virginia standards available",
      },
    ],
  },
  {
    state: "Wisconsin",
    links: [
      {
        label: "Standard Detail Drawings",
        url: "https://wisconsindot.gov/Pages/doing-bus/eng-consultants/cnslt-rsrces/rdwy/sdd.aspx",
        tooltip: "Wisconsin standards available",
      },
      {
        label: "Bridge Manual Standard Drawings",
        url: "https://wisconsindot.gov/Pages/doing-bus/eng-consultants/cnslt-rsrces/strct/bridge-manual-standards.aspx",
        tooltip: "Other Wisconsin standards",
      },
    ],
  },
  {
    state: "Wyoming",
    links: [
      {
        label: "Standard Plans",
        url: "http://www.dot.state.wy.us/home/engineering_technical_programs/manuals_publications/standardplans.html",
        tooltip: "Wyoming standards available (opens in a new window)",
      },
    ],
  },
  {
    state: "FLH Divisions (FHWA)",
    links: [
      {
        label: "Standard Drawings",
        url: "https://highways.dot.gov/federal-lands/std-drawings",
        tooltip: "FLH Divisions (FHWA) standards available",
      },
    ],
  },
];
