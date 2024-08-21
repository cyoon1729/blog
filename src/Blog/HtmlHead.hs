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


cssStuff :: Html ()
cssStuff = do
    link_ [rel_ "stylesheet", href_ "https://latex.vercel.app/style.css"]


htmlHead :: Html ()
htmlHead = head_ $ meta >> cssStuff >> style
