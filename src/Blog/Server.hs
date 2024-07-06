{-# LANGUAGE OverloadedStrings #-}

module Blog.Server (serve) where

import Control.Monad.IO.Class (liftIO)
import Data.Text.Lazy (pack)
import qualified Web.Scotty

import Blog.Page (generatePageMd)

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

resumePdfAction :: Web.Scotty.ActionM ()
resumePdfAction = do
    Web.Scotty.file "static/files/chris_yoon.pdf"

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
            projectAction
        Web.Scotty.get "/resume" $ do
            resumeAction
        Web.Scotty.get "/resume/chris_yoon.pdf" $ do
            resumePdfAction
