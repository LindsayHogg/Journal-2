



var myJournal = new Journal();
myJournal.addEntry("First Entry", "Everything is great!", "Ben", ["Friday", "Boring"]);
myJournal.addEntry("Second Entry", "What happened? Everything is terrible", "Ben", ["Monday", "Boring"]);
myJournal.addEntry("Think About It", "Real Eyes Realize Real Lies", "Jaden", ["Deep", "Eyes", "Swag"]);
myJournal.addEntry("Huh?", "Who gave my journal to Jaden?", "Ben", ["Confused"]);

function writeNumEntriesOnPage(journal)
{
	$('#entryCount').html(journal.entries.length + " entries");
}

function writeEntriesToPage(journal)
{

	$("#journalContent").html(journal.entries[3].toHTML());

}

$("#journalForm").submit(function(event){
	 event.preventDefault();

	var author = $("#author").val();
	 $("#journalContent").append("<h3 class='authorClass'>" + author + "</h3>");

	var title = $("#title").val()
	 $("#journalContent").append("<h1 class='titleClass'>" + title + "</h1>");

	 var content = $("#content").val()
	 $("#journalContent").append("<p class='contentClass'>" + content + "</p>");

	 var tags = $("#tags").val()
	 $("#journalContent").append("<h4 class='tagsClass'>" + tags + "</h4>");

});



writeNumEntriesOnPage(myJournal);
writeEntriesToPage(myJournal);



