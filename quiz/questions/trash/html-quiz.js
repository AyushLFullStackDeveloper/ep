let htmlQuestionsArray = [];

// Function to create a question object and push it to htmlQuestionsArray
function createQuestion(question, a, b, c, d, answer) {
  let object = {
    question: question,
    optionA: a,
    optionB: b,
    optionC: c,
    optionD: d,
    answer: answer,
  };
  htmlQuestionsArray.push(object);
}

// Function to add questions 1-5
function addFirstFiveQuestions() {
  // first Question
  createQuestion(
    "HTML stands for?",
    "Hyper Text Marking Language",
    "Hypen Text Markup Language",
    "Hyper Text Markup Language",
    "Hyperlinks and Text Markup Language",
    3
  );
  // second Question
  createQuestion(
    "What is the correct HTML element for inserting a line break?",
    "lb",
    "break",
    "br",
    "linebreak",
    3
  );
  // third question
  createQuestion(
    "What is the correct HTML element for inserting a horizontal rule?",
    "hr",
    "line",
    "rule",
    "hline",
    1
  );
  // fourth questions
  createQuestion(
    "What is the correct HTML element for inserting a large heading?",
    "head",
    "h1",
    "heading",
    "h6",
    2
  );
  // fifth question
  createQuestion(
    "What is the correct HTML attribute for specifying the destination of a hyperlink?",
    "link",
    "href",
    "url",
    "src",
    2
  );
}

// Function to add questions 6-10
function addSixToTenQuestions() {
  // sixth question
  createQuestion(
    "What is the correct HTML attribute for specifying the alternative text for an image?",
    "alt",
    "text",
    "src",
    "title",
    1
  );
  // seventh question
  createQuestion(
    "What are the differences between block-level and inline elements in HTML?",
    "Block-level elements start on a new line and take up the full width of the page, while inline elements do not start on a new line and only take up as much width as necessary.",
    "Block-level elements do not start on a new line and only take up as much width as necessary, while inline elements start on a new line and take up the full width of the page.",
    "Block-level elements can contain other block-level or inline elements, while inline elements can only contain text or other inline elements.",
    "Both A and C are correct.",
    4
  );
  // eighth question
  createQuestion(
    "What are the differences between relative and absolute URLs in HTML?",
    "Relative URLs specify the location of a resource relative to the current document, while absolute URLs specify the full address of a resource",
    "Relative URLs specify the full address of a resource, while absolute URLs specify the location of a resource relative to the current document.",
    "Absolute URL are faster and faster to code then relative paths",
    "Both A and C are correct.",
    1
  );
  // ninth question
  createQuestion(
    "What are the differences between iframe and embed tags in HTML?",
    "iframe tag is used to display a web page within a web page, while embed tag is used to display a media file within a web page.",
    "iframe tag is used to display a media file within a web page, while embed tag is used to display a web page within a web page.",
    "iframe tag is used to display a web page or a media file within a web page, while embed tag is used to display a media file within a web page or an object tag.",
    "Both A and C are correct.",
    4
  );
  // tenth question
  createQuestion(
    "What are some of the HTML5 semantic elements and what are the benefits of using them?",
    "article, section, header, footer, nav, aside, main. They provide more meaningful and descriptive structure to the web page and improve the accessibility and SEO.",
    "div, span, p, h1, ul, li, a. They provide more flexible and customizable structure to the web page and improve the styling and interactivity.",
    "div, canvas, video, audio, svg, source, track. They provide more dynamic and multimedia content to the web page and improve the user experience and engagement.",
    "Both A and C are correct.",
    1
  );
}

// Function to add questions 11-15
function addElevenToFifteenQuestions() {
  // eleventh question
  createQuestion(
    "What are some of the HTML5 input types and what are the benefits of using them?",
    "text, password, checkbox, radio, button, submit, reset, file, color, date, email, number, range, search, tel, url. They provide more specific and user-friendly input fields for forms and improve the validation and usability.",
    "div, span, p, h1, ul, li, a. They provide more flexible and customizable structure to the web page and improve the styling and interactivity.",
    "article, section, header, footer, nav, aside, main. They provide a more meaningful and descriptive structure to the web page and improve the accessibility and SEO.",
    "Both A and C are correct.",
    1
  );
  // twelfth question
  createQuestion(
    "Who was the primary author of HTML?",
    "Brendan Eich",
    "Sabeer Bhatiya",
    "Google Inc.",
    "Tim Berners-Lee",
    4
  );
  // thirteenth question
  createQuestion(
    "Which of the following attributes comes in handy when borders have to be put between groups of columns instead of every column?",
    "col",
    "colgroup",
    "rowspan",
    "row",
    2
  );
  // fourteenth question
  createQuestion(
    "Which of the following attributes is/are related to the img tag?",
    "height",
    "alt",
    "src",
    "all of the above",
    4
  );
  // fifteenth question
  createQuestion(
    "A few lines in an HTML paragraph are to be formatted differently from the rest of the lines. Which tag will assist in this?",
    "div",
    "p",
    "span",
    "format",
    3
  );
}

// Function to add questions 16-20
function addSixteenToTwentyQuestions() {
  // sixteenth question
  createQuestion(
    "What is the correct HTML for adding a background color?",
    "<body style='background-color: yellow'>",
    "<background>yellow<background>",
    '<body bg="yellow">',
    "<body background-color: yellow;>",
    1
  );
  // seventeenth question
  createQuestion(
    "Which character is used to indicate an end tag?",
    "+",
    "/",
    "*",
    "-",
    2
  );
  // eighteenth question
  createQuestion(
    "How can you make a numbered list?",
    "<dl>",
    "<ul>",
    "<list>",
    "<ol>",
    4
  );
  // nineteenth question
  createQuestion(
    "How can you make an unordered list?",
    "<ol>",
    "<dl>",
    "<li>",
    "<ul>",
    4
  );
  // twentieth question
  createQuestion(
    "What is the correct HTML for making a checkbox?",
    '<input type="check">',
    '<input type="checkbox">',
    "<ckeck>",
    "<ckeckbox>",
    2
  );
}

// Function to add questions 21-25
function addTwentyOneToTwentyFiveQuestions() {
  // twenty-first question
  createQuestion(
    "What is the correct HTML for making a text area?",
    '<input type="textbox">',
    '<input type="textarea">',
    "<textarea>",
    "<input>checkbox</input>",
    2
  );
  // twenty-second question
  createQuestion(
    "What is the correct HTML for inserting an image?",
    '<image src="image.jpeg" alt="image">',
    '<img src="image.jpeg" alt="image">',
    '<img href="image.jpeg" alt="image">',
    '<img alt="my_image">image.jpeg</img>',
    1
  );
  // twenty-third question
  createQuestion(
    "Which HTML element defines the title of a document?",
    "<title>",
    "<meta>",
    "<head>",
    "<h1>title</h1>",
    1
  );
  // twenty-fourth question
  createQuestion(
    "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    "alt",
    "src",
    "longdesk",
    "title",
    1
  );
  // twenty-fifth question
  createQuestion(
    "Which doctype is correct for HTML5?",
    '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2//EN">',
    '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">',
    "<!DOCTYPE html>",
    '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">',
    3
  );
}

// Function to add questions 26-30
function addTwentySixToThirtyQuestions() {
  // twenty-sixth question
  createQuestion(
    "Which of the following attributes is used to add a link to any element?",
    "link",
    "ref",
    "href",
    "newref",
    3
  );
  // twenty-seventh question
  createQuestion(
    "What is the purpose of using div tags in HTML?",
    "For creating Different styles.",
    "For creating different sections.",
    "For adding headings.",
    "For adding titles.",
    2
  );
  // twenty-eighth question
  createQuestion(
    "Which of the following tags is used to make a portion of text italic in HTML?",
    "<italic>",
    "<style= “i”>",
    "<i>",
    "<style=“italic”>",
    3
  );
  // twenty-ninth question
  createQuestion(
    "Which of the following is not a valid HTML tag?",
    "<p>",
    "<h1>",
    "<h2>",
    "<h3>",
    4
  );
  // thirtieth question (added question)
  createQuestion(
    "What is the correct HTML for making a drop-down selection list?",
    "<select>",
    "<dropdown>",
    "<input type='dropdown'>",
    "<option>",
    1
  );
}

// Function to add questions 31-35
function addThirtyOneToThirtyFiveQuestions() {
  // thirty-first question
  createQuestion(
    "What is the correct HTML for making a button?",
    '<input type="button" value="Click Me">',
    "<button>Click Me</button>",
    '<button type="button">Click Me</button>',
    '<input type="submit" value="Click Me">',
    2
  );
  // thirty-second question
  createQuestion(
    "How can you make a hyperlink open in a new tab?",
    '<a href="url" target="_blank">Link Text</a>',
    '<a href="url" target="new">Link Text</a>',
    '<a href="url" target="tab">Link Text</a>',
    '<a href="url" target="open">Link Text</a>',
    1
  );
  // thirty-third question
  createQuestion(
    "Which of the following tags is used to define a table row in HTML?",
    "<row>",
    "<tr>",
    "<table-row>",
    "<tablerow>",
    2
  );
  // thirty-fourth question
  createQuestion(
    "Which of the following is used to define an unordered list in HTML?",
    "<list>",
    "<ul>",
    "<ol>",
    "<li>",
    2
  );
  // thirty-fifth question
  createQuestion(
    "What does the <br> tag represent in HTML?",
    "A break in the text flow, indicating a new line or space.",
    "A bold line to separate different sections.",
    "A blue ribbon for decoration.",
    "A background refresh of the page.",
    1
  );
}

// Function to add questions 36-40
function addThirtySixToFortyQuestions() {
  // thirty-sixth question
  createQuestion(
    "What is the correct HTML for making a radio button?",
    '<input type="radio" name="gender" value="male"> Male<br>',
    '<radio name="gender" value="male"> Male<br>',
    '<input type="button" value="radio" name="gender" value="male"> Male<br>',
    '<radio type="gender" value="male"> Male<br>',
    1
  );
  // thirty-seventh question
  createQuestion(
    "How do you add a background color for all <h1> elements on a page?",
    "h1 {background-color: yellow;}",
    "h1 {bg-color: yellow;}",
    '<h1 style="background-color: yellow;">',
    "style h1 {background-color: yellow;}",
    1
  );
  // thirty-eighth question
  createQuestion(
    "Which tag is used to define an inline frame or iframe in HTML?",
    "<inline>",
    "<frame>",
    "<iframe>",
    "<inlineframe>",
    3
  );
  // thirty-ninth question
  createQuestion(
    "Which HTML attribute is used to define the URL of the linked resource, and works together with <a> tag?",
    "src",
    "alt",
    "href",
    "link",
    3
  );
  // fortieth question
  createQuestion(
    "Which of the following is NOT a valid value for the type attribute in an <input> element?",
    "number",
    "currency",
    "password",
    "date",
    2
  );
}

// Function to add questions 41-45
function addFortyOneToFortyFiveQuestions() {
  // forty-first question
  createQuestion(
    "What is the correct HTML for inserting a comment?",
    "<comment>This is a comment</comment>",
    "<!--This is a comment-->",
    "<comment>This is a comment--></comment>",
    "<comment>This is a comment<!--",
    2
  );
  // forty-second question
  createQuestion(
    "Which HTML tag is used to define navigation links in HTML5?",
    "<nav>",
    "<navigation>",
    "<navigate>",
    "<n>",
    1
  );
  // forty-third question
  createQuestion(
    "In HTML, which attribute is used to specify that an input field must be filled out?",
    "placeholder",
    "required",
    "validate",
    "mandatory",
    2
  );
  // forty-fourth question
  createQuestion(
    "Which HTML tag is used to define important text in a document?",
    "<strong>",
    "<important>",
    "<b>",
    "<em>",
    1
  );
  // forty-fifth question
  createQuestion(
    "What is the correct HTML for creating a hyperlink to an email address?",
    '<a href="mailto:example@example.com">Send Email</a>',
    "<mail>example@example.com</mail>",
    '<email href="example@example.com">Send Email</email>',
    '<href="example@example.com">Send Email</a>',
    1
  );
}

// Function to add questions 46-50
function addFortySixToFiftyQuestions() {
  // forty-sixth question
  createQuestion(
    "What is the correct HTML for adding a background image?",
    "<body style=\"background-image: url('background.jpg')\">",
    '<body bg-img="background.jpg">',
    '<background src="background.jpg">',
    '<body image="background.jpg">',
    1
  );
  // forty-seventh question
  createQuestion(
    "Which HTML tag is used to define a hyperlink?",
    "<a>",
    "<link>",
    "<href>",
    "<hyperlink>",
    1
  );
  // forty-eighth question
  createQuestion(
    "What does the HTML <aside> element define?",
    "A piece of content indirectly related to the main content",
    "A highlighted area of text",
    "An alternative content for browsers",
    "An aside comment to the content",
    1
  );
  // forty-ninth question
  createQuestion(
    "What is the correct HTML for inserting a copyright symbol?",
    "&copy;",
    "&copyright;",
    "&copy_symbol;",
    "&#169;",
    4
  );
  // fiftieth question
  createQuestion(
    "Which HTML tag is used to define a clickable button?",
    "<button>",
    "<input type='button'>",
    "<button-click>",
    "<click>",
    1
  );
}

// Function to add questions 51-55
function addFiftyOneToFiftyFiveQuestions() {
  // fifty-first question
  createQuestion(
    "What is the correct HTML for creating a hyperlink?",
    "<a>",
    "<link>",
    "<href>",
    "<hyperlink>",
    1
  );
  // fifty-second question
  createQuestion(
    "What does the HTML <aside> element define?",
    "A piece of content indirectly related to the main content",
    "A highlighted area of text",
    "An alternative content for browsers",
    "An aside comment to the content",
    1
  );
  // fifty-third question
  createQuestion(
    "What is the correct HTML for inserting a copyright symbol?",
    "&copy;",
    "&copyright;",
    "&copy_symbol;",
    "&#169;",
    4
  );
  // fifty-fourth question
  createQuestion(
    "Which HTML tag is used to define a clickable button?",
    "<button>",
    "<input type='button'>",
    "<button-click>",
    "<click>",
    1
  );
  // fifty-fifth question
  createQuestion(
    "What is the correct HTML for adding a background image?",
    "<body style=\"background-image: url('background.jpg')\">",
    '<body bg-img="background.jpg">',
    '<background src="background.jpg">',
    '<body image="background.jpg">',
    1
  );
}

// Function to add questions 56-60
function addFiftySixToSixtyQuestions() {
  // fifty-sixth question
  createQuestion(
    "Which tag is used to define an image map in HTML?",
    "<imgmap>",
    "<imagemap>",
    "<map>",
    "<image>",
    3
  );
  // fifty-seventh question
  createQuestion(
    "How can you make a numbered list with roman numerals?",
    "<ol style='list-style-type: lower-roman;'>",
    "<ol style='list-type: roman;'>",
    "<ol type='roman'>",
    "<ul style='list-type: roman;'>",
    1
  );
  // fifty-eighth question
  createQuestion(
    "Which HTML attribute is used to define the alternative text for an image map area?",
    "title",
    "alt",
    "text",
    "description",
    2
  );
  // fifty-ninth question
  createQuestion(
    "What does the HTML <figure> element define?",
    "A captioned figure or image within a document.",
    "An important figure or statistic in a document.",
    "An alternate figure for browsers to display.",
    "A highlighted section of a document.",
    1
  );
  // sixtieth question
  createQuestion(
    "How do you add comments in HTML?",
    "<!-- This is a comment -->",
    "<comment>This is a comment</comment>",
    "<comment>This is a comment--></comment>",
    "<!-- This is a comment --!>",
    1
  );
}

// Function to add questions 61-65
function addSixtyOneToSixtyFiveQuestions() {
  // sixty-first question
  createQuestion(
    "What is the correct HTML for adding a background color to a table?",
    '<table style="background-color: yellow;">',
    '<table bgcolor="yellow;">',
    '<table background-color="yellow;">',
    '<table color="yellow;">',
    1
  );
  // sixty-second question
  createQuestion(
    "Which attribute is used to define inline styles in HTML?",
    "styles",
    "class",
    "style",
    "font",
    3
  );
  // sixty-third question
  createQuestion(
    "What is the correct HTML for adding a tooltip to an element?",
    '<div tooltip="This is a tooltip">Hover over me</div>',
    '<div title="This is a tooltip">Hover over me</div>',
    '<tooltip="This is a tooltip">Hover over me</div>',
    '<span title="This is a tooltip">Hover over me</span>',
    2
  );
  // sixty-fourth question
  createQuestion(
    "Which HTML tag is used to define a section of navigation links?",
    "<nav>",
    "<header>",
    "<footer>",
    "<section>",
    1
  );
  // sixty-fifth question
  createQuestion(
    "How do you add a video to a webpage in HTML?",
    '<video src="video.mp4" controls></video>',
    '<media src="video.mp4" type="video/mp4"></media>',
    '<source src="video.mp4" type="video/mp4"></source>',
    '<embed src="video.mp4"></embed>',
    1
  );
}

// Function to add questions 66-70
function addSixtySixToSeventyQuestions() {
  // sixty-sixth question
  createQuestion(
    "What is the correct HTML for creating a hidden input field?",
    '<input type="hidden" name="userid" value="12345">',
    '<hidden name="userid" value="12345">',
    '<input type="input" name="userid" value="12345">',
    '<input type="text" name="userid" style="display: none;" value="12345">',
    1
  );
  // sixty-seventh question
  createQuestion(
    "Which HTML tag is used to create a container for content that should be visually grouped together?",
    "<container>",
    "<div>",
    "<group>",
    "<section>",
    2
  );
  // sixty-eighth question
  createQuestion(
    "What is the correct HTML for adding a background image to a webpage?",
    "<body style=\"background-image: url('background.jpg');\">",
    '<body background="background.jpg">',
    '<body bg-image="background.jpg">',
    '<background src="background.jpg">',
    1
  );
  // sixty-ninth question
  createQuestion(
    "How do you create a text link that opens in a new window/tab?",
    '<a href="url" target="_blank">Link Text</a>',
    '<a href="url" target="new">Link Text</a>',
    '<a href="url" target="tab">Link Text</a>',
    '<a href="url" target="open">Link Text</a>',
    1
  );
  // seventieth question
  createQuestion(
    "Which HTML tag is used to define a section that contains navigation links?",
    "<nav>",
    "<header>",
    "<footer>",
    "<section>",
    1
  );
}

// Function to add questions 71-75
function addSeventyOneToSeventyFiveQuestions() {
  // seventy-first question
  createQuestion(
    "What is the correct HTML for creating a dropdown list?",
    "<select>",
    "<dropdown>",
    '<input type="dropdown">',
    "<option>",
    1
  );
  // seventy-second question
  createQuestion(
    "In HTML, what does the <abbr> tag indicate?",
    "An abbreviation or acronym",
    "An emphasized text",
    "An alternative text for an image",
    "A highlighted text",
    1
  );
  // seventy-third question
  createQuestion(
    "Which tag is used to define a section of navigation links?",
    "<nav>",
    "<header>",
    "<footer>",
    "<section>",
    1
  );
  // seventy-fourth question
  createQuestion(
    "How do you add a video to a webpage in HTML?",
    '<video src="video.mp4" controls></video>',
    '<media src="video.mp4" type="video/mp4"></media>',
    '<source src="video.mp4" type="video/mp4"></source>',
    '<embed src="video.mp4"></embed>',
    1
  );
  // seventy-fifth question
  createQuestion(
    "Which HTML tag is used to define a clickable button?",
    "<button>",
    "<input type='button'>",
    "<button-click>",
    "<click>",
    1
  );
}
// Function to add questions 75-80
function addSeventySixToEightyQuestions() {
  // senventy six
  createQuestion(
    "Which attribute is used to specify the URL of the image to use as a checkbox for the <input type='checkbox'> element?",
    "src",
    "image",
    "checkbox-image",
    "img",
    1
  );
  // seventy seven
  createQuestion(
    "How can you create an email link in HTML?",
    '<a href="mailto:email@example.com">Send Email</a>',
    '<mail href="email@example.com">Send Email</mail>',
    '<link href="mailto:email@example.com">Send Email</link>',
    '<email href="mailto:email@example.com">Send Email</email>',
    1
  );
  // seventy eight
  createQuestion(
    "Which HTML tag is used to define an unordered list?",
    "<ul>",
    "<ol>",
    "<list>",
    "<li>",
    1
  );
  // seventy nine
  createQuestion(
    "How do you add a tooltip to a <div> element in HTML?",
    '<div title="Tooltip text here">Hover over me</div>',
    '<div tooltip="Tooltip text here">Hover over me</div>',
    '<div alt="Tooltip text here">Hover over me</div>',
    '<div info="Tooltip text here">Hover over me</div>',
    1
  );
  // eighty
  createQuestion(
    "Which HTML attribute is used to provide additional information about an element?",
    "title",
    "extra",
    "info",
    "description",
    1
  );
}
// Function to add questions 81-85
function addEightyOneToEightyFiveQuestions() {
  // eighty-first question
  createQuestion(
    "What is the correct HTML for creating a hyperlink?",
    "<a>",
    "<link>",
    "<href>",
    "<hyperlink>",
    1
  );
  // eighty-second question
  createQuestion(
    "What does the HTML <aside> element define?",
    "A piece of content indirectly related to the main content",
    "A highlighted area of text",
    "An alternative content for browsers",
    "An aside comment to the content",
    1
  );
  // eighty-third question
  createQuestion(
    "What is the correct HTML for inserting a copyright symbol?",
    "&copy;",
    "&copyright;",
    "&copy_symbol;",
    "&#169;",
    4
  );
  // eighty-fourth question
  createQuestion(
    "Which HTML tag is used to define a clickable button?",
    "<button>",
    "<input type='button'>",
    "<button-click>",
    "<click>",
    1
  );
  // eighty-fifth question
  createQuestion(
    "What is the correct HTML for adding a background image?",
    "<body style=\"background-image: url('background.jpg')\">",
    '<body bg-img="background.jpg">',
    '<background src="background.jpg">',
    '<body image="background.jpg">',
    1
  );
}

// Function to add questions 86-90
function addEightySixToNinetyQuestions() {
  // eighty-sixth question
  createQuestion(
    "Which tag is used to define an image map in HTML?",
    "<imgmap>",
    "<imagemap>",
    "<map>",
    "<image>",
    3
  );
  // eighty-seventh question
  createQuestion(
    "How can you make a numbered list with roman numerals?",
    "<ol style='list-style-type: lower-roman;'>",
    "<ol style='list-type: roman;'>",
    "<ol type='roman'>",
    "<ul style='list-type: roman;'>",
    1
  );
  // eighty-eighth question
  createQuestion(
    "Which HTML attribute is used to define the alternative text for an image map area?",
    "title",
    "alt",
    "text",
    "description",
    2
  );
  // eighty-ninth question
  createQuestion(
    "What does the HTML <figure> element define?",
    "A captioned figure or image within a document.",
    "An important figure or statistic in a document.",
    "An alternate figure for browsers to display.",
    "A highlighted section of a document.",
    1
  );
  // ninetieth question
  createQuestion(
    "How do you add comments in HTML?",
    "<!-- This is a comment -->",
    "<comment>This is a comment</comment>",
    "<comment>This is a comment--></comment>",
    "<!-- This is a comment --!>",
    1
  );
}

// Function to add questions 91-95
function addNinetyOneToNinetyFiveQuestions() {
  // ninety-first question
  createQuestion(
    "What is the correct HTML for adding a background color to a table?",
    '<table style="background-color: yellow;">',
    '<table bgcolor="yellow;">',
    '<table background-color="yellow;">',
    '<table color="yellow;">',
    1
  );
  // ninety-second question
  createQuestion(
    "Which attribute is used to define inline styles in HTML?",
    "styles",
    "class",
    "style",
    "font",
    3
  );
  // ninety-third question
  createQuestion(
    "What is the correct HTML for adding a tooltip to an element?",
    '<div tooltip="This is a tooltip">Hover over me</div>',
    '<div title="This is a tooltip">Hover over me</div>',
    '<tooltip="This is a tooltip">Hover over me</div>',
    '<span title="This is a tooltip">Hover over me</span>',
    2
  );
  // ninety-fourth question
  createQuestion(
    "Which HTML tag is used to define a section of navigation links?",
    "<nav>",
    "<header>",
    "<footer>",
    "<section>",
    1
  );
  // ninety-fifth question
  createQuestion(
    "How do you add a video to a webpage in HTML?",
    '<video src="video.mp4" controls></video>',
    '<media src="video.mp4" type="video/mp4"></media>',
    '<source src="video.mp4" type="video/mp4"></source>',
    '<embed src="video.mp4"></embed>',
    1
  );
}

// Function to add questions 96-100
function addNinetySixToOneHundredQuestions() {
  // ninety-sixth question
  createQuestion(
    "What is the correct HTML for creating a hidden input field?",
    '<input type="hidden" name="userid" value="12345">',
    '<hidden name="userid" value="12345">',
    '<input type="input" name="userid" value="12345">',
    '<input type="text" name="userid" style="display: none;" value="12345">',
    1
  );
  // ninety-seventh question
  createQuestion(
    "Which HTML tag is used to create a container for content that should be visually grouped together?",
    "<container>",
    "<div>",
    "<group>",
    "<section>",
    2
  );
  // ninety-eighth question
  createQuestion(
    "What is the correct HTML for adding a background image to a webpage?",
    "<body style=\"background-image: url('background.jpg');\">",
    '<body background="background.jpg">',
    '<body bg-image="background.jpg">',
    '<background src="background.jpg">',
    1
  );
  // ninety-ninth question
  createQuestion(
    "How do you create a text link that opens in a new window/tab?",
    '<a href="url" target="_blank">Link Text</a>',
    '<a href="url" target="new">Link Text</a>',
    '<a href="url" target="tab">Link Text</a>',
    '<a href="url" target="open">Link Text</a>',
    1
  );
  // one hundredth question
  createQuestion(
    "Which HTML tag is used to define a section that contains navigation links?",
    "<nav>",
    "<header>",
    "<footer>",
    "<section>",
    1
  );
}

// Function calling all question addition functions
function setHTMLquestions() {
  addFirstFiveQuestions();
  addSixToTenQuestions();
  addElevenToFifteenQuestions();
  addSixteenToTwentyQuestions();
  addTwentyOneToTwentyFiveQuestions();
  addTwentySixToThirtyQuestions();
  addThirtyOneToThirtyFiveQuestions();
  addThirtySixToFortyQuestions();
  addFortyOneToFortyFiveQuestions();
  addFortySixToFiftyQuestions();
  addFiftyOneToFiftyFiveQuestions();
  addFiftySixToSixtyQuestions();
  addSixtyOneToSixtyFiveQuestions();
  addSixtySixToSeventyQuestions();
  addSeventyOneToSeventyFiveQuestions();
  addSeventySixToEightyQuestions();
  addEightyOneToEightyFiveQuestions();
  addEightySixToNinetyQuestions();
  addNinetyOneToNinetyFiveQuestions();
  addNinetySixToOneHundredQuestions();
  return htmlQuestionsArray;
}

export { setHTMLquestions };
