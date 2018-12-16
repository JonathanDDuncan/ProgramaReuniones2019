module Types.Cancion exposing (Cancion, CancionPublicador, decodeCancion, decodeCanciones, encodeCancion, encodeCanciones)

-- elm-package install -- yes noredink/elm-decode-pipeline

import Json.Decode
import Json.Decode.Pipeline
import Json.Encode


type alias Cancion =
    { num : Int
    , tema : String
    , versiculo : String
    , asignado : String
    , idasignado : String
    }
 
type alias CancionPublicador =
    { id : String
    , tema : String
    , versiculo : String
    , nombre : String
       }

decodeCancion : Json.Decode.Decoder Cancion
decodeCancion =
    Json.Decode.succeed Cancion
        |> Json.Decode.Pipeline.required "num" Json.Decode.int
        |> Json.Decode.Pipeline.required "tema" Json.Decode.string
        |> Json.Decode.Pipeline.required "versiculo" Json.Decode.string
        |> Json.Decode.Pipeline.required "asignado" Json.Decode.string
        |> Json.Decode.Pipeline.required "idasignado" Json.Decode.string


decodeCanciones : Json.Decode.Decoder (List Cancion)
decodeCanciones =
    Json.Decode.list decodeCancion


encodeCancion : Cancion -> Json.Encode.Value
encodeCancion record =
    Json.Encode.object
        [ ( "num", Json.Encode.int <| record.num )
        , ( "tema", Json.Encode.string <| record.tema )
        , ( "versiculo", Json.Encode.string <| record.versiculo )
        , ( "asignado", Json.Encode.string <| record.asignado )
        , ( "idasignado", Json.Encode.string <| record.idasignado )
        ]


encodeCanciones : List Cancion -> Json.Encode.Value
encodeCanciones records =
    Json.Encode.list encodeCancion records
