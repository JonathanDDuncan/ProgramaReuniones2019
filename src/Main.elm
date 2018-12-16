module Main exposing (Model, Msg(..), init, main, update, view)

import App
import Browser
import Html exposing (Html, div, h1, img, text)
import Html.Attributes exposing (src)
import LlenarSemana
import Types.AppTypes



---- MODEL ----


type alias Model =
    {}


init : ( Model, Cmd Msg )
init =
    ( {}, Cmd.none )



---- UPDATE ----


type Msg
    = NoOp


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    ( model, Cmd.none )



---- VIEW ----


view : Model -> Html Msg
view model =
    div []
        [ img [ src "/logo.svg" ] []
        , h1 [] [ text "Your Elm App is working!!!!11" ]
        ]



---- PROGRAM ----


main : Program () Types.AppTypes.Model App.Msg
main =
    Browser.element
        { view = App.view
        , init = \_ -> App.init
        , update = App.update
        , subscriptions = App.subscriptions
        }
