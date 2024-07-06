module Blog.Generate (generateAll) where

import qualified System.Directory as Dir

import Blog.Page (generatePageStr)

createBase :: IO ()
createBase = Dir.createDirectory "./out"

createSubDirectories :: IO [()]
createSubDirectories = do
    let subDirs = ["./out/blog", "./out/projects", "./out/resume"]
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
    createProjectsHome
