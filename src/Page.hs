{-# LANGUAGE ExtendedDefaultRules #-}
{-# LANGUAGE FlexibleContexts #-}
{-# LANGUAGE OverloadedStrings #-}

module Page (generatePageMd, generatePageStr) where

import Lucid

import HtmlHead (htmlHead)
import Markdown (mdToHtml)
import Navbar (navbar)

pageTemplate :: Html () -> Html ()
pageTemplate stuff = htmlHead >> (body_ (navbar >> stuff))

generatePageMd :: String -> IO (Html ())
generatePageMd path = do
    content <- mdToHtml path
    let pg = html_ $ pageTemplate content
    return pg

generatePageStr :: String -> IO String
generatePageStr path = do
    content <- mdToHtml path
    return $ show (pageTemplate content)
