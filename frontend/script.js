async function loadFeedbacks() {

    const response = await fetch("http://localhost:5000/feedbacks");

    const data = await response.json();

    document.getElementById("totalReviews").innerText = data.length;

    let total = 0;

    data.forEach(item => {
        total += Number(item.rating);
    });

    document.getElementById("avgRating").innerText =
        data.length ? (total / data.length).toFixed(1) : 0;

    let html = "";

    data.forEach(item => {

        html += `
        <div class="card">

            <div class="user">

                <div class="avatar">
                    ${item.name.charAt(0).toUpperCase()}
                </div>

                <div>
                    <h3>${item.name}</h3>
                    <span>${item.course}</span>
                </div>

            </div>

            <div class="stars">
                ${"⭐".repeat(Number(item.rating))}
            </div>

            <div class="message">
                "${item.feedback}"
            </div>

        </div>
        `;

    });

    document.getElementById("cards").innerHTML = html;

}

loadFeedbacks();
async function submitFeedback() {

    const name = document.getElementById("name").value;

    const course = document.getElementById("course").value;

    const rating = document.getElementById("rating").value;

    const feedback = document.getElementById("feedback").value;

    if (!name || !rating || !feedback) {
        alert("Please fill all fields");
        return;
    }

    await fetch("http://localhost:5000/feedbacks", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name,
            course,
            rating,
            feedback
        })

    });

    document.getElementById("name").value = "";
    document.getElementById("rating").value = "";
    document.getElementById("feedback").value = "";

    loadFeedbacks();

}