



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

	$("#journalContent").html(journal.entries[0].toHTML());

}

writeNumEntriesOnPage(myJournal);
writeEntriesToPage(myJournal);


