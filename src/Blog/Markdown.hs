{-# LANGUAGE OverloadedStrings #-}

module Blog.Markdown (mdToHtml) where

import Lucid
import Lucid.Base
import Lucid.Html5

import CMark (commonmarkToHtml)
import Control.Monad.IO.Class (liftIO)
import Data.Text (Text, pack, unpack)
import Data.Text.IO as T

mdToHtml path = do
    md <- T.readFile path
    return $ toHtmlRaw (commonmarkToHtml [] md)
