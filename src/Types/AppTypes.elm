module Types.AppTypes exposing (Model)

import Types.Cancion exposing (..)
import Types.Publicador exposing (..)
import Types.Semana exposing (..)


type alias Model =
    { semanatofill : Semana
    , semanastofill : List Semana
    , semanasllenados : List Semana
    , semanasanteriores : List Semana
    , publicadores : List Publicador
    , canciones : List Cancion
    }


asd a b c =
    ( a, b, c )
