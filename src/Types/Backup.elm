module Types.Backup exposing (Backup, decodeBackup, encodeBackup)

import Json.Decode exposing (field)
import Json.Decode.Pipeline
import Json.Encode
import Types.Cancion exposing (..)
import Types.Publicador exposing (..)
import Types.Semana exposing (..)
import Types.SemanaTempl exposing (..)
 

type alias Backup =
    { publicadores : List Publicador
    , canciones : List Cancion
    , ultimaActualizacion : Int
    , semanasllenados : List Semana
    , semanasanteriores : List Semana
    , semanastemplates : List SemanaTempl
    }


decodeBackup : Json.Decode.Decoder Backup
decodeBackup =
    Json.Decode.succeed Backup
        |> Json.Decode.Pipeline.required "publicadores" decodePublicadores
        |> Json.Decode.Pipeline.required "canciones" decodeCanciones
        |> Json.Decode.Pipeline.required "ultimaActualizacion" Json.Decode.int
        |> Json.Decode.Pipeline.required "semanasllenados" decodeSemanas
        |> Json.Decode.Pipeline.required "semanasanteriores" decodeSemanas
        |> Json.Decode.Pipeline.required "semanastemplates" decodeSemanasTemplates


encodeBackup : Backup -> Json.Encode.Value
encodeBackup record =
    Json.Encode.object
        [ ( "publicadores", Types.Publicador.encodePublicadores <| record.publicadores )
        , ( "canciones", encodeCanciones <| record.canciones )
        , ( "ultimaActualizacion", Json.Encode.int <| record.ultimaActualizacion )
        , ( "semanasllenados", encodeSemanas <| record.semanasllenados )
        , ( "semanasanteriores", encodeSemanas <| record.semanasanteriores )
        , ( "semanastemplates", Types.SemanaTempl.encodeSemanasTemplates <| record.semanastemplates )
        ]
