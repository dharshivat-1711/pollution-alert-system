function checkPollution() {
    const value = document.getElementById("pollutionValue").value;
    const result = document.getElementById("result");

    const SAFE_LIMIT = 60; // PM2.5 safe limit

    if (value === "") {
        result.style.color = "orange";
        result.innerText = "⚠️ Please enter a value.";
        return;
    }

    if (value > SAFE_LIMIT) {
        result.style.color = "red";
        result.innerText = "🚨 ALERT: Pollution level is HIGH! Stay indoors.";
    } else {
        result.style.color = "green";
        result.innerText = "✅ SAFE: Pollution level is within safe limits.";
    }
}
