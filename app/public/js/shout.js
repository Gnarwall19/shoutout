// When user clicks submit button
$("#shout-submit").on("click", function (event) {
    event.preventDefault();

    // make a newShout object
    var newShout = {
        author: $("#author").val().trim(),
        body: $("#shout-box").val().trim(),
        created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };

    console.log(newShout);

    // Send AJAX POST request
    $.post("/api/new", newShout)
        // On success, run...
        .done(function () {
            var row = $("<div>");
            row.addClass("shout");

            row.append("<p>" + newShout.author + " shouted: </p>");
            row.append("<p>" + newShout.body + "</p>");
            row.append("<p>At " + moment(newShout.created_at).format("h:mma on dddd") + "</p>");

            $("#shout-area").prepend(row);

        });

    // Empty the input boxes
    $("#author").val("");
    $("#shout-box").val("");
});

// Grab all shouts on page load
$.get("/api/all", function (data) {

    if (data.length !== 0) {
        for (var i = 0; i < data.length; i++) {

            var row = $("<div>");
            row.addClass("shout");

            row.append("<p>" + data[i].author + " shouted: </p>");
            row.append("<p>" + data[i].body + "</p>");
            row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

            $("#shout-area").prepend(row);

        }
    }
});