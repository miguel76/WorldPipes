


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>node-rdf/lib/Default.js at master · Acubed/node-rdf · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="fe16.rs.github.com">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="xhr-socket" href="/_sockets" />
    
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="LTZvxmQf9MaXWKFCP9ph1QSemOidNcvOaSf070xu3QI=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-f913aa6cea9c2be873a594b06df4bdd56c61a47a.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-73cb9c180ee487edb3f37f7f9b1cbf7bd6ebe204.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://github.global.ssl.fastly.net/assets/frameworks-e8054ad804a1cf9e9849130fee5a4a5487b663ed.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-97664a532fc6064b297cd0484a0b7bfda19f46b4.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="6eeba794374d861b396b25d9719604b1">

        <link data-pjax-transient rel='permalink' href='/Acubed/node-rdf/blob/eae3509c73c5291d34a0b7ddadbf26de45fb2169/lib/Default.js'>
  <meta property="og:title" content="node-rdf"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/Acubed/node-rdf"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="node-rdf - ECMAScript libraries for handling RDF data (based off of the current RDF APIs and webr3&#39;s js3)"/>

  <meta name="description" content="node-rdf - ECMAScript libraries for handling RDF data (based off of the current RDF APIs and webr3&#39;s js3)" />

  <meta content="437517" name="octolytics-dimension-user_id" /><meta content="Acubed" name="octolytics-dimension-user_login" /><meta content="1791188" name="octolytics-dimension-repository_id" /><meta content="Acubed/node-rdf" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="1791188" name="octolytics-dimension-repository_network_root_id" /><meta content="Acubed/node-rdf" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/Acubed/node-rdf/commits/master.atom" rel="alternate" title="Recent Commits to node-rdf:master" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob linux vis-public env-production ">

    <div class="wrapper">
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/signup">Sign up</a>
      <a class="button" href="/login?return_to=%2FAcubed%2Fnode-rdf%2Fblob%2Fmaster%2Flib%2FDefault.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">


      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="Acubed/node-rdf"
      data-branch="master"
      data-sha="8e4dee3c2c545210123f52c641b98d0545d07461"
  >

    <input type="hidden" name="nwo" value="Acubed/node-rdf" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>


      


          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
  <a href="/login?return_to=%2FAcubed%2Fnode-rdf"
  class="minibutton with-count js-toggler-target star-button entice tooltipped upwards "
  title="You must be signed in to use this feature" rel="nofollow">
  <span class="octicon octicon-star"></span>Star
</a>
<a class="social-count js-social-count" href="/Acubed/node-rdf/stargazers">
  22
</a>

  </li>

    <li>
      <a href="/login?return_to=%2FAcubed%2Fnode-rdf"
        class="minibutton with-count js-toggler-target fork-button entice tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/Acubed/node-rdf/network" class="social-count">
        2
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/Acubed" class="url fn" itemprop="url" rel="author"><span itemprop="title">Acubed</span></a></span
          ><span class="repohead-name-divider">/</span><strong
          ><a href="/Acubed/node-rdf" class="js-current-repository js-repo-home-link">node-rdf</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container ">

        <div class="repository-sidebar">
            

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li class="tooltipped leftwards" title="Code">
        <a href="/Acubed/node-rdf" aria-label="Code" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /Acubed/node-rdf">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/Acubed/node-rdf/issues" aria-label="Issues" class="js-selected-navigation-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /Acubed/node-rdf/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>1</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/Acubed/node-rdf/pulls" aria-label="Pull Requests" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /Acubed/node-rdf/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>1</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/Acubed/node-rdf/pulse" aria-label="Pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /Acubed/node-rdf/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/Acubed/node-rdf/graphs" aria-label="Graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /Acubed/node-rdf/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/Acubed/node-rdf/network" aria-label="Network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /Acubed/node-rdf/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    </ul>

  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/Acubed/node-rdf.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/Acubed/node-rdf.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/Acubed/node-rdf" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/Acubed/node-rdf" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>



<p class="clone-options">You can clone with
    <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
    <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>,
  and <a href="https://help.github.com/articles/which-remote-url-should-i-use">other methods.</a>
</p>



                <a href="/Acubed/node-rdf/archive/master.zip"
                   class="minibutton sidebar-button"
                   title="Download this repository as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:3a11e78b17eee566a1c2b7c26c2e2f2f -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:3a11e78b17eee566a1c2b7c26c2e2f2f -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/Acubed/node-rdf/find/master" data-pjax data-hotkey="t" style="display:none">Show File Finder</a>

<div class="file-navigation">
  


<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Acubed/node-rdf/blob/master/lib/Default.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" data-skip-pjax="true" rel="nofollow" title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Acubed/node-rdf/blob/v2.1.0/lib/Default.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.1.0" data-skip-pjax="true" rel="nofollow" title="v2.1.0">v2.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Acubed/node-rdf/blob/v2.0.1/lib/Default.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.0.1" data-skip-pjax="true" rel="nofollow" title="v2.0.1">v2.0.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Acubed/node-rdf/blob/v2.0.0/lib/Default.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.0.0" data-skip-pjax="true" rel="nofollow" title="v2.0.0">v2.0.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Acubed/node-rdf/blob/v1.0.1/lib/Default.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.0.1" data-skip-pjax="true" rel="nofollow" title="v1.0.1">v1.0.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Acubed/node-rdf/blob/v1.0.0/lib/Default.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.0.0" data-skip-pjax="true" rel="nofollow" title="v1.0.0">v1.0.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Acubed/node-rdf/blob/v0.0.4/lib/Default.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.0.4" data-skip-pjax="true" rel="nofollow" title="v0.0.4">v0.0.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/Acubed/node-rdf/blob/v0.0.2/lib/Default.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v0.0.2" data-skip-pjax="true" rel="nofollow" title="v0.0.2">v0.0.2</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/Acubed/node-rdf" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">node-rdf</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/Acubed/node-rdf/tree/master/lib" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">lib</span></a></span><span class="separator"> / </span><strong class="final-path">Default.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="lib/Default.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit commit-loader file-history-tease js-deferred-content" data-url="/Acubed/node-rdf/contributors/master/lib/Default.js">
    Fetching contributors…

    <div class="participation">
      <p class="loader-loading"><img alt="Octocat-spinner-32-eaf2f5" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" /></p>
      <p class="loader-error">Cannot retrieve contributors at this time</p>
    </div>
  </div>

<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>149 lines (148 sloc)</span>
        <span>9.456 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
              <a class="minibutton js-entice" href=""
                 data-entice="You must be signed in to make or propose changes">Edit</a>
          <a href="/Acubed/node-rdf/raw/master/lib/Default.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/Acubed/node-rdf/blame/master/lib/Default.js" class="button minibutton ">Blame</a>
          <a href="/Acubed/node-rdf/commits/master/lib/Default.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
            <a class="minibutton danger empty-icon js-entice" href=""
               data-entice="You must be signed in and on a branch to make or propose changes">
            Delete
          </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="nx">exports</span><span class="p">.</span><span class="nx">loadDefaultTypeConverters</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">context</span><span class="p">){</span></div><div class='line' id='LC2'>	<span class="kd">var</span> <span class="nx">stringConverter</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">inputType</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="k">new</span> <span class="nb">String</span><span class="p">(</span><span class="nx">value</span><span class="p">).</span><span class="nx">valueOf</span><span class="p">()</span> <span class="p">};</span></div><div class='line' id='LC3'>	<span class="nx">context</span><span class="p">.</span><span class="nx">registerTypeConversion</span><span class="p">(</span><span class="s2">&quot;xsd:string&quot;</span><span class="p">,</span> <span class="nx">stringConverter</span><span class="p">);</span></div><div class='line' id='LC4'>	<span class="kd">var</span> <span class="nx">booleanConverter</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">inputType</span><span class="p">)</span> <span class="p">{</span> <span class="k">switch</span><span class="p">(</span><span class="nx">value</span><span class="p">){</span><span class="k">case</span> <span class="s2">&quot;false&quot;</span><span class="o">:</span><span class="k">case</span> <span class="s2">&quot;0&quot;</span><span class="o">:</span><span class="k">return</span> <span class="kc">false</span><span class="p">;}</span> <span class="k">return</span><span class="p">(</span><span class="k">new</span> <span class="nb">Boolean</span><span class="p">(</span><span class="nx">value</span><span class="p">)).</span><span class="nx">valueOf</span><span class="p">()</span> <span class="p">};</span></div><div class='line' id='LC5'>	<span class="nx">context</span><span class="p">.</span><span class="nx">registerTypeConversion</span><span class="p">(</span><span class="s2">&quot;xsd:boolean&quot;</span><span class="p">,</span> <span class="nx">booleanConverter</span><span class="p">);</span></div><div class='line' id='LC6'>	<span class="kd">var</span> <span class="nx">numberConverter</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">inputType</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span><span class="p">(</span><span class="k">new</span> <span class="nb">Number</span><span class="p">(</span><span class="nx">value</span><span class="p">)).</span><span class="nx">valueOf</span><span class="p">()</span> <span class="p">};</span></div><div class='line' id='LC7'>	<span class="kd">var</span> <span class="nx">floatConverter</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">inputType</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC8'>		<span class="k">switch</span><span class="p">(</span><span class="nx">value</span><span class="p">){</span></div><div class='line' id='LC9'>			<span class="k">case</span> <span class="s2">&quot;INF&quot;</span><span class="o">:</span> <span class="k">return</span> <span class="nb">Number</span><span class="p">.</span><span class="nx">POSITIVE_INFINITY</span><span class="p">;</span></div><div class='line' id='LC10'>			<span class="k">case</span> <span class="s2">&quot;-INF&quot;</span><span class="o">:</span> <span class="k">return</span> <span class="nb">Number</span><span class="p">.</span><span class="nx">NEGATIVE_INFINITY</span><span class="p">;</span></div><div class='line' id='LC11'>			<span class="k">default</span><span class="o">:</span> <span class="k">return</span> <span class="nx">numberConverter</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">inputType</span><span class="p">);</span></div><div class='line' id='LC12'>		<span class="p">};</span></div><div class='line' id='LC13'>	<span class="p">};</span></div><div class='line' id='LC14'>	<span class="nx">context</span><span class="p">.</span><span class="nx">registerTypeConversion</span><span class="p">(</span><span class="s2">&quot;xsd:float&quot;</span><span class="p">,</span> <span class="nx">floatConverter</span><span class="p">);</span></div><div class='line' id='LC15'>	<span class="nx">context</span><span class="p">.</span><span class="nx">registerTypeConversion</span><span class="p">(</span><span class="s2">&quot;xsd:integer&quot;</span><span class="p">,</span> <span class="nx">numberConverter</span><span class="p">);</span></div><div class='line' id='LC16'>	<span class="nx">context</span><span class="p">.</span><span class="nx">registerTypeConversion</span><span class="p">(</span><span class="s2">&quot;xsd:long&quot;</span><span class="p">,</span> <span class="nx">numberConverter</span><span class="p">);</span></div><div class='line' id='LC17'>	<span class="nx">context</span><span class="p">.</span><span class="nx">registerTypeConversion</span><span class="p">(</span><span class="s2">&quot;xsd:double&quot;</span><span class="p">,</span> <span class="nx">numberConverter</span><span class="p">);</span></div><div class='line' id='LC18'>	<span class="nx">context</span><span class="p">.</span><span class="nx">registerTypeConversion</span><span class="p">(</span><span class="s2">&quot;xsd:decimal&quot;</span><span class="p">,</span> <span class="nx">numberConverter</span><span class="p">);</span></div><div class='line' id='LC19'>	<span class="nx">context</span><span class="p">.</span><span class="nx">registerTypeConversion</span><span class="p">(</span><span class="s2">&quot;xsd:nonPositiveInteger&quot;</span><span class="p">,</span> <span class="nx">numberConverter</span><span class="p">);</span></div><div class='line' id='LC20'>	<span class="nx">context</span><span class="p">.</span><span class="nx">registerTypeConversion</span><span class="p">(</span><span class="s2">&quot;xsd:nonNegativeInteger&quot;</span><span class="p">,</span> <span class="nx">numberConverter</span><span class="p">);</span></div><div class='line' id='LC21'>	<span class="nx">context</span><span class="p">.</span><span class="nx">registerTypeConversion</span><span class="p">(</span><span class="s2">&quot;xsd:negativeInteger&quot;</span><span class="p">,</span> <span class="nx">numberConverter</span><span class="p">);</span></div><div class='line' id='LC22'>	<span class="nx">context</span><span class="p">.</span><span class="nx">registerTypeConversion</span><span class="p">(</span><span class="s2">&quot;xsd:int&quot;</span><span class="p">,</span> <span class="nx">numberConverter</span><span class="p">);</span></div><div class='line' id='LC23'>	<span class="nx">context</span><span class="p">.</span><span class="nx">registerTypeConversion</span><span class="p">(</span><span class="s2">&quot;xsd:unsignedLong&quot;</span><span class="p">,</span> <span class="nx">numberConverter</span><span class="p">);</span></div><div class='line' id='LC24'>	<span class="nx">context</span><span class="p">.</span><span class="nx">registerTypeConversion</span><span class="p">(</span><span class="s2">&quot;xsd:positiveInteger&quot;</span><span class="p">,</span> <span class="nx">numberConverter</span><span class="p">);</span></div><div class='line' id='LC25'>	<span class="nx">context</span><span class="p">.</span><span class="nx">registerTypeConversion</span><span class="p">(</span><span class="s2">&quot;xsd:short&quot;</span><span class="p">,</span> <span class="nx">numberConverter</span><span class="p">);</span></div><div class='line' id='LC26'>	<span class="nx">context</span><span class="p">.</span><span class="nx">registerTypeConversion</span><span class="p">(</span><span class="s2">&quot;xsd:unsignedInt&quot;</span><span class="p">,</span> <span class="nx">numberConverter</span><span class="p">);</span></div><div class='line' id='LC27'>	<span class="nx">context</span><span class="p">.</span><span class="nx">registerTypeConversion</span><span class="p">(</span><span class="s2">&quot;xsd:byte&quot;</span><span class="p">,</span> <span class="nx">numberConverter</span><span class="p">);</span></div><div class='line' id='LC28'>	<span class="nx">context</span><span class="p">.</span><span class="nx">registerTypeConversion</span><span class="p">(</span><span class="s2">&quot;xsd:unsignedShort&quot;</span><span class="p">,</span> <span class="nx">numberConverter</span><span class="p">);</span></div><div class='line' id='LC29'>	<span class="nx">context</span><span class="p">.</span><span class="nx">registerTypeConversion</span><span class="p">(</span><span class="s2">&quot;xsd:unsignedByte&quot;</span><span class="p">,</span> <span class="nx">numberConverter</span><span class="p">);</span></div><div class='line' id='LC30'>	<span class="kd">var</span> <span class="nx">dateConverter</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">inputType</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">};</span></div><div class='line' id='LC31'>	<span class="nx">context</span><span class="p">.</span><span class="nx">registerTypeConversion</span><span class="p">(</span><span class="s2">&quot;xsd:date&quot;</span><span class="p">,</span> <span class="nx">dateConverter</span><span class="p">);</span></div><div class='line' id='LC32'>	<span class="nx">context</span><span class="p">.</span><span class="nx">registerTypeConversion</span><span class="p">(</span><span class="s2">&quot;xsd:time&quot;</span><span class="p">,</span> <span class="nx">dateConverter</span><span class="p">);</span></div><div class='line' id='LC33'>	<span class="nx">context</span><span class="p">.</span><span class="nx">registerTypeConversion</span><span class="p">(</span><span class="s2">&quot;xsd:dateTime&quot;</span><span class="p">,</span> <span class="nx">dateConverter</span><span class="p">);</span></div><div class='line' id='LC34'><span class="p">};</span></div><div class='line' id='LC35'><span class="nx">exports</span><span class="p">.</span><span class="nx">loadRequiredPrefixMap</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">context</span><span class="p">){</span></div><div class='line' id='LC36'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;owl&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2002/07/owl#&quot;</span><span class="p">);</span></div><div class='line' id='LC37'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;rdf&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/1999/02/22-rdf-syntax-ns#&quot;</span><span class="p">);</span></div><div class='line' id='LC38'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;rdfs&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2000/01/rdf-schema#&quot;</span><span class="p">);</span></div><div class='line' id='LC39'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;rdfa&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/ns/rdfa#&quot;</span><span class="p">);</span></div><div class='line' id='LC40'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;xhv&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/1999/xhtml/vocab#&quot;</span><span class="p">);</span></div><div class='line' id='LC41'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;xml&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/XML/1998/namespace&quot;</span><span class="p">);</span></div><div class='line' id='LC42'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;xsd&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2001/XMLSchema#&quot;</span><span class="p">);</span></div><div class='line' id='LC43'><span class="p">};</span></div><div class='line' id='LC44'><span class="nx">exports</span><span class="p">.</span><span class="nx">loadDefaultPrefixMap</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">context</span><span class="p">){</span></div><div class='line' id='LC45'>	<span class="nx">exports</span><span class="p">.</span><span class="nx">loadRequiredPrefixMap</span><span class="p">(</span><span class="nx">context</span><span class="p">);</span></div><div class='line' id='LC46'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;grddl&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2003/g/data-view#&quot;</span><span class="p">);</span></div><div class='line' id='LC47'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;powder&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2007/05/powder#&quot;</span><span class="p">);</span></div><div class='line' id='LC48'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;powders&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2007/05/powder-s#&quot;</span><span class="p">);</span></div><div class='line' id='LC49'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;rif&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2007/rif#&quot;</span><span class="p">);</span></div><div class='line' id='LC50'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;atom&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2005/Atom/&quot;</span><span class="p">);</span></div><div class='line' id='LC51'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;xhtml&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/1999/xhtml#&quot;</span><span class="p">);</span></div><div class='line' id='LC52'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;formats&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/ns/formats/&quot;</span><span class="p">);</span></div><div class='line' id='LC53'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;xforms&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2002/xforms/&quot;</span><span class="p">);</span></div><div class='line' id='LC54'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;xhtmlvocab&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/1999/xhtml/vocab/&quot;</span><span class="p">);</span></div><div class='line' id='LC55'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;xpathfn&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2005/xpath-functions#&quot;</span><span class="p">);</span></div><div class='line' id='LC56'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;http&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2006/http#&quot;</span><span class="p">);</span></div><div class='line' id='LC57'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;link&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2006/link#&quot;</span><span class="p">);</span></div><div class='line' id='LC58'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;time&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2006/time#&quot;</span><span class="p">);</span></div><div class='line' id='LC59'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;acl&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/ns/auth/acl#&quot;</span><span class="p">);</span></div><div class='line' id='LC60'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;cert&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/ns/auth/cert#&quot;</span><span class="p">);</span></div><div class='line' id='LC61'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;rsa&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/ns/auth/rsa#&quot;</span><span class="p">);</span></div><div class='line' id='LC62'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;crypto&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2000/10/swap/crypto#&quot;</span><span class="p">);</span></div><div class='line' id='LC63'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;list&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2000/10/swap/list#&quot;</span><span class="p">);</span></div><div class='line' id='LC64'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;log&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2000/10/swap/log#&quot;</span><span class="p">);</span></div><div class='line' id='LC65'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;math&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2000/10/swap/math#&quot;</span><span class="p">);</span></div><div class='line' id='LC66'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;os&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2000/10/swap/os#&quot;</span><span class="p">);</span></div><div class='line' id='LC67'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;string&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2000/10/swap/string#&quot;</span><span class="p">);</span></div><div class='line' id='LC68'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;doc&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2000/10/swap/pim/doc#&quot;</span><span class="p">);</span></div><div class='line' id='LC69'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;contact&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2000/10/swap/pim/contact#&quot;</span><span class="p">);</span></div><div class='line' id='LC70'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;p3p&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2002/01/p3prdfv1#&quot;</span><span class="p">);</span></div><div class='line' id='LC71'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;swrl&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2003/11/swrl#&quot;</span><span class="p">);</span></div><div class='line' id='LC72'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;swrlb&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2003/11/swrlb#&quot;</span><span class="p">);</span></div><div class='line' id='LC73'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;exif&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2003/12/exif/ns#&quot;</span><span class="p">);</span></div><div class='line' id='LC74'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;earl&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/ns/earl#&quot;</span><span class="p">);</span></div><div class='line' id='LC75'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;ma&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/ns/ma-ont#&quot;</span><span class="p">);</span></div><div class='line' id='LC76'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;sawsdl&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/ns/sawsdl#&quot;</span><span class="p">);</span></div><div class='line' id='LC77'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;sd&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/ns/sparql-service-description#&quot;</span><span class="p">);</span></div><div class='line' id='LC78'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;skos&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2004/02/skos/core#&quot;</span><span class="p">);</span></div><div class='line' id='LC79'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;fresnel&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2004/09/fresnel#&quot;</span><span class="p">);</span></div><div class='line' id='LC80'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;gen&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2006/gen/ont#&quot;</span><span class="p">);</span></div><div class='line' id='LC81'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;timezone&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2006/timezone#&quot;</span><span class="p">);</span></div><div class='line' id='LC82'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;skosxl&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2008/05/skos-xl#&quot;</span><span class="p">);</span></div><div class='line' id='LC83'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;org&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/ns/org#&quot;</span><span class="p">);</span></div><div class='line' id='LC84'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;ical&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2002/12/cal/ical#&quot;</span><span class="p">);</span></div><div class='line' id='LC85'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;wgs84&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2003/01/geo/wgs84_pos#&quot;</span><span class="p">);</span></div><div class='line' id='LC86'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;vcard&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2006/vcard/ns#&quot;</span><span class="p">);</span></div><div class='line' id='LC87'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;turtle&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2008/turtle#&quot;</span><span class="p">);</span></div><div class='line' id='LC88'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;pointers&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2009/pointers#&quot;</span><span class="p">);</span></div><div class='line' id='LC89'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;dcat&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/ns/dcat#&quot;</span><span class="p">);</span></div><div class='line' id='LC90'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;imreg&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2004/02/image-regions#&quot;</span><span class="p">);</span></div><div class='line' id='LC91'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;rdfg&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2004/03/trix/rdfg-1/&quot;</span><span class="p">);</span></div><div class='line' id='LC92'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;swp&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2004/03/trix/swp-2/&quot;</span><span class="p">);</span></div><div class='line' id='LC93'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;rei&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2004/06/rei#&quot;</span><span class="p">);</span></div><div class='line' id='LC94'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;wairole&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2005/01/wai-rdf/GUIRoleTaxonomy#&quot;</span><span class="p">);</span></div><div class='line' id='LC95'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;states&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2005/07/aaa#&quot;</span><span class="p">);</span></div><div class='line' id='LC96'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;wn20schema&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2006/03/wn/wn20/schema/&quot;</span><span class="p">);</span></div><div class='line' id='LC97'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;httph&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2007/ont/httph#&quot;</span><span class="p">);</span></div><div class='line' id='LC98'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;act&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2007/rif-builtin-action#&quot;</span><span class="p">);</span></div><div class='line' id='LC99'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;common&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2007/uwa/context/common.owl#&quot;</span><span class="p">);</span></div><div class='line' id='LC100'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;dcn&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2007/uwa/context/deliverycontext.owl#&quot;</span><span class="p">);</span></div><div class='line' id='LC101'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;hard&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2007/uwa/context/hardware.owl#&quot;</span><span class="p">);</span></div><div class='line' id='LC102'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;java&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2007/uwa/context/java.owl#&quot;</span><span class="p">);</span></div><div class='line' id='LC103'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;loc&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2007/uwa/context/location.owl#&quot;</span><span class="p">);</span></div><div class='line' id='LC104'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;net&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2007/uwa/context/network.owl#&quot;</span><span class="p">);</span></div><div class='line' id='LC105'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;push&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2007/uwa/context/push.owl#&quot;</span><span class="p">);</span></div><div class='line' id='LC106'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;soft&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2007/uwa/context/software.owl#&quot;</span><span class="p">);</span></div><div class='line' id='LC107'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;web&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2007/uwa/context/web.owl#&quot;</span><span class="p">);</span></div><div class='line' id='LC108'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;content&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2008/content#&quot;</span><span class="p">);</span></div><div class='line' id='LC109'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;vs&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.w3.org/2003/06/sw-vocab-status/ns#&quot;</span><span class="p">);</span></div><div class='line' id='LC110'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;air&quot;</span><span class="p">,</span> <span class="s2">&quot;http://dig.csail.mit.edu/TAMI/2007/amord/air#&quot;</span><span class="p">);</span></div><div class='line' id='LC111'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;ex&quot;</span><span class="p">,</span> <span class="s2">&quot;http://example.org/&quot;</span><span class="p">);</span></div><div class='line' id='LC112'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;dc&quot;</span><span class="p">,</span> <span class="s2">&quot;http://purl.org/dc/terms/&quot;</span><span class="p">);</span></div><div class='line' id='LC113'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;dc11&quot;</span><span class="p">,</span> <span class="s2">&quot;http://purl.org/dc/elements/1.1/&quot;</span><span class="p">);</span></div><div class='line' id='LC114'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;dctype&quot;</span><span class="p">,</span> <span class="s2">&quot;http://purl.org/dc/dcmitype/&quot;</span><span class="p">);</span></div><div class='line' id='LC115'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;foaf&quot;</span><span class="p">,</span> <span class="s2">&quot;http://xmlns.com/foaf/0.1/&quot;</span><span class="p">);</span></div><div class='line' id='LC116'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;cc&quot;</span><span class="p">,</span> <span class="s2">&quot;http://creativecommons.org/ns#&quot;</span><span class="p">);</span></div><div class='line' id='LC117'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;opensearch&quot;</span><span class="p">,</span> <span class="s2">&quot;http://a9.com/-/spec/opensearch/1.1/&quot;</span><span class="p">);</span></div><div class='line' id='LC118'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;void&quot;</span><span class="p">,</span> <span class="s2">&quot;http://rdfs.org/ns/void#&quot;</span><span class="p">);</span></div><div class='line' id='LC119'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;sioc&quot;</span><span class="p">,</span> <span class="s2">&quot;http://rdfs.org/sioc/ns#&quot;</span><span class="p">);</span></div><div class='line' id='LC120'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;sioca&quot;</span><span class="p">,</span> <span class="s2">&quot;http://rdfs.org/sioc/actions#&quot;</span><span class="p">);</span></div><div class='line' id='LC121'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;sioct&quot;</span><span class="p">,</span> <span class="s2">&quot;http://rdfs.org/sioc/types#&quot;</span><span class="p">);</span></div><div class='line' id='LC122'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;lgd&quot;</span><span class="p">,</span> <span class="s2">&quot;http://linkedgeodata.org/vocabulary#&quot;</span><span class="p">);</span></div><div class='line' id='LC123'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;moat&quot;</span><span class="p">,</span> <span class="s2">&quot;http://moat-project.org/ns#&quot;</span><span class="p">);</span></div><div class='line' id='LC124'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;days&quot;</span><span class="p">,</span> <span class="s2">&quot;http://ontologi.es/days#&quot;</span><span class="p">);</span></div><div class='line' id='LC125'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;giving&quot;</span><span class="p">,</span> <span class="s2">&quot;http://ontologi.es/giving#&quot;</span><span class="p">);</span></div><div class='line' id='LC126'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;lang&quot;</span><span class="p">,</span> <span class="s2">&quot;http://ontologi.es/lang/core#&quot;</span><span class="p">);</span></div><div class='line' id='LC127'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;like&quot;</span><span class="p">,</span> <span class="s2">&quot;http://ontologi.es/like#&quot;</span><span class="p">);</span></div><div class='line' id='LC128'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;status&quot;</span><span class="p">,</span> <span class="s2">&quot;http://ontologi.es/status#&quot;</span><span class="p">);</span></div><div class='line' id='LC129'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;og&quot;</span><span class="p">,</span> <span class="s2">&quot;http://opengraphprotocol.org/schema/&quot;</span><span class="p">);</span></div><div class='line' id='LC130'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;protege&quot;</span><span class="p">,</span> <span class="s2">&quot;http://protege.stanford.edu/system#&quot;</span><span class="p">);</span></div><div class='line' id='LC131'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;dady&quot;</span><span class="p">,</span> <span class="s2">&quot;http://purl.org/NET/dady#&quot;</span><span class="p">);</span></div><div class='line' id='LC132'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;uri&quot;</span><span class="p">,</span> <span class="s2">&quot;http://purl.org/NET/uri#&quot;</span><span class="p">);</span></div><div class='line' id='LC133'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;audio&quot;</span><span class="p">,</span> <span class="s2">&quot;http://purl.org/media/audio#&quot;</span><span class="p">);</span></div><div class='line' id='LC134'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;video&quot;</span><span class="p">,</span> <span class="s2">&quot;http://purl.org/media/video#&quot;</span><span class="p">);</span></div><div class='line' id='LC135'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;gridworks&quot;</span><span class="p">,</span> <span class="s2">&quot;http://purl.org/net/opmv/types/gridworks#&quot;</span><span class="p">);</span></div><div class='line' id='LC136'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;hcterms&quot;</span><span class="p">,</span> <span class="s2">&quot;http://purl.org/uF/hCard/terms/&quot;</span><span class="p">);</span></div><div class='line' id='LC137'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;bio&quot;</span><span class="p">,</span> <span class="s2">&quot;http://purl.org/vocab/bio/0.1/&quot;</span><span class="p">);</span></div><div class='line' id='LC138'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;cs&quot;</span><span class="p">,</span> <span class="s2">&quot;http://purl.org/vocab/changeset/schema#&quot;</span><span class="p">);</span></div><div class='line' id='LC139'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;geographis&quot;</span><span class="p">,</span> <span class="s2">&quot;http://telegraphis.net/ontology/geography/geography#&quot;</span><span class="p">);</span></div><div class='line' id='LC140'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;doap&quot;</span><span class="p">,</span> <span class="s2">&quot;http://usefulinc.com/ns/doap#&quot;</span><span class="p">);</span></div><div class='line' id='LC141'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;daml&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.daml.org/2001/03/daml+oil#&quot;</span><span class="p">);</span></div><div class='line' id='LC142'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;geonames&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.geonames.org/ontology#&quot;</span><span class="p">);</span></div><div class='line' id='LC143'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;sesame&quot;</span><span class="p">,</span> <span class="s2">&quot;http://www.openrdf.org/schema/sesame#&quot;</span><span class="p">);</span></div><div class='line' id='LC144'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;cv&quot;</span><span class="p">,</span> <span class="s2">&quot;http://rdfs.org/resume-rdf/&quot;</span><span class="p">);</span></div><div class='line' id='LC145'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;wot&quot;</span><span class="p">,</span> <span class="s2">&quot;http://xmlns.com/wot/0.1/&quot;</span><span class="p">);</span></div><div class='line' id='LC146'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;media&quot;</span><span class="p">,</span> <span class="s2">&quot;http://purl.org/microformat/hmedia/&quot;</span><span class="p">);</span></div><div class='line' id='LC147'>	<span class="nx">context</span><span class="p">.</span><span class="nx">setPrefix</span><span class="p">(</span><span class="s2">&quot;ctag&quot;</span><span class="p">,</span> <span class="s2">&quot;http://commontag.org/ns#&quot;</span><span class="p">);</span></div><div class='line' id='LC148'><span class="p">};</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.10567s from fe16.rs.github.com">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/Acubed/node-rdf/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

    
  </body>
</html>

