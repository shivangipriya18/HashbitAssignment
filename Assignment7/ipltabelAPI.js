
async function fetchIplPointsTable() {
    try {
     
      const response = await fetch('https://api.example.com/ipl/points');
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching IPL points table data:', error);
      return null; 
    }
  }
  
  
  function displayIplPointsTable(data) {
    if (!data) {
      console.log('Error: Could not retrieve IPL points table data.');
      return;
    }
  
    console.table([
      { Team: 'Rank', Points: 'Pts', NetRunRate: 'NRR' }, 
      ...data.map((team) => ({
        Team: team.teamName,
        Points: team.points,
        'Net Run Rate': team.netRunRate, 
      }))
    ]);
  }
  
  
  (async () => {
    const iplData = await fetchIplPointsTable();
    displayIplPointsTable(iplData);
  })();
  
