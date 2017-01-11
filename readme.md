#Introduction
This documentation is in place to help learning path designers build out their designs from the component shells and components available. 

## What do we start out with?
You will start with an index.html skeleton file that will include the necessary css/js files to style and add functionality to the page. Also within the skeleton file is the Top-Level Shell that contains links to open the sub-topics.

## What are components and shells?
A component is generally an encapsulated design feature such as an accordion, carousel, tabbed content or overview that can be copy/pasted into an area in a shell. Usually a component is used to present a topic. A shell is usually the design that houses a number of components and/or other html content/markup. A shell, usually to house a topics (1.1, 1.2, etc) many sub-topics (1.1.1, 1.2.4, etc). 


## Replacing placeholders

### Topical Placeholders
placeholders in the form of [[topicX]], [[topicX-Y]], [[topicX-Y-Z]], etc are meant to be replaced with such replacements as topic1, topic1-1, topic1-1-2, etc. an example may be:

**From:**

```html
<div class="[[topicX-Y]]"> 
  This is a topic item!
</div>
```

**To:**

```html
<div class="topic5-3"> 
  This is a topic item! 
</div>
```

### Component and Content Placeholders
If you see a placeholder with [[component or content]] then that means to either copy a component into a spot in the shell you chose or to place regular html content in that spot. Example for content are:

**From:**

```html
<div class="item">
 [[component or content]] 
</div>
```

**To:**

```html
<div class="item">
  <p> Welcome to the fall semesters Trig II course! </p>
</div>
```

An example of a component getting moved over would be:

**From:**

```html
<div class="item">
  [[component or content]]
</div>
```

**To:**

```html
<div class="item">
  <!-- Start of carousel a component -->
  <div id="topic5-1-carousel" class="carousel sub-carousel slide" data-ride="carousel">
    <header>Presentation Format</header>
    <!-- Indicators -->
    <ol class="carousel-indicators">
        <li data-target="#topic5-1-carousel" data-slide-to="0" class="active"></li>
        <li data-target="#topic5-1-carousel" data-slide-to="1"></li>
        <li data-target="#topic5-1-carousel" data-slide-to="2"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
        <div class="item active">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                deserunt exercitationem facilis nisi officia reiciendis sequi voluptate
                voluptatibus? Amet aspernatur cumque dolor id ipsam nam obcaecati porro
                quaerat. Architecto, blanditiis.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid
                architecto aut delectus deserunt doloribus esse expedita fuga ipsam
                iusto labore neque, nulla quasi qui repellat rerum saepe veritatis
                voluptas.</p>
        </div>
        <div class="item">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                deserunt exercitationem facilis nisi officia reiciendis sequi voluptate
                voluptatibus? Amet aspernatur cumque dolor id ipsam nam obcaecati porro
                quaerat. Architecto, blanditiis.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid
                architecto aut delectus deserunt doloribus esse expedita fuga ipsam
                iusto labore neque, nulla quasi qui repellat rerum saepe veritatis
                voluptas.</p>
        </div>
    </div>

    <footer>
        <!-- Controls -->
        <a class="previous-slide" href="#topic5-1-carousel" role="button" data-slide="prev">
            <i class="fa fa-angle-left" aria-hidden="true"></i>
            <span class="sr-only">Previous</span>
        </a>
        <a class="next-slide" href="#topic5-1-carousel" role="button" data-slide="next">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
            <span class="sr-only">Next</span>
        </a>
    </footer>
  </div>
  <!-- End of the carousel component -->
</div>
```

## Available Components and Shells

### Shells
There are three shells available. One Top-Level accordion view shell (this will serve to house all of the main subtopics) as well as two types of Sub-Topic shells that the Top-Level shell links to. The two Sub-Topic shell types are accordion and carousel. These serve to house sub-sub-topics such as (1.1.1, 2.1.4, etc).

#### Top-Level Shell (This should already be available in the base index.html file)

```html
<!-- Start of Top Level Topic -->
<div class="container page top-level">
    <header>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">
                        <img alt="Brand" src="images/logosmall.png">
                    </a>
                </div>
            </div>
        </nav>
        <nav class="sub-navbar">
            <a href="" class="toggle"><i class="fa fa-angle-double-down toggle" aria-hidden="true"></i></a>
            <a href="http://www.moodle.com"><i class="fa fa-home home" aria-hidden="true"></i></a>
            <h1 class="course-name">Biology 101</h1>
        </nav>
    </header>

    <main role="main">
        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
          
            <!-- Copy this to create another accordion item/Topic -->
            <div class="panel panel-default">
                <div class="panel-heading" role="tab" id="[[topicX]]-heading">
                    <h2 class="panel-title">
                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#[[topicX]]-collapse"
                           aria-expanded="true" aria-controls="[[topicX]]-collapse">
                            <i class="fa fa-angle-down" aria-hidden="true"></i> Getting Started
                        </a>
                    </h2>
                </div>
                <div id="[[topicX]]-collapse" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="[[topicX]]-heading">
                    <div class="panel-body">
                        <section class="row">
                            <article class="col-md-8">
                                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson
                                    ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food
                                    truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a
                                    bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                                <p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                                    ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                                    farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                                    accusamus labore sustainable VHS.</p>

                                <div class="embed-responsive embed-responsive-16by9">
                                    <iframe class="embed-responsive-item"
                                            src="https://www.youtube.com/embed/I9hSzZlJObo"></iframe>
                                </div>
                            </article>
                            <aside class="col-md-4">
                                <div style="text-align:right">
                                    <button class="btn btn-default btn-dashboard">
                                        Dashboard
                                        <i class="fa fa-tachometer" aria-hidden="true"></i>
                                    </button>
                                </div>

                                <section class="block">
                                    <header><h4>Learning Objectives</h4></header>
                                    <div class="block-body">
                                        <ul>
                                            <li>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                                nesciunt sapiente
                                                ea proident
                                            </li>

                                            <li>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                                nesciunt sapiente
                                                ea proident
                                            </li>

                                            <li>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                                nesciunt sapiente
                                                ea proident
                                            </li>

                                            <li>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                                nesciunt sapiente
                                                ea proident
                                            </li>
                                        </ul>
                                    </div>
                                </section>
                            </aside>
                        </section>

                        <section class="row sub-topics">
                            <!-- Copy this to create a new sub-topic link block -->
                            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                <article>
                                    <header>Topic X.Y Should Wrap Here So It Should Work</header>
                                    <div class="body withbackground">
                                        <p>Text goes here. Yep, this is where we will describe a sub-topic</p>
                                    </div>
                                    <footer>
                                        <a href="#" class="btn btn-default btn-review" data-subtopic="[[topicX-Y]]">Review</a>
                                    </footer>
                                </article>
                            </div>
                            <!-- Paste the copied sub-topic link block below this comment -->
                            
                        </section>
                    </div>
                </div>
            </div>
            <!-- Paste the copied accordion panel/topic below this comment -->
            
        </div>
    </main>
</div>
<!-- End of Top Level Topic. Any sub-topic shell goes beneath this one -->
```

#### Sub-Topic Accordion Shell (copy/paste below the Top-Level Shell and outside any other shell)

```html
<!-- Start Sub Topic with Accordion Shell: Separates Sub-Topics -->
<div class="container page sub-topic sub-topic-accordion" id="[[topicX-Y]]">
    <div class="row no-gutters">
        <aside class="side-menu col-eq col-md-3">
            <div class="wrap">
                <hr>
                <ul>
                    <!-- Copy this if you end up creating a new accordion panel/sub-topic -->
                    <li class="active">
                      <a href="#[[topic-X-Y-Z]]-collapse" data-toggle="collapse" data-parent="#[[topic-X-Y]]-accordion">Topic 1.1.1</a>
                    </li>
                    <!-- Paste the li tag without the active class below this comment -->
                </ul>
            </div>
        </aside>
        <div class="main-content col-eq col-md-9">
            <div class="wrap">
                <header>
                    <a href="#" class="side-menu-toggle"><i class="fa fa-bars" aria-hidden="true"></i></a>
                    <a href="#" class="toggle"><i class="fa fa-angle-double-down" aria-hidden="true"></i></a>
                    <a href="#" class="home"><i class="fa fa-home" aria-hidden="true"></i></a>
                    <h1><span>Topic X</span><span>Topic X.Y</span></h1>
                </header>

                <main>
                    <div class="panel-group" id="[[topicX-Y]]-accordion" role="tablist" aria-multiselectable="true">
                      
                        <!-- Copy this if you need to create a new accordion panel/sub-topic -->
                        <div class="panel panel-default" id="[[topicX-Y-Z]]">
                            <div class="panel-heading" role="tab" id="[[topicX-Y-Z]]-heading">
                                <h2 class="panel-title">
                                    <a role="button" data-toggle="collapse" data-parent="#[[topicX-Y]]-accordion"
                                       href="#[[topicX-Y-Z]]-collapse" aria-expanded="true"
                                       aria-controls="[[topicX-Y-Z]]-collapse">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i> Collapsible Group Item #1
                                    </a>
                                </h2>
                            </div>
                            <div id="[[topicX-Y-Z]]-collapse" class="panel-collapse collapse in" role="tabpanel"
                                 aria-labelledby="[[topicX-Y-Z]]-heading">
                                <div class="panel-body">
                                    [[component or content]]
                                </div>
                            </div>
                        </div>
                        <!-- Paste the accordion panel/sub-topic below this comment -->
                        
                    </div>
                </main>
            </div>
        </div>
    </div>
</div>
<!-- End Sub Topic with Accordion Shell -->
```

#### Sub-Topic Carousel Shell (copy/paste below the Top-Level Shell and outside any other shell)

```html
<!-- Start Sub Topic with Carousel Shell: Separates Sub-Topics -->
<div class="container page sub-topic sub-topic-carousel" id="[[topicX-Y]]">
    <div class="row no-gutters">
        <aside class="side-menu col-md-3">
            <div class="wrap">
                <hr>
                <ul>
                    <!-- Copy this if you end up creating a new carousel item/sub-topic -->
                    <li class="active">
                      <a href="#" data-target="#[[topicX-Y]]-carousel" data-slide-to="0" class="active">
                        Topic X.Y.Z
                      </a>
                    </li>
                    <!-- Paste the li tag without the active class below this comment and increment data-slide-to by 1 -->
                    
                </ul>
            </div>
        </aside>
        <div class="main-content col-md-9">
            <div class="wrap">
                <header>
                    <a href="" class="side-menu-toggle"><i class="fa fa-bars" aria-hidden="true"></i></a>
                    <a href="" class="home"><i class="fa fa-home" aria-hidden="true"></i></a>
                    <h1><span>Topic X</span><span>Topic X.Y</span></h1>
                </header>

                <main>
                    <div id="[[topicX-Y]]-carousel" class="carousel slide" data-ride="carousel" data-interval="false">
                        <!-- Wrapper for slides -->
                        <div class="carousel-inner" role="listbox">
                          
                            <!-- Copy this carousel item/sub-topic to create a new sub-topic -->
                            <div class="item active" data-slide="0">
                                [[component or content]]
                            </div>
                            <!-- Paste the carousel item/sub-topic below this comment without the active class and increment data-slide by 1 -->
                            
                        </div>
                    </div>
                </main>

                <footer>
                    <!-- Controls -->
                    <nav>
                        <a class="left" href="#[[topicX-Y]]-carousel" role="button" data-slide="prev">
                            <i class="fa fa-chevron-left" aria-hidden="true"></i> Prev
                        </a>
                        <a class="right" href="#[[topicX-Y]]-carousel" role="button" data-slide="next">
                            Next <i class="fa fa-chevron-right" aria-hidden="true"></i>
                        </a>
                    </nav>
                </footer>
            </div>
        </div>
    </div>
</div>
<!-- End Sub Topic with Carousel Shell -->
```

### Components
Components usually encapsulate content that represent sub-topics beneath sub-topics (ex. 1.1.3). There are four components available. The overview, presentation, tabbed content and quote components. Below is the markup. Place where you see [[component or content]] freely.

#### Overview

```html
<div class="col-md-6">
    <h2>X.Y.Z Overview</h2>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam
        consequatur, consequuntur corporis dignissimos, et eum exercitationem facere
        fugit hic nostrum odio quae quam sapiente sed sequi sunt! Id, tempora.</p>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam
        consequatur, consequuntur corporis dignissimos, et eum exercitationem facere
        fugit hic nostrum odio quae quam sapiente sed sequi sunt! Id, tempora.</p>
</div>
<div class="col-md-6">
    <div class="block-controls">
        <button class="btn btn-default btn-dashboard">
            Dashboard
            <i class="fa fa-tachometer" aria-hidden="true"></i>
        </button>
    </div>

    <section class="block">
        <header><h4>Learning Objectives</h4></header>
        <div class="block-body">
            <ul>
                <li>Learning Objective #1</li>

                <li>Learning Objective #2</li>

                <li>Learning Objective #3</li>

                <li>Learning Objective #4</li>
            </ul>
        </div>
    </section>
</div>
```

#### Presentation

```html
<h2>Topic X.Y.Z - Presentation Heading</h2>

<div id="[[topicX-Y-Z]]-carousel" class="carousel sub-carousel slide" data-ride="carousel" data-interval="false">
    <header>Presentation Format</header>
    
    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
      
        <!-- Copy this carousel item to create a new content section -->
        <div class="item active">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                deserunt exercitationem facilis nisi officia reiciendis sequi voluptate
                voluptatibus? Amet aspernatur cumque dolor id ipsam nam obcaecati porro
                quaerat. Architecto, blanditiis.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid
                architecto aut delectus deserunt doloribus esse expedita fuga ipsam
                iusto labore neque, nulla quasi qui repellat rerum saepe veritatis
                voluptas.</p>
        </div>
        <!-- Paste the copied carousel item below this comment without the active class -->
        
    </div>

    <footer>
        <!-- Controls -->
        <a class="previous-slide" href="#[[topicX-Y-Z]]-carousel" role="button" data-slide="prev">
            <i class="fa fa-angle-left" aria-hidden="true"></i>
            <span class="sr-only">Previous</span>
        </a>
        <a class="next-slide" href="#[[topicX-Y-Z]]-carousel" role="button" data-slide="next">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
            <span class="sr-only">Next</span>
        </a>
    </footer>
</div>
```

#### Tabbed Content

```html
<h2>Topic 1.2.3 - Tabbed Content</h2>

<div class="tab-section">
    <!-- Nav tabs -->
    <ul class="nav nav-tabs" role="tablist">
      
        <!-- Copy this if you end up creating a new tab content area -->
        <li role="presentation" class="active">
          <a href="#[[Topic-X-Y-Z]]section1" aria-controls="[[Topic-X-Y-Z]]section1" role="tab" data-toggle="tab">
            Section Title
          </a>
        </li>
        <!-- Paste the copied li and increment the # (1 in section1) by 1 (ex. section2) -->
        
    </ul>

    <!-- Tab panes -->
    <div class="tab-content">
      
        <!-- Copy this tab panel to create a new panel -->
        <div role="tabpanel" class="tab-pane active" id="[[Topic-X-Y-Z]]section1">
            <h3>Section Title</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci
                aliquid animi cupiditate delectus ea earum eligendi et eum itaque minus natus odit
                optio perferendis sequi, sit ut velit vitae.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci
                aliquid animi cupiditate delectus ea earum eligendi et eum itaque minus natus odit
                optio perferendis sequi, sit ut velit vitae.</p>
        </div>
        <!-- Paste the copied tab panel below this comment and increment the # (1 in section1) by 1 (ex. section2) -->
        
    </div>
</div>
```

#### Quote

```html
<blockquote>
    <p>
        <i class="fa fa-lightbulb-o" aria-hidden="true"></i>
        "The important thing is not to stop questioning. Curiosity has its own reason
        for existing." - Albert Einstein
    </p>
</blockquote>
```
## Sub-Topic Block Background Styling
If you want to add an image to a Sub-Topic block, you will need to add the "withbackground" and custom class (such as treestopic below)
to the block like the example below:

```html
<!-- Copy this to create a new sub-topic link block -->
<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
    <article>
        <header>Topic X.Y Should Wrap Here So It Should Work</header>
        <div class="body withbackground treestopic">
            <p>Text goes here. Yep, this is where we will describe a sub-topic</p>
        </div>
        <footer>
            <a href="#" class="btn btn-default btn-review" data-subtopic="[[topicX-Y]]">Review</a>
        </footer>
    </article>
</div>
<!-- Paste the copied sub-topic link block below this comment -->
```
Then add a css entry for the custom class in the stylesheet file. (replace treestopic with whatever you are calling it).

```css
.treestopic {
    background-image:url(images/yourimagehere.jpg);
}
```

Replace yourimagehere.jpg with your filename for the image.


## Questions/Amendments?
If you have any questions or amendments to this document and have access to edit this, please feel free. If you do not have access, please let an administrator know and we can change any mistakes or changes in the documentation. Thank You.