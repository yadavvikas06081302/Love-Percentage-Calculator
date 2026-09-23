function getPercentage(name1, name2) {
    let text = (name1 + name2).toLowerCase().replace(/\s/g, "");

    let total = 0;

    for (let i = 0; i < text.length; i++) {
        total += text.charCodeAt(i);
    }

    // Direction matters:
    // name1 + name2 gives a different result
    // from name2 + name1.
    let percentage = (total * 37 + text.length * 13) % 101;

    return percentage;
}

function getMessage(percentage) {
    if (percentage >= 90) {
        return "💖 Perfect Love!";
    } else if (percentage >= 75) {
        return "💕 Strong Love!";
    } else if (percentage >= 60) {
        return "❤️ Good Love!";
    } else if (percentage >= 40) {
        return "💗 There is a connection!";
    } else {
        return "💫 Keep building your bond!";
    }
}

function calculateLove(direction) {

    const boy = document.getElementById("boyName").value.trim();
    const girl = document.getElementById("girlName").value.trim();

    if (boy === "" || girl === "") {
        alert("Please enter both Boy and Girl names.");
        return;
    }

    let percentage;
    let directionText;
    let namesText;

    if (direction === "boyGirl") {

        percentage = getPercentage(boy, girl);

        directionText = "👦 Boy → Girl 👧";
        namesText = `${boy} ❤️ ${girl}`;

    } else {

        percentage = getPercentage(girl, boy);

        directionText = "👧 Girl → Boy 👦";
        namesText = `${girl} ❤️ ${boy}`;
    }

    document.getElementById("direction").innerText = directionText;
    document.getElementById("names").innerText = namesText;
    document.getElementById("percentage").innerText = percentage + "%";
    document.getElementById("message").innerText = getMessage(percentage);

    document.getElementById("result").classList.remove("hidden");
}

function calculateBoth() {

    const boy = document.getElementById("boyName").value.trim();
    const girl = document.getElementById("girlName").value.trim();

    if (boy === "" || girl === "") {
        alert("Please enter both Boy and Girl names.");
        return;
    }

    const boyToGirl = getPercentage(boy, girl);
    const girlToBoy = getPercentage(girl, boy);

    document.getElementById("bothResults").innerHTML = `
        <div class="card">
            <strong>👦 Boy → Girl 👧</strong>
            <div>${boy} ❤️ ${girl}</div>
            <div class="percent">${boyToGirl}%</div>
            <div>${getMessage(boyToGirl)}</div>
        </div>

        <div class="card">
            <strong>👧 Girl → Boy 👦</strong>
            <div>${girl} ❤️ ${boy}</div>
            <div class="percent">${girlToBoy}%</div>
            <div>${getMessage(girlToBoy)}</div>
        </div>
    `;

    document.getElementById("bothResults").classList.remove("hidden");
}
