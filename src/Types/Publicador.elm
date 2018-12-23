module Types.Publicador exposing (Publicador, decodePublicador, decodePublicadores, encodePublicador, encodePublicadores)

import Json.Decode exposing (field)
import Json.Decode.Pipeline exposing (..)
import Json.Encode


type alias Publicador =
    { id : String
    , creado : Int
    , modificado : Int
    , name : String
    , varon : Bool
    , anciano : Bool
    , esvideo : Bool
    , presidentesabado : Bool
    , tb1orador : Bool
    , perlas : Bool
    , lecturabiblia : Bool
    , oracion : Bool
    , ayudante : Bool
    , principiante : Bool
    , smm1publicador : Bool
    , smm2publicador : Bool
    , smm3publicador : Bool
    , smm4publicador : Bool
    , smmdiscurso : Bool
    , nvc : Bool
    , estudiocongregacion : Bool
    , lectorestudiocongregacion : Bool
    , camara : Bool
    , aparatos : Bool
    , cronometro : Bool
    , presidentedomingo : Bool
    , fechanodisponibleinicio : Maybe Int
    , fechanodisponiblefin : Maybe Int
    , familiaressexoopuesto : List String
    }


decodePublicadores : Json.Decode.Decoder (List Publicador)
decodePublicadores =
    Json.Decode.list decodePublicador


decodePublicador : Json.Decode.Decoder Publicador
decodePublicador =
    Json.Decode.succeed Publicador
        |> Json.Decode.Pipeline.required "id" Json.Decode.string
        |> Json.Decode.Pipeline.required "creado" Json.Decode.int
        |> Json.Decode.Pipeline.required "modificado" Json.Decode.int
        |> Json.Decode.Pipeline.required "name" Json.Decode.string
        |> Json.Decode.Pipeline.required "varon" Json.Decode.bool
        |> Json.Decode.Pipeline.required "anciano" Json.Decode.bool
        |> Json.Decode.Pipeline.required "esvideo" Json.Decode.bool
        |> Json.Decode.Pipeline.required "presidentesabado" Json.Decode.bool
        |> Json.Decode.Pipeline.required "tb1orador" Json.Decode.bool
        |> Json.Decode.Pipeline.required "perlas" Json.Decode.bool
        |> Json.Decode.Pipeline.required "lecturabiblia" Json.Decode.bool
        |> Json.Decode.Pipeline.required "oracion" Json.Decode.bool
        |> Json.Decode.Pipeline.required "ayudante" Json.Decode.bool
        |> Json.Decode.Pipeline.required "principiante" Json.Decode.bool
        |> Json.Decode.Pipeline.required "smm1publicador" Json.Decode.bool
        |> Json.Decode.Pipeline.required "smm2publicador" Json.Decode.bool
        |> Json.Decode.Pipeline.required "smm3publicador" Json.Decode.bool
        |> Json.Decode.Pipeline.required "smm4publicador" Json.Decode.bool
        |> Json.Decode.Pipeline.required "smmdiscurso" Json.Decode.bool
        |> Json.Decode.Pipeline.required "nvc" Json.Decode.bool
        |> Json.Decode.Pipeline.required "estudiocongregacion" Json.Decode.bool
        |> Json.Decode.Pipeline.required "lectorestudiocongregacion" Json.Decode.bool
        |> Json.Decode.Pipeline.required "camara" Json.Decode.bool
        |> Json.Decode.Pipeline.required "aparatos" Json.Decode.bool
        |> Json.Decode.Pipeline.required "cronometro" Json.Decode.bool
        |> Json.Decode.Pipeline.required "presidentedomingo" Json.Decode.bool
        |> Json.Decode.Pipeline.required "fechanodisponibleinicio" (Json.Decode.maybe Json.Decode.int)
        |> Json.Decode.Pipeline.required "fechanodisponiblefin" (Json.Decode.maybe Json.Decode.int)
        |> Json.Decode.Pipeline.required "familiaressexoopuesto" (Json.Decode.list Json.Decode.string)


encodePublicadores : List Publicador -> Json.Encode.Value
encodePublicadores records =
    Json.Encode.list encodePublicador records


encodePublicador : Publicador -> Json.Encode.Value
encodePublicador record =
    let
        fechanodisponibleinicioval =
            case record.fechanodisponibleinicio of
                Just j ->
                    j |> Json.Encode.int

                Nothing ->
                    Json.Encode.null

        fechanodisponiblefinval =
            case record.fechanodisponiblefin of
                Just j ->
                    j |> Json.Encode.int

                Nothing ->
                    Json.Encode.null

        familiaressexoopuesto =
            "[\""
                ++ String.join ", \"" record.familiaressexoopuesto
                ++ "]"
                |> Json.Encode.string
    in
    Json.Encode.object
        [ ( "id", Json.Encode.string <| record.id )
        , ( "creado", Json.Encode.int <| record.creado )
        , ( "modificado", Json.Encode.int <| record.modificado )
        , ( "name", Json.Encode.string <| record.name )
        , ( "varon", Json.Encode.bool <| record.varon )
        , ( "anciano", Json.Encode.bool <| record.anciano )
        , ( "esvideo", Json.Encode.bool <| record.esvideo )
        , ( "presidentesabado", Json.Encode.bool <| record.presidentesabado )
        , ( "tb1orador", Json.Encode.bool <| record.tb1orador )
        , ( "perlas", Json.Encode.bool <| record.perlas )
        , ( "lecturabiblia", Json.Encode.bool <| record.lecturabiblia )
        , ( "oracion", Json.Encode.bool <| record.oracion )
        , ( "ayudante", Json.Encode.bool <| record.ayudante )
        , ( "principiante", Json.Encode.bool <| record.principiante )
        , ( "smm1publicador", Json.Encode.bool <| record.smm1publicador )
        , ( "smm2publicador", Json.Encode.bool <| record.smm2publicador )
        , ( "smm3publicador", Json.Encode.bool <| record.smm3publicador )
        , ( "smm4publicador", Json.Encode.bool <| record.smm4publicador )
        , ( "smmdiscurso", Json.Encode.bool <| record.smmdiscurso )
        , ( "nvc", Json.Encode.bool <| record.nvc )
        , ( "estudiocongregacion", Json.Encode.bool <| record.estudiocongregacion )
        , ( "lectorestudiocongregacion", Json.Encode.bool <| record.lectorestudiocongregacion )
        , ( "camara", Json.Encode.bool <| record.camara )
        , ( "aparatos", Json.Encode.bool <| record.aparatos )
        , ( "cronometro", Json.Encode.bool <| record.cronometro )
        , ( "presidentedomingo", Json.Encode.bool <| record.presidentedomingo )
        , ( "fechanodisponibleinicio", fechanodisponibleinicioval )
        , ( "fechanodisponiblefin", fechanodisponiblefinval )
        , ( "familiaressexoopuesto", familiaressexoopuesto )
        ]
