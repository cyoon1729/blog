module Main where

import MyLib (serve)

main :: IO ()
main = do
  serve
  
 -- p <- generatePageMd "static/pages/home.md"
 -- putStrLn $ show p
