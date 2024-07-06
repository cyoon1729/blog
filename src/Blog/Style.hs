{-# LANGUAGE ExtendedDefaultRules #-}
{-# LANGUAGE FlexibleContexts #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE QuasiQuotes #-}

module Blog.Style (style) where

import Lucid
import Text.RawString.QQ

style :: Html ()
style =
    style_ $
        [r|
  * {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    body {
      font-size: 1.5rem;
      font-family: 'Roboto Mono', serif;
    }

    @media screen and (min-width: 800px) {
      body {
        background-color: #e2e2e2;
      }

       .post {
           background-color: white;
           padding: 16px;
           box-shadow: 0 0 6px rgba(0,0,0,.2);
       }
    }

    code {
      font-family: monospace;
    }

    blockquote {
      margin-left: 0px;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 600;
    }

    h2 {
      font-size: 1.5em;
    }

    h3 {
      font-size: 1.3em;
    }

    h4 {
      font-size: 1.1em;
    }

    h5 {
      font-size: 1.2em;
      text-align: center;
    }

    main {
      margin-top: 2rem;
    }

    .navbar {
      margin: 0 auto;
    }

    .tag-container {
      display: flex;
      justify-content: start;
      margin-bottom: 3rem;
      flex-wrap: wrap;
    }

    .tag {
      border: 1px solid #333333;
      border-radius: 24px;
      margin-right: 8px;
      background-color: #ffffff;
      display: inline-block;
      padding: 4px 12px;
      margin-bottom: 8px;
      font-size: 0.9em;
      color: #000000;
      cursor: pointer;
    }

    .navbar-ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
    }

    .navbar-li {
      margin-right: 15px;
      margin-left: 0px;
    }
    
    ul {
      margin: 0;
      padding: 0;
      display: block;
    }

    li {
      margin-left: 15px;
      float: left;
    }

    a {
      color: #1967D2;
    }

    a:hover {
      @apply underline;
      color: #1976D2;
    }

    p {
      font-size: 1.4rem;
    }

    footer {
      min-height: 50px;
    }
  |]
