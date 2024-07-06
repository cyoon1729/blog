module Main where

import System.Environment (getArgs)
import MyLib (serve, generateAll)

main :: IO ()
main = do
  args <- getArgs
  case args of 
    ["dev"] -> serve
    ["generate"] -> generateAll
    _ -> error "unknown option"
