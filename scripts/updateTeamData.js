const fs = require('fs');
const path = require('path');

// Path to team.json
const teamDataPath = path.join(__dirname, '..', 'data', 'team.json');

// Read the current team data
const teamData = require(teamDataPath);

// Function to generate email from name
const generateEmail = (name) => {
  return `${name.toLowerCase().replace(/\s+/g, '.')}@team-eta.com`;
};

// Function to generate LinkedIn URL from name
const generateLinkedIn = (name) => {
  return `https://linkedin.com/in/${name.toLowerCase().replace(/\s+/g, '-')}`;
};

// Update each member with email and LinkedIn
teamData.departments.forEach(department => {
  department.members.forEach(member => {
    // Only update if the fields don't exist or are empty
    if (!member.email) {
      member.email = generateEmail(member.name);
    }
    if (!member.linkedin || member.linkedin === '#') {
      member.linkedin = generateLinkedIn(member.name);
    }
  });
});

// Save the updated data back to team.json
fs.writeFileSync(
  teamDataPath,
  JSON.stringify(teamData, null, 2),
  'utf8'
);

console.log('✅ Team data updated with emails and LinkedIn profiles!');
