var categories = [
	{"_id": "111111", "category": "----------"},
	{ "_id" : "586d923f16afd00796d2cd91", "category" : "fooz"},
	{ "_id" : "586d923f16afd00796d2cd92", "category" : "bark"},
	{ "_id" : "586d923f16afd00796d2cd93", "category" : "zats"},
	{ "_id" : "586d923f16afd00796d2cd94", "category" : "affy"}
];

exports.categories = categories;

var categoriesForLoading = [
	{
		category: "fooz"
	},
	{
		category: "bark"
	},
	{
		category: "zats"
	},
	{
		category: "affy"
	}
];

exports.categoriesForLoading = categoriesForLoading;

/*

		{
			category: "  -----  "
		},
		{
			category: "economy"
		},
		{
			category: "tribe life"
		},
		{
			category: "furry companions"
		},
		{
			category: "nature"
		},
		{
			category: "sports"
		},
		{
			category: "political misgivings"
		},
		{
			category: "travel"
		},
		{
			category: "purple hats and such"
		},
		{
			category: "munchies"
		},
		{
			category: "life"
		},
		{
			category: "sweet sounds"
		},
		{
			category: "spending"
		},
		{
			category: "digital paraphernalia"
		}	


Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ut, minima, doloremque obcaecati provident illo beatae quaerat soluta dolor incidunt laudantium ipsa impedit veniam nesciunt odit error, sequi architecto, nulla. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, eaque similique. Quae voluptatem maiores assumenda incidunt dolor a iste fuga rem explicabo iusto magnam, harum doloribus modi? Placeat dolorem, numquam.Rem asperiores, mollitia pariatur corporis. Nulla fugit molestiae a quae natus ducimus, dolorem voluptatibus, quas quia quidem facilis impedit odit sint recusandae temporibus doloribus. Accusamus sit nemo iure maiores, suscipit t dolorum dolores, accusamus illum eveniet tempora, doloremque id voluptas quam harum nobis amet, cumque culpa sint blanditiis non suscipit architecto sit, exercitationem voluptatem dolorem facere? Adipisci asperiores ad quisquam!



var ids = [
	{ "_id" : ObjectId("58698ab5d55905514e0b84c3"), "category" : "Old Friends", "blogPosts" : [ ], "__v" : 0 },
	{ "_id" : ObjectId("58698ab5d55905514e0b84c4"), "category" : "Long Talks", "blogPosts" : [ ], "__v" : 0 },
	{ "_id" : ObjectId("58698ab5d55905514e0b84c6"), "category" : "Not Serious", "blogPosts" : [ ], "__v" : 0 },
	{ "_id" : ObjectId("58698ab5d55905514e0b84c8"), "category" : "Bromance", "blogPosts" : [ ], "__v" : 0 },
	{ "_id" : ObjectId("58698ab5d55905514e0b84c2"), "category" : "Philosophy", "blogPosts" : [ ], "__v" : 0 },
	{ "_id" : ObjectId("58698ab5d55905514e0b84c5"), "category" : "Serious", "blogPosts" : [ ], "__v" : 0 },
	{ "_id" : ObjectId("58698ab5d55905514e0b84c9"), "category" : "Travel", "blogPosts" : [ ], "__v" : 0 },
	{ "_id" : ObjectId("58698ab5d55905514e0b84cb"), "category" : "Technology", "blogPosts" : [ ], "__v" : 0 },
	{ "_id" : ObjectId("58698ab5d55905514e0b84c7"), "category" : "Romcom", "blogPosts" : [ ], "__v" : 0 },
	{ "_id" : ObjectId("58698ab5d55905514e0b84ca"), "category" : "Work", "blogPosts" : [ ], "__v" : 0 },
]


var blogModel =	{
	title: "",
	content: "",
	month: "",
	date: "",
	year: "",
	category: ""
};

var blogPosts = [
	{
		title: "When Henry gives a pep talk",
		content: "What’s he that wishes so? My cousin Westmoreland? No, my fair cousin: If we are mark’d to die, we are enow To do our country loss; and if to live, The fewer men, the greater share of honour. God’s will! I pray thee, wish not one man more. By Jove, I am not covetous for gold, Nor care I who doth feed upon my cost; It yearns me not if men my garments wear; Such outward things dwell not in my desires: But if it be a sin to covet honour, I am the most offending soul alive. \n\nNo, faith, my coz, wish not a man from England: God’s peace! I would not lose so great an honour As one man more, methinks, would share from me For the best hope I have. O, do not wish one more! Rather proclaim it, Westmoreland, through my host, That he which hath no stomach to this fight, Let him depart; his passport shall be made And crowns for convoy put into his purse: We would not die in that man’s company That fears his fellowship to die with us. \n\nThis day is called the feast of Crispian: He that outlives this day, and comes safe home, Will stand a tip-toe when the day is named, And rouse him at the name of Crispian. He that shall live this day, and see old age, Will yearly on the vigil feast his neighbours, And say ‘To-morrow is Saint Crispian:’ Then will he strip his sleeve and show his scars. And say ‘These wounds I had on Crispin’s day.’ Old men forget: yet all shall be forgot, But he’ll remember with advantages What feats he did that day: then shall our names. \n\nFamiliar in his mouth as household words Harry the king, Bedford and Exeter, Warwick and Talbot, Salisbury and Gloucester, Be in their flowing cups freshly remember’d. This story shall the good man teach his son; And Crispin Crispian shall ne’er go by, From this day to the ending of the world, But we in it shall be remember’d; We few, we happy few, we band of brothers; For he to-day that sheds his blood with me Shall be my brother; be he ne’er so vile, This day shall gentle his condition: And gentlemen in England now a-bed Shall think themselves accursed they were not here, And hold their manhoods cheap whiles any speaks That fought with us upon Saint Crispin’s day.",
		month: "October",
		date: "25",
		year: "2015",
		category: ids[1]._id
	},
	{
		title: "The most thoroughly depressed man in the world",
		content: "To be, or not to be: that is the question: Whether ’tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take arms against a sea of troubles, And by opposing end them? \n\nTo die: to sleep; No more; and by a sleep to say we end The heart-ache and the thousand natural shocks That flesh is heir to, ’tis a consummation Devoutly to be wish’d. To die, to sleep; To sleep: perchance to dream: ay, there’s the rub; For in that sleep of death what dreams may come When we have shuffled off this mortal coil, Must give us pause: there’s the respect That makes calamity of so long life. \n\nFor who would bear the whips and scorns of time, The oppressor’s wrong, the proud man’s contumely, The pangs of despised love, the law’s delay, The insolence of office and the spurns That patient merit of the unworthy takes, When he himself might his quietus make With a bare bodkin? who would fardels bear, To grunt and sweat under a weary life, But that the dread of something after death, The undiscover’d country from whose bourn No traveller returns, puzzles the will And makes us rather bear those ills we have Than fly to others that we know not of? \n\nThus conscience does make cowards of us all; And thus the native hue of resolution Is sicklied o’er with the pale cast of thought, And enterprises of great pith and moment With this regard their currents turn awry, And lose the name of action.–Soft you now! The fair Ophelia! Nymph, in thy orisons Be all my sins remember’d.",
		month: "October",
		date: "29",
		year: "2015",
		category: ids[5]._id
	}
]
data to pre load. admin
{
	about: "I am that merry wanderer of the night. \n\nI jest to Oberon and make him smile When I a fat and bean-fed horse beguile, Neighing in likeness of a filly foal: And sometime lurk I in a gossip’s bowl, In very likeness of a roasted crab, And when she drinks, against her lips I bob And on her wither’d dewlap pour the ale. \n\nThe wisest aunt, telling the saddest tale, Sometime for three-foot stool mistaketh me; Then slip I from her bum, down topples she, And ‘tailor’ cries, and falls into a cough; And then the whole quire hold their hips and laugh, And waxen in their mirth and neeze and swear A merrier hour was never wasted there."
}

*/
