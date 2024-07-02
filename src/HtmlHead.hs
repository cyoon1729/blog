{-# LANGUAGE ExtendedDefaultRules #-}
{-# LANGUAGE FlexibleContexts #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE QuasiQuotes #-}

module HtmlHead (htmlHead) where

import Lucid
import Lucid.Base
import Lucid.Html5
import Text.RawString.QQ

import Style (style)

meta :: Html ()
meta = do
    meta_ [charset_ "UTF-8"]
    meta_ [name_ "viewport", content_ "width=devic-width, initial-scale=1"]

fonts :: Html ()
fonts = do
    link_ [rel_ "preconnect", href_ "https://fonts.googleapis.com"]
    link_ [rel_ "preconnect", href_ "https://fonts.gstatic.com"]
    link_ [rel_ "stylesheet", href_ "https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"]

cssStuff :: Html ()
cssStuff = do
    link_ [rel_ "stylesheet", href_ "https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.css"]
    link_ [rel_ "stylesheet", href_ "https://cdn.jsdelivr.net/npm/sakura.css/css/sakura.css", type_ "text/css"]

htmlHead :: Html ()
htmlHead = head_ $ meta >> fonts >> cssStuff >> style
