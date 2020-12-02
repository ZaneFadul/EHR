const role_sidebarinfo = {
  'patient': [
    'My Re-medi Health Record',
    'Appointments',
    'Prescriptions',
    'Medical Records',
    'My Insurance Plan',
    'Settings'
  ],
  'staff': [
    'Patients',
    'Appointments',
    'Messages',
    'Settings'
  ],
  'insurance': [
    'Clients',
    'Settings'
  ]
};

const sidebar_to_comp = {
  'My Re-medi Health Record': 'RemediRecord',
  'Appointments': 'Appointments',
  'Prescriptions': 'Prescriptions',
  'Medical Records': 'Records',
  'My Insurance Plan': 'InsurancePlan',
  'Settings': 'Settings',
  'Patients': 'Patients',
  'Messages': 'Messages',
  'Clients': 'Clients'
};

module.exports = {
  role_sidebarinfo,
  sidebar_to_comp
};
