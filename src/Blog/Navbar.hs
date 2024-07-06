{-# LANGUAGE ExtendedDefaultRules #-}
{-# LANGUAGE FlexibleContexts #-}
{-# LANGUAGE OverloadedStrings #-}

module Blog.Navbar (navbar) where

import Lucid
import Lucid.Base
import Lucid.Html5

home :: Html ()
home = a_ [class_ "sakura-fade no-border", href_ "/"] "home"

blog :: Html ()
blog = a_ [class_ "sakura-fade no-border", href_ "/blog"] "blog"

projects :: Html ()
projects = a_ [class_ "sakura-fade no-border", href_ "/projects"] "projects"

resume :: Html ()
resume = a_ [class_ "sakura-fade no-border", href_ "/resume"] "resume"

navbar :: Html ()
navbar = div_ [class_ "navbar"] $ (ul_ [class_ "navbar-ul"]) (mapM_ (li_ [class_ "navbar-li"]) [home, blog, projects, resume])
