
const date = new Date(document.lastModified);
document.getElementById("lastmod").innerHTML = `Last Modified: ${date}`;


const motives = [
    {
      id: "fc-1888",
      reason: "Tourism",
      averageRating: 3.9,
    },

    {
      id: "fc-2050",
      reason: "Live",
      averageRating: 4.5,
    },
    {
      id: "fs-1987",
      reason: "Invest",
      averageRating: 4.0,
    },
    {
      id: "ac-2000",
      reason: "Buy Good",
      averageRating: 4.7,
    },
    {
      id: "jj-1969",
      reason: "Entertainment",
      averageRating: 4.0,
    }
  ];

  document.addEventListener('DOMContentLoaded', () => {
    const motiveSelect = document.getElementById('motiveSelect');



    motives.forEach(motive => {
        
        const option = document.createElement('option');
        
        option.value = motive.id;
        option.textContent = motive.reason;
        motiveSelect.appendChild(option);
    });
});
