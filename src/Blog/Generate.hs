module Blog.Generate (generateAll) where

import qualified System.Directory as Dir
import qualified Data.List as L

import Blog.Page (generatePageStr)

createBase :: IO ()
createBase = Dir.createDirectory "./out"

createSubDirectories :: IO [()]
createSubDirectories = do
    let subDirs = ["./out/blog", "./out/blog/posts", "./out/projects", "./out/resume"]
    mapM Dir.createDirectory subDirs

createHome :: IO ()
createHome = do
    page <- generatePageStr "static/pages/home.md"
    writeFile "out/index.html" page

createResumePage :: IO ()
createResumePage = do
    page <- generatePageStr "static/pages/resume.md"
    writeFile "out/resume/index.html" page

createBlogHome :: IO ()
createBlogHome = do
    page <- generatePageStr "static/pages/blog.md"
    writeFile "out/blog/index.html" page

createBlogPost :: String -> IO ()
createBlogPost file = do
    let outFile = (takeWhile ((/=) '.') file) <> ".html"
    post <- generatePageStr ("static/pages/blog-posts/" <> file)
    writeFile ("out/blog/posts/" ++ outFile) post

createBlogPosts :: IO [()]
createBlogPosts = do
    files <- Dir.getDirectoryContents "static/pages/blog-posts/"
    let posts = filter (L.isSuffixOf ".md") files
    mapM createBlogPost posts

createProjectsHome :: IO ()
createProjectsHome = do
    page <- generatePageStr "static/pages/projects.md"
    writeFile "out/projects/index.html" page

generateAll :: IO ()
generateAll = do
    createBase
    createSubDirectories
    createHome
    createResumePage
    createBlogHome
    createBlogPosts
    createProjectsHome
