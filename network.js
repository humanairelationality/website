(async function () {

    const response = await fetch(
        "https://humanairelationality.org/network.json"
    );

    const sites = await response.json();

    /*
     const sites = [
         {
             name: "HAIR",
             url: "https://humanairelationality.org"
         },
         {
             name: "Biasology",
             url: "https://biasology.org"
         },
         {
             name: "Relational Co-Authorship",
             url: "https://rca.hair"
         }
     ];
     */
    const currentHost = window.location.hostname.replace("www.", "");

    const currentIndex = sites.findIndex(site =>
        new URL(site.url).hostname.replace("www.", "") === currentHost
    );

    if (currentIndex === -1) return;

    const prev =
        sites[(currentIndex - 1 + sites.length) % sites.length];

    const next =
        sites[(currentIndex + 1) % sites.length];

    const random =
        sites[Math.floor(Math.random() * sites.length)];

    document.getElementById("hair-network").innerHTML = `
    <div style="
      margin-top:40px;
      padding:16px;
      border-top:1px solid #ccc;
      text-align:center;
      font-family:sans-serif;
      font-size:14px;
    ">
      <div style="margin-bottom:10px;font-weight:600;">
         <a href="https://humanairelationality.org" target="_blank">
        Part of the H.A.I.R. Research Network
      </a>
      </div>
 

      <a href="${prev.url}">
        ← PREVIOUS 
      </a>

      ·

      <a href="${random.url}">
        RANDOM
      </a>

      ·

      <a href="${next.url}">
        NEXT →
      </a>
    </div>
  `;

})();