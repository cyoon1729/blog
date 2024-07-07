{-# LANGUAGE ExtendedDefaultRules #-}
{-# LANGUAGE FlexibleContexts #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE QuasiQuotes #-}

module Blog.HtmlHead (htmlHead) where

import Lucid

import Blog.Style (style)

meta :: Html ()
meta = do
    meta_ [charset_ "UTF-8"]
    meta_ [name_ "viewport", content_ "width=devic-width, initial-scale=1"]

fonts :: Html ()
fonts = do
    link_ [rel_ "preconnect", href_ "https://fonts.googleapis.com"]
    link_ [rel_ "preconnect", href_ "https://fonts.gstatic.com"]
    link_ [rel_ "stylesheet", href_ "https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"]

scripts :: Html ()
scripts = do
    script_ [id_ "MathJax-script", async_, src_ "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"] ""

cssStuff :: Html ()
cssStuff = do
    link_ [rel_ "stylesheet", href_ "https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.css"]
    link_ [rel_ "stylesheet", href_ "https://cdn.jsdelivr.net/npm/sakura.css/css/sakura.css", type_ "text/css"]

htmlHead :: Html ()
htmlHead = head_ $ meta >> fonts >> scripts >> cssStuff >> style
