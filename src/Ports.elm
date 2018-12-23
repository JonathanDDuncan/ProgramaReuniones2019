port module Ports exposing (clear, fillSemana, fillSemanaCallBack, fillSemanas, fillSemanasCallBack, fillSemanasTemplCallBack, loadCanciones, loadPublicadores, loadSemanasAnteriores, programasemanalbackupCallBack, programasemanalrestore)

import Types.Backup exposing (..)
import Types.Semana exposing (..)
import Types.SemanaTempl exposing (..)



-- PORTS


port fillSemana : (String -> msg) -> Sub msg


port fillSemanas : (String -> msg) -> Sub msg


port loadPublicadores : (String -> msg) -> Sub msg


port loadCanciones : (String -> msg) -> Sub msg


port loadSemanasAnteriores : (String -> msg) -> Sub msg


port fillSemanaCallBack : Semana -> Cmd msg


port fillSemanasCallBack : List Semana -> Cmd msg


port fillSemanasTemplCallBack : List SemanaTempl -> Cmd msg


port programasemanalbackupCallBack : Backup -> Cmd msg


port programasemanalrestore : (Backup -> msg) -> Sub msg


port clear : (String -> msg) -> Sub msg
