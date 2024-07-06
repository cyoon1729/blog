{-# LANGUAGE ExtendedDefaultRules #-}
{-# LANGUAGE FlexibleContexts #-}
{-# LANGUAGE OverloadedStrings #-}

module Blog.Page (generatePageMd, generatePageStr) where

import Lucid

import Blog.HtmlHead (htmlHead)
import Blog.Markdown (mdToHtml)
import Blog.Navbar (navbar)

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
