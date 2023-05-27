document.addEventListener("DOMContentLoaded", function () {
  const redeemButtons = document.querySelectorAll(".redeem-button");
  const pointsElement = document.getElementById("points");

  redeemButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const pointsToDeduct = parseInt(this.getAttribute("data-points"));
      const currentPoints = parseInt(pointsElement.textContent);

      if (currentPoints >= pointsToDeduct) {
        const newPoints = currentPoints - pointsToDeduct;
        pointsElement.textContent = newPoints;
        this.parentElement.remove();
        console.log(`Successfully redeemed ${pointsToDeduct} points.`);
      } else {
        console.log("Insufficient points.");
      }
    });
  });
});
