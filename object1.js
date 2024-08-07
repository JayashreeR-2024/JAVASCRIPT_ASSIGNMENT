/*
var<objectname> =
{
    property1: value1,
    property2: value2,
    property3: value3,
    property4: value4,
    <functionname>:function()
    {
        function definition code;
    }
};*/
var book=
{
    title : "My Experiments with Truth",
    author: "Gandhi",
    yearPublished : 1940,
    printBookdata: function()
    {
        console.log("The book titled"+ book.title+"is written by" + book.author);
    }
};
console.log(book.printBookdata());