{-# LANGUAGE ExtendedDefaultRules #-}
{-# LANGUAGE FlexibleContexts #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE QuasiQuotes #-}

module MyLib (serve) where

import Control.Monad.IO.Class (liftIO)
import Data.Text (unpack)
import Lucid
import Lucid.Base
import Lucid.Html5
import Text.RawString.QQ

import HtmlHead (htmlHead)
import Markdown (mdToHtml)
import Navbar (navbar)
import Server (serve)
