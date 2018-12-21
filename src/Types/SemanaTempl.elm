module Types.SemanaTempl exposing (SemanaTempl, decodeSemanaTempl, decodeSemanasTemplates, encodeSemanaTempl, encodeSemanasTemplates)

-- elm-package install -- yes noredink/elm-decode-pipeline

import Json.Decode
import Json.Decode.Pipeline
import Json.Encode


type alias SemanaTempl =
    { fechasabado : String
    , sabasamblea : Bool
    , cancion1 : Int
    , cancion2 : Int
    , cancion3 : Int
    , domcancion1 : Int
    , domcancion2 : Int
    , tb1titulo : String
    , nvctitulo1 : String
    , nvcmins1 : Int
    , nvc1anciano : Bool
    , nvctitulo2 : String
    , nvcmins2 : Int
    , nvc2anciano : Bool
    , smmleccionmaestros : Bool
    , smmtema1 : String
    , smmtema2 : String
    , smmtema3 : String
    , smmtema4 : String
    , smmmin1 : Int
    , smmmin2 : Int
    , smmmin3 : Int
    , smmmin4 : Int
    , smmconsejo1 : Int
    , smmconsejo2 : Int
    , smmconsejo3 : Int
    , smmconsejo4 : Int
    , smmesvideo1 : Bool
    , smmesvideo2 : Bool
    , smmesvideo3 : Bool
    , smmesvideo4 : Bool
    , smmtieneayudante1 : Bool
    , smmtieneayudante2 : Bool
    , smmtieneayudante3 : Bool
    , smmtieneayudante4 : Bool
    , domasamblea : Bool
    , fechadomingo : String
    , domhaydiscursante : Bool
    , domdiscursante : String
    , sabasambleamensage : String
    , domasambleamensage : String
    , temacancion1 : String
    , temacancion2 : String
    , temacancion3 : String
    , domtemacancion1 : String
    , domtemacancion2 : String
    , respcancion1 : String
    , respcancion2 : String
    , respcancion3 : String
    , domrespcancion1 : String
    , domrespcancion2 : String
    , nvcorador1 : String
    , nvcorador2 : String
    , nvcestudioorador : String
    , presidente : String
    , presentacionesmes : String
    , tbperlasorador : String
    , tb1orador : String
    , tblector : String
    , consejolector : String
    , smm1esname : String
    , smm1ayuname : String
    , smm2esname : String
    , smm2ayuname : String
    , smm3esname : String
    , smm3ayuname : String
    , smm4esname : String
    , smm4ayuname : String
    , nvcestudiolector : String
    , aparatos : String
    , camara : String
    , cronometro : String
    , nvc3h1 : String
    , oracion1 : String
    , oracion2 : String
    , dompresidente : String
    , ini1h1 : String
    , ini2h1 : String
    , tb1h1 : String
    , tb2h1 : String
    , tb3h1 : String
    , smm1h1 : String
    , smm2h1 : String
    , smm3h1 : String
    , smm4h1 : String
    , nvc1h1 : String
    , nvc2h1 : String
    , nvc4h1 : String
    , nvc5h1 : String
    , nvc6h1 : String
    , nvc6h2 : String
    }


decodeSemanasTemplates : Json.Decode.Decoder (List SemanaTempl)
decodeSemanasTemplates =
    Json.Decode.list decodeSemanaTempl


decodeSemanaTempl : Json.Decode.Decoder SemanaTempl
decodeSemanaTempl =
    Json.Decode.succeed SemanaTempl
        |> Json.Decode.Pipeline.required "fechasabado" Json.Decode.string
        |> Json.Decode.Pipeline.required "sabasamblea" Json.Decode.bool
        |> Json.Decode.Pipeline.required "cancion1" Json.Decode.int
        |> Json.Decode.Pipeline.required "cancion2" Json.Decode.int
        |> Json.Decode.Pipeline.required "cancion3" Json.Decode.int
        |> Json.Decode.Pipeline.required "domcancion1" Json.Decode.int
        |> Json.Decode.Pipeline.required "domcancion2" Json.Decode.int
        |> Json.Decode.Pipeline.required "tb1titulo" Json.Decode.string
        |> Json.Decode.Pipeline.required "nvctitulo1" Json.Decode.string
        |> Json.Decode.Pipeline.required "nvcmins1" Json.Decode.int
        |> Json.Decode.Pipeline.required "nvc1anciano" Json.Decode.bool
        |> Json.Decode.Pipeline.required "nvctitulo2" Json.Decode.string
        |> Json.Decode.Pipeline.required "nvcmins2" Json.Decode.int
        |> Json.Decode.Pipeline.required "nvc2anciano" Json.Decode.bool
        |> Json.Decode.Pipeline.required "smmleccionmaestros" Json.Decode.bool
        |> Json.Decode.Pipeline.required "smmtema1" Json.Decode.string
        |> Json.Decode.Pipeline.required "smmtema2" Json.Decode.string
        |> Json.Decode.Pipeline.required "smmtema3" Json.Decode.string
        |> Json.Decode.Pipeline.required "smmtema4" Json.Decode.string
        |> Json.Decode.Pipeline.required "smmmin1" Json.Decode.int
        |> Json.Decode.Pipeline.required "smmmin2" Json.Decode.int
        |> Json.Decode.Pipeline.required "smmmin3" Json.Decode.int
        |> Json.Decode.Pipeline.required "smmmin4" Json.Decode.int
        |> Json.Decode.Pipeline.required "smmconsejo1" Json.Decode.int
        |> Json.Decode.Pipeline.required "smmconsejo2" Json.Decode.int
        |> Json.Decode.Pipeline.required "smmconsejo3" Json.Decode.int
        |> Json.Decode.Pipeline.required "smmconsejo4" Json.Decode.int
        |> Json.Decode.Pipeline.required "smmesvideo1" Json.Decode.bool
        |> Json.Decode.Pipeline.required "smmesvideo2" Json.Decode.bool
        |> Json.Decode.Pipeline.required "smmesvideo3" Json.Decode.bool
        |> Json.Decode.Pipeline.required "smmesvideo4" Json.Decode.bool
        |> Json.Decode.Pipeline.required "smmtieneayudante1" Json.Decode.bool
        |> Json.Decode.Pipeline.required "smmtieneayudante2" Json.Decode.bool
        |> Json.Decode.Pipeline.required "smmtieneayudante3" Json.Decode.bool
        |> Json.Decode.Pipeline.required "smmtieneayudante4" Json.Decode.bool
        |> Json.Decode.Pipeline.required "domasamblea" Json.Decode.bool
        |> Json.Decode.Pipeline.required "fechadomingo" Json.Decode.string
        |> Json.Decode.Pipeline.required "domhaydiscursante" Json.Decode.bool
        |> Json.Decode.Pipeline.required "domdiscursante" Json.Decode.string
        |> Json.Decode.Pipeline.required "sabasambleamensage" Json.Decode.string
        |> Json.Decode.Pipeline.required "domasambleamensage" Json.Decode.string
        |> Json.Decode.Pipeline.required "temacancion1" Json.Decode.string
        |> Json.Decode.Pipeline.required "temacancion2" Json.Decode.string
        |> Json.Decode.Pipeline.required "temacancion3" Json.Decode.string
        |> Json.Decode.Pipeline.required "domtemacancion1" Json.Decode.string
        |> Json.Decode.Pipeline.required "domtemacancion2" Json.Decode.string
        |> Json.Decode.Pipeline.required "respcancion1" Json.Decode.string
        |> Json.Decode.Pipeline.required "respcancion2" Json.Decode.string
        |> Json.Decode.Pipeline.required "respcancion3" Json.Decode.string
        |> Json.Decode.Pipeline.required "domrespcancion1" Json.Decode.string
        |> Json.Decode.Pipeline.required "domrespcancion2" Json.Decode.string
        |> Json.Decode.Pipeline.required "nvcorador1" Json.Decode.string
        |> Json.Decode.Pipeline.required "nvcorador2" Json.Decode.string
        |> Json.Decode.Pipeline.required "nvcestudioorador" Json.Decode.string
        |> Json.Decode.Pipeline.required "presidente" Json.Decode.string
        |> Json.Decode.Pipeline.required "presentacionesmes" Json.Decode.string
        |> Json.Decode.Pipeline.required "tbperlasorador" Json.Decode.string
        |> Json.Decode.Pipeline.required "tb1orador" Json.Decode.string
        |> Json.Decode.Pipeline.required "tblector" Json.Decode.string
        |> Json.Decode.Pipeline.required "consejolector" Json.Decode.string
        |> Json.Decode.Pipeline.required "smm1esname" Json.Decode.string
        |> Json.Decode.Pipeline.required "smm1ayuname" Json.Decode.string
        |> Json.Decode.Pipeline.required "smm2esname" Json.Decode.string
        |> Json.Decode.Pipeline.required "smm2ayuname" Json.Decode.string
        |> Json.Decode.Pipeline.required "smm3esname" Json.Decode.string
        |> Json.Decode.Pipeline.required "smm3ayuname" Json.Decode.string
        |> Json.Decode.Pipeline.required "smm4esname" Json.Decode.string
        |> Json.Decode.Pipeline.required "smm4ayuname" Json.Decode.string
        |> Json.Decode.Pipeline.required "nvcestudiolector" Json.Decode.string
        |> Json.Decode.Pipeline.required "aparatos" Json.Decode.string
        |> Json.Decode.Pipeline.required "camara" Json.Decode.string
        |> Json.Decode.Pipeline.required "cronometro" Json.Decode.string
        |> Json.Decode.Pipeline.required "nvc3h1" Json.Decode.string
        |> Json.Decode.Pipeline.required "oracion1" Json.Decode.string
        |> Json.Decode.Pipeline.required "oracion2" Json.Decode.string
        |> Json.Decode.Pipeline.required "dompresidente" Json.Decode.string
        |> Json.Decode.Pipeline.required "ini1h1" Json.Decode.string
        |> Json.Decode.Pipeline.required "ini2h1" Json.Decode.string
        |> Json.Decode.Pipeline.required "tb1h1" Json.Decode.string
        |> Json.Decode.Pipeline.required "tb2h1" Json.Decode.string
        |> Json.Decode.Pipeline.required "tb3h1" Json.Decode.string
        |> Json.Decode.Pipeline.required "smm1h1" Json.Decode.string
        |> Json.Decode.Pipeline.required "smm2h1" Json.Decode.string
        |> Json.Decode.Pipeline.required "smm3h1" Json.Decode.string
        |> Json.Decode.Pipeline.required "smm4h1" Json.Decode.string
        |> Json.Decode.Pipeline.required "nvc1h1" Json.Decode.string
        |> Json.Decode.Pipeline.required "nvc2h1" Json.Decode.string
        |> Json.Decode.Pipeline.required "nvc4h1" Json.Decode.string
        |> Json.Decode.Pipeline.required "nvc5h1" Json.Decode.string
        |> Json.Decode.Pipeline.required "nvc6h1" Json.Decode.string
        |> Json.Decode.Pipeline.required "nvc6h2" Json.Decode.string


encodeSemanasTemplates : List SemanaTempl -> Json.Encode.Value
encodeSemanasTemplates records =
    Json.Encode.list encodeSemanaTempl records


encodeSemanaTempl : SemanaTempl -> Json.Encode.Value
encodeSemanaTempl record =
    Json.Encode.object
        [ ( "fechasabado", Json.Encode.string <| record.fechasabado )
        , ( "sabasamblea", Json.Encode.bool <| record.sabasamblea )
        , ( "cancion1", Json.Encode.int <| record.cancion1 )
        , ( "cancion2", Json.Encode.int <| record.cancion2 )
        , ( "cancion3", Json.Encode.int <| record.cancion3 )
        , ( "domcancion1", Json.Encode.int <| record.domcancion1 )
        , ( "domcancion2", Json.Encode.int <| record.domcancion2 )
        , ( "tb1titulo", Json.Encode.string <| record.tb1titulo )
        , ( "nvctitulo1", Json.Encode.string <| record.nvctitulo1 )
        , ( "nvcmins1", Json.Encode.int <| record.nvcmins1 )
        , ( "nvc1anciano", Json.Encode.bool <| record.nvc1anciano )
        , ( "nvctitulo2", Json.Encode.string <| record.nvctitulo2 )
        , ( "nvcmins2", Json.Encode.int <| record.nvcmins2 )
        , ( "nvc2anciano", Json.Encode.bool <| record.nvc2anciano )
        , ( "smmleccionmaestros", Json.Encode.bool <| record.smmleccionmaestros )
        , ( "smmtema1", Json.Encode.string <| record.smmtema1 )
        , ( "smmtema2", Json.Encode.string <| record.smmtema2 )
        , ( "smmtema3", Json.Encode.string <| record.smmtema3 )
        , ( "smmtema4", Json.Encode.string <| record.smmtema4 )
        , ( "smmmin1", Json.Encode.int <| record.smmmin1 )
        , ( "smmmin2", Json.Encode.int <| record.smmmin2 )
        , ( "smmmin3", Json.Encode.int <| record.smmmin3 )
        , ( "smmmin4", Json.Encode.int <| record.smmmin4 )
        , ( "smmconsejo1", Json.Encode.int <| record.smmconsejo1 )
        , ( "smmconsejo2", Json.Encode.int <| record.smmconsejo2 )
        , ( "smmconsejo3", Json.Encode.int <| record.smmconsejo3 )
        , ( "smmconsejo4", Json.Encode.int <| record.smmconsejo4 )
        , ( "smmesvideo1", Json.Encode.bool <| record.smmesvideo1 )
        , ( "smmesvideo2", Json.Encode.bool <| record.smmesvideo2 )
        , ( "smmesvideo3", Json.Encode.bool <| record.smmesvideo3 )
        , ( "smmesvideo4", Json.Encode.bool <| record.smmesvideo4 )
        , ( "smmtieneayudante1", Json.Encode.bool <| record.smmtieneayudante1 )
        , ( "smmtieneayudante2", Json.Encode.bool <| record.smmtieneayudante2 )
        , ( "smmtieneayudante3", Json.Encode.bool <| record.smmtieneayudante3 )
        , ( "smmtieneayudante4", Json.Encode.bool <| record.smmtieneayudante4 )
        , ( "domasamblea", Json.Encode.bool <| record.domasamblea )
        , ( "fechadomingo", Json.Encode.string <| record.fechadomingo )
        , ( "domhaydiscursante", Json.Encode.bool <| record.domhaydiscursante )
        , ( "domdiscursante", Json.Encode.string <| record.domdiscursante )
        , ( "sabasambleamensage", Json.Encode.string <| record.sabasambleamensage )
        , ( "domasambleamensage", Json.Encode.string <| record.domasambleamensage )
        , ( "temacancion1", Json.Encode.string <| record.temacancion1 )
        , ( "temacancion2", Json.Encode.string <| record.temacancion2 )
        , ( "temacancion3", Json.Encode.string <| record.temacancion3 )
        , ( "domtemacancion1", Json.Encode.string <| record.domtemacancion1 )
        , ( "domtemacancion2", Json.Encode.string <| record.domtemacancion2 )
        , ( "respcancion1", Json.Encode.string <| record.respcancion1 )
        , ( "respcancion2", Json.Encode.string <| record.respcancion2 )
        , ( "respcancion3", Json.Encode.string <| record.respcancion3 )
        , ( "domrespcancion1", Json.Encode.string <| record.domrespcancion1 )
        , ( "domrespcancion2", Json.Encode.string <| record.domrespcancion2 )
        , ( "nvcorador1", Json.Encode.string <| record.nvcorador1 )
        , ( "nvcorador2", Json.Encode.string <| record.nvcorador2 )
        , ( "nvcestudioorador", Json.Encode.string <| record.nvcestudioorador )
        , ( "presidente", Json.Encode.string <| record.presidente )
        , ( "presentacionesmes", Json.Encode.string <| record.presentacionesmes )
        , ( "tbperlasorador", Json.Encode.string <| record.tbperlasorador )
        , ( "tb1orador", Json.Encode.string <| record.tb1orador )
        , ( "tblector", Json.Encode.string <| record.tblector )
        , ( "consejolector", Json.Encode.string <| record.consejolector )
        , ( "smm1esname", Json.Encode.string <| record.smm1esname )
        , ( "smm1ayuname", Json.Encode.string <| record.smm1ayuname )
        , ( "smm2esname", Json.Encode.string <| record.smm2esname )
        , ( "smm2ayuname", Json.Encode.string <| record.smm2ayuname )
        , ( "smm3esname", Json.Encode.string <| record.smm3esname )
        , ( "smm3ayuname", Json.Encode.string <| record.smm3ayuname )
        , ( "smm4esname", Json.Encode.string <| record.smm4esname )
        , ( "smm4ayuname", Json.Encode.string <| record.smm4ayuname )
        , ( "nvcestudiolector", Json.Encode.string <| record.nvcestudiolector )
        , ( "aparatos", Json.Encode.string <| record.aparatos )
        , ( "camara", Json.Encode.string <| record.camara )
        , ( "cronometro", Json.Encode.string <| record.cronometro )
        , ( "nvc3h1", Json.Encode.string <| record.nvc3h1 )
        , ( "oracion1", Json.Encode.string <| record.oracion1 )
        , ( "oracion2", Json.Encode.string <| record.oracion2 )
        , ( "dompresidente", Json.Encode.string <| record.dompresidente )
        , ( "ini1h1", Json.Encode.string <| record.ini1h1 )
        , ( "ini2h1", Json.Encode.string <| record.ini2h1 )
        , ( "tb1h1", Json.Encode.string <| record.tb1h1 )
        , ( "tb2h1", Json.Encode.string <| record.tb2h1 )
        , ( "tb3h1", Json.Encode.string <| record.tb3h1 )
        , ( "smm1h1", Json.Encode.string <| record.smm1h1 )
        , ( "smm2h1", Json.Encode.string <| record.smm2h1 )
        , ( "smm3h1", Json.Encode.string <| record.smm3h1 )
        , ( "smm4h1", Json.Encode.string <| record.smm4h1 )
        , ( "nvc1h1", Json.Encode.string <| record.nvc1h1 )
        , ( "nvc2h1", Json.Encode.string <| record.nvc2h1 )
        , ( "nvc4h1", Json.Encode.string <| record.nvc4h1 )
        , ( "nvc5h1", Json.Encode.string <| record.nvc5h1 )
        , ( "nvc6h1", Json.Encode.string <| record.nvc6h1 )
        , ( "nvc6h2", Json.Encode.string <| record.nvc6h2 )
        ]
