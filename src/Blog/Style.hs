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
    body {
      background-color: #f2f3f4;
    }

    .navbar {
      margin: 0 auto;
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
      padding-left: 0;
    }

    li {
      margin-left: 25px;
    }

    a {
      color: #1967D2;
    }

    p {
      font-size: 1.0rem;
    }

    img {
      display:block;
      float:none;
      margin-left:auto;
      margin-right:auto;
      width:50%;
    }
  |]
