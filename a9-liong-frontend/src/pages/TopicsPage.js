function TopicsPage() {
    return (
       <>
        <h2>Web Dev Concepts</h2>
            <nav class="local">
                <a href="#servers">Web Servers</a>
                <a href="#design">Frontend Design</a>
                <a href="#images">Optimizing Images</a>
                <a href="#favicons">Favicons</a>
                <a href="#css">CSS</a>
                <a href="#forms">Forms</a>
                <a href="#express">Express</a>
                <a href="#javascript">JavaScript</a>
            </nav>

            <article id="servers">
                <h3>Web Servers</h3>

                <p>
                    The <strong>index</strong> is the conventional default page on a website if no other page is specified when someone requests a site. Whenever a <strong>server</strong> receives a <strong>GET request</strong>, the file index.html is configured to be returned so that the request / is mapped to the file at the <strong>path</strong> /index.html. Therefore, even if there is no specific page listed, a <strong>URL</strong> request to the server will return index.html. Servers might look for index.js or index.php as well.
                </p>

                <p>
                    One difference between the index.html file's details on the local computer and the web server is that the web server's file states the remote address of where the file is being accessed. On the web server's file, there are also many more details within the <strong>response</strong> and <strong>request headers</strong>. The file's response headers on the local computer only has the type of file and date last modified. However, on the web server it states many more things such as content length, date accessed, and the type of server it accessed. The request headers on the web server also have more information, such as cookie information.
                </p>

                <p>
                    The <strong>favicon</strong> represents the small icon on the left of the tab, and in this case represents that the web page is on an OSU server. Its code is 200 because the request succeeded, and the response body had the needed information. The main.css and main.js files both have 404 not found errors because the those resources could not be found on the server.
                </p>

                <p>
                    The URL of the website is https://web.engr.oregonstate.edu/~liong/a1-liong/. The <strong>scheme</strong> is “https”, which identifies what <strong>protocol</strong> the <strong>web client</strong> must use to access the source. There are two subdomains which include the “web” and “engr”. The host domain is “oregonstate.edu”. The resources are “~liong/a1-liong/“, which identifies the path of the resource on the server.
                </p>
            </article>

            <article id="design">
                <h3>Frontend Design</h3>

                <p>
                <strong>Frontend design</strong> is about creating the best experience possible for its users. There are multiple key concepts within frontend design such as the graphical user interface, interactive experience, and the visual design of the page. The best visual designs have a consistent color scheme, font and typography scheme, a photography, icon, and illustration scheme, and navigation systems in order to please the user. The measure of the quality of the user's experience is usability, with the 5 E's of usability being <strong>effective, efficient, easy to navigate, error-free, and enjoyable</strong>.
                </p>

                <dl>
                    <dt>Effective</dt>
                    <dd>The user is guided by the design, and they receive accurate results based on what they want.</dd>

                    <dt>Efficient</dt>
                    <dd>The user gets to where they want in the least number of steps possible in order to ensure a quick experience.</dd>

                    <dt>Easy to navigate</dt>
                    <dd>The user understands immediately how to get to where they want to go, whether it be through searching or clicking, and remembers how to do it next time. This is especially important for users that have never been on the website before.</dd>

                    <dt>Error-free</dt>
                    <dd>The user does not run into any roadblocks during their visit, making the site accessible and available for everyone. The developer can ensure this by learning the common errors users make and addressing them in the design of the site.</dd>

                    <dt>Enjoyable</dt>
                    <dd>The content and design fits the needs of the intended user base, making it engaging enough that they will return.</dd>
                </dl>

                <p>
                    The primary purpose of <strong>page layout tags</strong> break up the flow of content on a website in order to make it more readable for both humans and machines. In the case of machines, such as search engine robots and screen readers, page layout blocks help in determining where each section of content is organized. These tags typically display a newline in the browser before and after the <strong>element</strong>. The header tag denotes the masthead of the website. The nav tag contains links to other pages within the website. The main tag denotes where the content of the website is held. The section tag thematically groups the content. The article tag further specifies the content within the section tag, and the footer is at the bottom of the page and usually has legal and contact information. 
                </p>

                <ol>
                    <li>How <strong>anchors</strong> link to external content - Within the opening "a" tag, the <strong>HREF attribute</strong> is set equal to path/URL where the link will take the user where the website is located. Between the opening and closing "a" tags, the text that will appear to the user to describe the link.</li>
                    <li>How anchors link to internal content - Within the opening article tag, the ID equal is set to the topic that will be anchored. Within the opening "a" tag, the HREF is set equal to the # of the topic of the article ID, and between the "a" tags is the text that will show up for the user to click.</li>
                    <li>How anchors link to page-to-page content - Within the nav tags, the opening "a" tag will contain the HREF being set equal to the name of the website page that will be linked to the user. Between the "a" tags, will be the text that will show up for the user to click in the browser.</li>
                </ol>
            </article>

            <article id="images">
                <h3>Optimizing Images</h3>

                <p>
                    The 6 major specifications for images on the web are <strong>descriptive file names</strong>, <strong>small file sizes</strong>, <strong>dimensions</strong>, <strong>correct file format</strong>, <strong>resolution</strong> , and <strong>color mode</strong>. Descriptive file names should be kept concise and descriptive as possible by including who, what, where, and why in order to improve search engine optimization. Small file sizes reduces the amount of time user's have to wait for the files to load and saves server space. Developers should use <strong>lossless compression</strong> to compress the file sizes while having them not lose their quality. Exact dimensions allow so that the images load quickly. For correct file format, online photos are usually <strong>.JPG</strong>, Line-art images and icons are generally <strong>.GIF</strong> and sometimes 8-bit <strong>.PNG</strong>, and graphics with true transparency need 24-bit .PNG. Reduced resolution so that monitors can render the website. For color mode, RGB is used for .PNG, .JPG, .SVG, and .WebP, and Indexed is used for .GIF.
                </p>

                <p>
                    The file formats most appropriate for photos are .JPG and .WebP because they compress down to small file sizes while remaining rectangular, and much of their quality can still be preserved through the compression. The file format most appropriate for line art is .PNG because they can be placed over a variety of colors without distortion. However, for line art graphics, .GIF is used which their edges anti-alias to one background matte color.
                </p>
            </article>

            <article id="favicons">
                <h3>Favicons</h3>
                
                <p>
                    Browsers and devices utilize <strong>Favicons</strong> by saving them in a number of formats such as .GIF, .PNG, .ICO, and .SVG. Here, .SVG and .PNG are the most common. The .ICO format is also for older browsers, which was originally made for Internet Explorer. As devices are developed and new standards emerge, the nuances and requirements for favicons change. The process begins with a symbol which is modified to be optimal for different devices. It is then saved into the multiple file formats such as those mentioned earlier for different browsers and devices. The browser gets the files, and will save the icon and anchor it to a bookmark or favorites list and the device screen or search engine results list.
                </p>

            </article>

            <article id="css">
                <h3>CSS</h3>

                <p>
                    <strong>CSS stylesheets</strong> are incorporated into websites and apps in order to improve their usability, readability, and legibility. Furthermore, without CSS stylesheets being utilized, all websites and apps would look exactly the same due to HTML's predefined style. Since these stylesheets can override HTML's style rules, they greatly diversify how content is presented, making apps that can stand out from the crowd. 
                </p>

                <p>
                    The 5 ways to incorporate styles are through <strong>external CSS rules</strong>, <strong>embedding</strong> directly into HTML, <strong>inline</strong> within an element, <strong>JavaScript template literals</strong>, and regular JavaScript by manipulating <strong>Document Object Model</strong> (MOD). Externally linked CSS stylesheets are often the most efficient way to incorporate styles since it keeps all the style rules organized in one place and applies to the entire website. The other methods tend to be for one-off style changes. Therefore, they are more useful for single alterations to the website, rather than big rule changes that affect the whole website.
                </p>
            </article>

            <article id="forms">
                <h3>Forms</h3>

                <p>
                    There are 6 main goals of accessible forms. The first is to provide clear instructions to the user above the <strong>form</strong> and in the <strong>labels</strong> because this will allow them to be effectively guided through the site. The second is to let the users know why the site is gathering their data and which fields are required in order to make it the site transparent to the user. The third is to set the first field to <strong>autofocus</strong> in order to make it easier to begin the form and help those with disabilities. The fourth is to ensure each form control can be filled in using the keyboard for those who can't use the cursor. The fifth is to add tab indexing to complex forms so that it is clear what order the user should fill the fields in. The final is to ensure validation messages are screen readable to help those with disabilities and make it clear to the user that their request has been received.
                </p>

                <p>
                    There are many major tags when it comes to forms. The form tag creates the place the form goes, and has an <strong>action</strong> attribute that sets up where the request will be sent and a <strong>method</strong> to determine how it will be sent. <strong>Fieldset</strong> and <strong>legend</strong> help divide up the form so that data can be more neatly organized and make the forms more accessible to the visually-impaired. The label tag is paired with the input tag so that it can tell the user the purpose of the data entry, and has a for attribute to match with the input tag's ID. The input tag has many attributes such as type, name, and ID which helps organize the data and determine how it will be displayed. For instance, the <strong>email, radio, and checkbox types</strong> will change how the data is displayed. The select tag has attributes such has name and ID, and creates a drop box with each box belonging to the option tag. The <strong>textarea</strong> tag has many of the same attributes as the input tag, but is used for long responses. Finally, the <strong>button</strong> tag has attributes such as name, ID, and type, and allows the user to submit their data.
                </p>

                <p>
                    Web developers must improve the usability of the website by changing the style of the HTML code through CSS. The fieldset should have margin and padding to create breathing room and make the form more readable. All the input fields should be made bigger to make them big enough for <strong>fat fingers</strong> to use on mobile devices, and they should also have padding to make them more readable. Other fields such as required make it clearer to the user which inputs they need to fill out, making the site more usable. 
                </p>

            </article>
            
            <article id="express">
                <h3>Express</h3>

                <p>
                    <strong>Node</strong> is an open-source environment to create website applications. The open-source aspect of it improves the developer experience, as it allows the developer to import resources from a rich online library collection of various JavaScript modules. The <strong>NPM</strong> allows developers to access this library, as it acts as the online depository for these modules and is a command-line utility that can easily install the packages. This makes it much easier for developers to create applications as they do not have to start everything from scratch because instead they can import the work of others. <strong>Express</strong> is a popular framework in creating these applications, as it gives developers the ability to get, post, and delete data, and define the ports and routes the data of the website will take. 
                </p>

            </article>

            <article id="javascript">
                <h3>JavaScript</h3>

                <p>
                    The main data types in JavaScript are <strong>numbers, boolean values, strings, symbols, special values</strong>  such as undefined and null, and <strong>objects</strong>. Numbers contain digits, and should only be converted to and from string through built-in JavaScript functions. Boolean values can be declared as true or false. Strings are collections of characters. Undefined values are often declared but not initialized, while null values are absent of any value. Objects are collections of data types. 
                </p>

                <p>
                    JavaScript objects come in name-value pairs, and their properties can be manipulated through <strong>CRUD</strong> (create, read, update, delete). <strong>Arrays</strong> are objects whose property names are strings, and its data can be accessed through indexing. <strong>JSON</strong> is JavaScript Object Notation and is typically used to represent an object in a way so that it can transfer over to other programming languages. JavaScript objects can be transformed into a JSON string, and the other way around.
                </p>

                <p>
                    <strong>Conditionals</strong> allows for code to branch depending on whether the boolean expression is met more not. In JavaScript, there are strict equality operators such as === and !== in which not only the operand's equality is assessed but whether they are the same type, as opposed to the loose equality operators of == and !=. <strong>Loops</strong> are also similar to other languages, in which while or for loops can keep looping until their condition is met. There are also <strong>for of</strong> loops which iterates over elements of an iterable value, and <strong>for in</strong> loops which iterates over the properties of an object.
                </p>

                <p>
                    <strong>Object-Oriented Programming</strong> organizes the design of the code around <strong>classes</strong>. Classes set up the parameters for potential objects so that they can be easily created through the <strong>new</strong> command. In JavaScript, <strong>prototypes</strong> can also be used to create new objects, but that is now considered obsolete compared to the class model. 
                </p>

                <p>
                    <strong>Functional Programming</strong> is when the code is organized in blocks of functions so that code can be easily reused multiple times through simply calling the function. In JavaScript, functions are <strong>first-class</strong>, which means that they can be assigned to variables, receive other functions as arguments, and return functions. 
                </p>

            </article>
        </>
        );
    }
export default TopicsPage;
