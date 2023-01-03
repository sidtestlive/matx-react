const transformArray=(array)=>array.map((client)=>({name:client.client_name,iconText:'Si', path:'/session/signin'}));

const receivedArray =   [
  {
      "client_id": 42,
      "client_name": "Health System"
  },
  {
      "client_id": 266,
      "client_name": "FemTec"
  },
  {
      "client_id": 136,
      "client_name": "State Employees"
  },
  {
      "client_id": 274,
      "client_name": "City Municipality"
  },
  {
      "client_id": 334,
      "client_name": "IMA-6169"
  },
  {
      "client_id": 374,
      "client_name": "Worksite Clinic Company"
  },
  {
      "client_id": 624,
      "client_name": "IMA-All Groups"
  },
  {
      "client_id": 737,
      "client_name": "SIH Groups"
  },
  {
      "client_id": 866,
      "client_name": "Non-Profit Organization"
  },
  {
      "client_id": 1135,
      "client_name": "TIFT"
  },
  {
      "client_id": 1151,
      "client_name": "Std. Dashboard content (AML)"
  },
  {
      "client_id": 995,
      "client_name": "ACO"
  },
  {
      "client_id": 1511,
      "client_name": "AultCare"
  },
  {
      "client_id": 1524,
      "client_name": "Chickasaw Nation"
  },
  {
      "client_id": 1676,
      "client_name": "Farm Bureau of Tennessee"
  },
  {
      "client_id": 1739,
      "client_name": "Health Trust - Client A"
  },
  {
      "client_id": 1740,
      "client_name": "Health Trust - Client B"
  },
  {
      "client_id": 1979,
      "client_name": "Desoto Memorial"
  },
  {
      "client_id": 2039,
      "client_name": "Arvest Bank"
  },
  {
      "client_id": 2132,
      "client_name": "Upson Regional"
  },
  {
      "client_id": 2173,
      "client_name": "Crisp Regional"
  },
  {
      "client_id": 1511,
      "client_name": "WH_User_Attributes"
  },
  {
      "client_id": 2244,
      "client_name": "Demo"
  },
  {
      "client_id": 2223,
      "client_name": "Demo-AULTCARE"
  },
  {
      "client_id": 2270,
      "client_name": "Health Trust - A"
  },
  {
      "client_id": 2401,
      "client_name": "Mimedx"
  },
  {
      "client_id": 2315,
      "client_name": "Demo Client"
  },
  {
      "client_id": 2338,
      "client_name": "Coffee County"
  },
  {
      "client_id": 2358,
      "client_name": "Howard Industries"
  },
  {
      "client_id": 2383,
      "client_name": "Mason City Schools"
  },
  {
      "client_id": 2465,
      "client_name": "Health Trust - B"
  },
  {
      "client_id": 2491,
      "client_name": "Southwell"
  },
  {
      "client_id": 2502,
      "client_name": "RWGriffin"
  },
  {
      "client_id": 2872,
      "client_name": "Kairos Logs"
  },
  {
      "client_id": 2532,
      "client_name": "Dl Lee"
  },
  {
      "client_id": 2860,
      "client_name": "DEMO_All_Clients_Test_P1"
  }
]

export const navigations = [
  { name: 'Dashboard', path: '/dashboard/default', icon: 'dashboard' },
  { label: 'PAGES', type: 'label' },
  {
    name: 'Clients',
    icon: 'security',
    children: [
      // { name: 'Sign in', iconText: 'SI', path: '/session/signin' },
      // { name: 'Sign up', iconText: 'SU', path: '/session/signup' },
      // { name: 'Forgot Password', iconText: 'FP', path: '/session/forgot-password' },
      // { name: 'Error', iconText: '404', path: '/session/404' },
      ...transformArray(receivedArray)
    ],
  },
  { label: 'Components', type: 'label' },
  {
    name: 'Components',
    icon: 'favorite',
    badge: { value: '30+', color: 'secondary' },
    children: [
      { name: 'Auto Complete', path: '/material/autocomplete', iconText: 'A' },
      { name: 'Buttons', path: '/material/buttons', iconText: 'B' },
      { name: 'Checkbox', path: '/material/checkbox', iconText: 'C' },
      { name: 'Dialog', path: '/material/dialog', iconText: 'D' },
      { name: 'Expansion Panel', path: '/material/expansion-panel', iconText: 'E' },
      { name: 'Form', path: '/material/form', iconText: 'F' },
      { name: 'Icons', path: '/material/icons', iconText: 'I' },
      { name: 'Menu', path: '/material/menu', iconText: 'M' },
      { name: 'Progress', path: '/material/progress', iconText: 'P' },
      { name: 'Radio', path: '/material/radio', iconText: 'R' },
      { name: 'Switch', path: '/material/switch', iconText: 'S' },
      { name: 'Slider', path: '/material/slider', iconText: 'S' },
      { name: 'Snackbar', path: '/material/snackbar', iconText: 'S' },
      { name: 'Table', path: '/material/table', iconText: 'T' },
    ],
  },
  {
    name: 'Charts',
    icon: 'trending_up',
    children: [{ name: 'Echarts', path: '/charts/echarts', iconText: 'E' }],
  },
  {
    name: 'Documentation',
    icon: 'launch',
    type: 'extLink',
    path: 'http://demos.ui-lib.com/matx-react-doc/',
  },
];
