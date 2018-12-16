module Main exposing (main)

import App
import Browser
import Html exposing (Html, div, h1, img, text)
import Html.Attributes exposing (src)
import LlenarSemana
import Types.AppTypes



---- PROGRAM ----


main : Program () Types.AppTypes.Model App.Msg
main =
    Browser.element
        { view = App.view
        , init = \_ -> App.init
        , update = App.update
        , subscriptions = App.subscriptions
        }
