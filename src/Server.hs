{-# LANGUAGE OverloadedStrings #-}

module Server (serve) where

import Control.Monad.IO.Class (liftIO)
import Data.Text.Lazy (pack)
import Lucid
import Lucid.Base
import Lucid.Html5
import qualified Web.Scotty

import Page (generatePageMd)

homeAction :: Web.Scotty.ActionM ()
homeAction = do
    home <- liftIO $ generatePageMd "static/pages/home.md"
    Web.Scotty.html $ (pack . show) home

blogAction :: Web.Scotty.ActionM ()
blogAction = do
    home <- liftIO $ generatePageMd "static/pages/blog.md"
    Web.Scotty.html $ (pack . show) home

resumeAction :: Web.Scotty.ActionM ()
resumeAction = do
    home <- liftIO $ generatePageMd "static/pages/resume.md"
    Web.Scotty.html $ (pack . show) home

projectAction :: Web.Scotty.ActionM ()
projectAction = do
    home <- liftIO $ generatePageMd "static/pages/projects.md"
    Web.Scotty.html $ (pack . show) home

serve :: IO ()
serve =
    Web.Scotty.scotty 3000 $ do
        Web.Scotty.get "/" $ do
            homeAction
        Web.Scotty.get "/blog" $ do
            blogAction
        Web.Scotty.get "/projects" $ do
            blogAction
        Web.Scotty.get "/resume" $ do
            resumeAction
