
// function styles()
// {
//     document.getElementById('page_style').setAttribute("href", "styles.css");
// }
// function styles2()
// {
//     document.getElementById('page_style').setAttribute("href", "styles2.css");
// }


function load_style()
{
    page_style = localStorage.getItem("page_stylesheet_name");
    if (page_style === null)
    {
     page_style = "styles.css";
    }
    document.getElementById('page_style').setAttribute("href", page_style);
}
function styles()
{
    localStorage.setItem("page_stylesheet_name", "styles.css");
    load_style();
}
function styles2()
{
    localStorage.setItem("page_stylesheet_name", "styles2.css");
    load_style();
}
load_style()  // load style immediately