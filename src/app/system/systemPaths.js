const allPaths = {
  // Nature Care Path
  ncp: "Nature Care Path",
  ncpValue: 0,
  // Animal Care Path
  acp: "Animal Care Path",
  acpValue: 0,
  // Human Care Path
  hcp: "Human Care Path",
  hcpValue: 0,
};

for (const [key, value] of Object.entries(allPaths)) {
  console.log(`${key}: ${value}`);
}
