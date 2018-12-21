module Types.Semana exposing (Semana, decodeSemana, decodeSemanas, encodeSemana, encodeSemanas, init)

import Json.Decode exposing (field, list)
import Json.Decode.Pipeline exposing (..)
import Json.Encode exposing (list)


type alias Semana =
    { id : String
    , creado : Int
    , modificado : Int
    , starthour : Int
    , startminute : Int
    , sabasamblea : Bool
    , sabasambleamensage : String
    , fechasabado : Int
    , presidenteid : String
    , presidentename : String
    , cancion1 : Int
    , cancion1id : String
    , cancion1name : String
    , cancion1tema : String
    , cancion1versiculo : String
    , oracion1id : String
    , oracion1name : String
    , tb1titulo : String
    , tb1oradorid : String
    , tb1oradorname : String
    , tbperlasoradorid : String
    , tbperlasoradorname : String
    , consejolector : Int
    , tblectorid : String
    , tblectorname : String
    , lecturaversiculos : String
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
    , smm1esid : String
    , smm1esname : String
    , smm1ayuid : String
    , smm1ayuname : String
    , smm2esid : String
    , smm2esname : String
    , smm2ayuid : String
    , smm2ayuname : String
    , smm3esid : String
    , smm3esname : String
    , smm3ayuid : String
    , smm3ayuname : String
    , smm4esid : String
    , smm4esname : String
    , smm4ayuid : String
    , smm4ayuname : String
    , presentacionesmesid : String
    , presentacionesmesname : String
    , cancion2 : Int
    , cancion2id : String
    , cancion2name : String
    , cancion2tema : String
    , cancion2versiculo : String
    , nvctitulo1 : String
    , nvcmins1 : Int
    , nvcorador1id : String
    , nvcorador1name : String
    , nvcanciano1 : Bool
    , nvctitulo2 : String
    , nvcmins2 : Int
    , nvcorador2id : String
    , nvcorador2name : String
    , nvcanciano2 : Bool
    , nvcestudiooradorid : String
    , nvcestudiooradorname : String
    , nvcestudiolectorid : String
    , nvcestudiolectorname : String
    , cancion3 : Int
    , cancion3id : String
    , cancion3name : String
    , cancion3tema : String
    , cancion3versiculo : String
    , oracion2id : String
    , oracion2name : String
    , camaraid : String
    , camaraname : String
    , aparatosid : String
    , aparatosname : String
    , cronometroid : String
    , cronometroname : String
    , domasamblea : Bool
    , domasambleamensage : String
    , fechadomingo : Int
    , dompresidenteid : String
    , dompresidentename : String
    , domdiscursante : String
    , domhaydiscursante : Bool
    , domcancion1 : Int
    , domcancion1id : String
    , domcancion1name : String
    , domcancion1tema : String
    , domcancion1versiculo : String
    , domcancion2 : Int
    , domcancion2id : String
    , domcancion2name : String
    , domcancion2tema : String
    , domcancion2versiculo : String
    , elcversiculos : String
    , elcnarradorid : String
    , elcnarradorname : String
    , elcpersonajesynombres : String
    , elcelcpersonajes : List String
    , elcelcpersonajeslectids : List String
    }


init =
    { id = ""
    , creado = 0
    , modificado = 0
    , starthour = 15
    , startminute = 0
    , sabasamblea = False
    , sabasambleamensage = ""
    , fechasabado = 0
    , presidenteid = ""
    , presidentename = ""
    , cancion1 = 0
    , cancion1id = ""
    , cancion1name = ""
    , cancion1tema = ""
    , cancion1versiculo = ""
    , oracion1id = ""
    , oracion1name = ""
    , tb1titulo = ""
    , tb1oradorid = ""
    , tb1oradorname = ""
    , tbperlasoradorid = ""
    , tbperlasoradorname = ""
    , consejolector = 0
    , tblectorid = ""
    , tblectorname = ""
    , lecturaversiculos = ""
    , smmleccionmaestros = False
    , smmtema1 = ""
    , smmtema2 = ""
    , smmtema3 = ""
    , smmtema4 = ""
    , smmmin1 = 0
    , smmmin2 = 0
    , smmmin3 = 0
    , smmmin4 = 0
    , smmconsejo1 = 0
    , smmconsejo2 = 0
    , smmconsejo3 = 0
    , smmconsejo4 = 0
    , smmesvideo1 = False
    , smmesvideo2 = False
    , smmesvideo3 = False
    , smmesvideo4 = False
    , smmtieneayudante1 = False
    , smmtieneayudante2 = False
    , smmtieneayudante3 = False
    , smmtieneayudante4 = False
    , smm1esid = ""
    , smm1esname = ""
    , smm1ayuid = ""
    , smm1ayuname = ""
    , smm2esid = ""
    , smm2esname = ""
    , smm2ayuid = ""
    , smm2ayuname = ""
    , smm3esid = ""
    , smm3esname = ""
    , smm3ayuid = ""
    , smm3ayuname = ""
    , smm4esid = ""
    , smm4esname = ""
    , smm4ayuid = ""
    , smm4ayuname = ""
    , presentacionesmesid = ""
    , presentacionesmesname = ""
    , cancion2 = 0
    , cancion2id = ""
    , cancion2name = ""
    , cancion2tema = ""
    , cancion2versiculo = ""
    , nvctitulo1 = ""
    , nvcmins1 = 0
    , nvcorador1id = ""
    , nvcorador1name = ""
    , nvcanciano1 = False
    , nvctitulo2 = ""
    , nvcmins2 = 0
    , nvcorador2id = ""
    , nvcorador2name = ""
    , nvcanciano2 = False
    , nvcestudiooradorid = ""
    , nvcestudiooradorname = ""
    , nvcestudiolectorid = ""
    , nvcestudiolectorname = ""
    , cancion3 = 0
    , cancion3id = ""
    , cancion3name = ""
    , cancion3tema = ""
    , cancion3versiculo = ""
    , oracion2id = ""
    , oracion2name = ""
    , camaraid = ""
    , camaraname = ""
    , aparatosid = ""
    , aparatosname = ""
    , cronometroid = ""
    , cronometroname = ""
    , domasamblea = False
    , domasambleamensage = "Hay asamblea"
    , fechadomingo = 0
    , dompresidenteid = ""
    , dompresidentename = ""
    , domdiscursante = ""
    , domhaydiscursante = False
    , domcancion1 = 0
    , domcancion1id = ""
    , domcancion1name = ""
    , domcancion1tema = ""
    , domcancion1versiculo = ""
    , domcancion2 = 0
    , domcancion2id = ""
    , domcancion2name = ""
    , domcancion2tema = ""
    , domcancion2versiculo = ""
    , elcversiculos = ""
    , elcnarradorid = ""
    , elcnarradorname = ""
    , elcpersonajesynombres = ""
    , elcelcpersonajes = []
    , elcelcpersonajeslectids = []
    }


decodeSemanas : Json.Decode.Decoder (List Semana)
decodeSemanas =
    Json.Decode.list decodeSemana


decodeSemana : Json.Decode.Decoder Semana
decodeSemana =
    Json.Decode.succeed Semana
        |> Json.Decode.Pipeline.required "id" Json.Decode.string
        |> Json.Decode.Pipeline.required "creado" Json.Decode.int
        |> Json.Decode.Pipeline.required "modificado" Json.Decode.int
        |> Json.Decode.Pipeline.required "starthour" Json.Decode.int
        |> Json.Decode.Pipeline.required "startminute" Json.Decode.int
        |> Json.Decode.Pipeline.required "sabasamblea" Json.Decode.bool
        |> Json.Decode.Pipeline.required "sabasambleamensage" Json.Decode.string
        |> Json.Decode.Pipeline.required "fechasabado" Json.Decode.int
        |> Json.Decode.Pipeline.required "presidenteid" Json.Decode.string
        |> Json.Decode.Pipeline.required "presidentename" Json.Decode.string
        |> Json.Decode.Pipeline.required "cancion1" Json.Decode.int
        |> Json.Decode.Pipeline.required "cancion1id" Json.Decode.string
        |> Json.Decode.Pipeline.required "cancion1name" Json.Decode.string
        |> Json.Decode.Pipeline.required "cancion1tema" Json.Decode.string
        |> Json.Decode.Pipeline.required "cancion1versiculo" Json.Decode.string
        |> Json.Decode.Pipeline.required "oracion1id" Json.Decode.string
        |> Json.Decode.Pipeline.required "oracion1name" Json.Decode.string
        |> Json.Decode.Pipeline.required "tb1titulo" Json.Decode.string
        |> Json.Decode.Pipeline.required "tb1oradorid" Json.Decode.string
        |> Json.Decode.Pipeline.required "tb1oradorname" Json.Decode.string
        |> Json.Decode.Pipeline.required "tbperlasoradorid" Json.Decode.string
        |> Json.Decode.Pipeline.required "tbperlasoradorname" Json.Decode.string
        |> Json.Decode.Pipeline.required "consejolector" Json.Decode.int
        |> Json.Decode.Pipeline.required "tblectorid" Json.Decode.string
        |> Json.Decode.Pipeline.required "tblectorname" Json.Decode.string
        |> Json.Decode.Pipeline.required "lecturaversiculos" Json.Decode.string
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
        |> Json.Decode.Pipeline.required "smm1esid" Json.Decode.string
        |> Json.Decode.Pipeline.required "smm1esname" Json.Decode.string
        |> Json.Decode.Pipeline.required "smm1ayuid" Json.Decode.string
        |> Json.Decode.Pipeline.required "smm1ayuname" Json.Decode.string
        |> Json.Decode.Pipeline.required "smm2esid" Json.Decode.string
        |> Json.Decode.Pipeline.required "smm2esname" Json.Decode.string
        |> Json.Decode.Pipeline.required "smm2ayuid" Json.Decode.string
        |> Json.Decode.Pipeline.required "smm2ayuname" Json.Decode.string
        |> Json.Decode.Pipeline.required "smm3esid" Json.Decode.string
        |> Json.Decode.Pipeline.required "smm3esname" Json.Decode.string
        |> Json.Decode.Pipeline.required "smm3ayuid" Json.Decode.string
        |> Json.Decode.Pipeline.required "smm3ayuname" Json.Decode.string
        |> Json.Decode.Pipeline.required "smm4esid" Json.Decode.string
        |> Json.Decode.Pipeline.required "smm4esname" Json.Decode.string
        |> Json.Decode.Pipeline.required "smm4ayuid" Json.Decode.string
        |> Json.Decode.Pipeline.required "smm4ayuname" Json.Decode.string
        |> Json.Decode.Pipeline.required "presentacionesmesid" Json.Decode.string
        |> Json.Decode.Pipeline.required "presentacionesmesname" Json.Decode.string
        |> Json.Decode.Pipeline.required "cancion2" Json.Decode.int
        |> Json.Decode.Pipeline.required "cancion2id" Json.Decode.string
        |> Json.Decode.Pipeline.required "cancion2name" Json.Decode.string
        |> Json.Decode.Pipeline.required "cancion2tema" Json.Decode.string
        |> Json.Decode.Pipeline.required "cancion2versiculo" Json.Decode.string
        |> Json.Decode.Pipeline.required "nvctitulo1" Json.Decode.string
        |> Json.Decode.Pipeline.required "nvcmins1" Json.Decode.int
        |> Json.Decode.Pipeline.required "nvcorador1id" Json.Decode.string
        |> Json.Decode.Pipeline.required "nvcorador1name" Json.Decode.string
        |> Json.Decode.Pipeline.required "nvcanciano1" Json.Decode.bool
        |> Json.Decode.Pipeline.required "nvctitulo2" Json.Decode.string
        |> Json.Decode.Pipeline.required "nvcmins2" Json.Decode.int
        |> Json.Decode.Pipeline.required "nvcorador2id" Json.Decode.string
        |> Json.Decode.Pipeline.required "nvcorador2name" Json.Decode.string
        |> Json.Decode.Pipeline.required "nvcanciano2" Json.Decode.bool
        |> Json.Decode.Pipeline.required "nvcestudiooradorid" Json.Decode.string
        |> Json.Decode.Pipeline.required "nvcestudiooradorname" Json.Decode.string
        |> Json.Decode.Pipeline.required "nvcestudiolectorid" Json.Decode.string
        |> Json.Decode.Pipeline.required "nvcestudiolectorname" Json.Decode.string
        |> Json.Decode.Pipeline.required "cancion3" Json.Decode.int
        |> Json.Decode.Pipeline.required "cancion3id" Json.Decode.string
        |> Json.Decode.Pipeline.required "cancion3name" Json.Decode.string
        |> Json.Decode.Pipeline.required "cancion3tema" Json.Decode.string
        |> Json.Decode.Pipeline.required "cancion3versiculo" Json.Decode.string
        |> Json.Decode.Pipeline.required "oracion2id" Json.Decode.string
        |> Json.Decode.Pipeline.required "oracion2name" Json.Decode.string
        |> Json.Decode.Pipeline.required "camaraid" Json.Decode.string
        |> Json.Decode.Pipeline.required "camaraname" Json.Decode.string
        |> Json.Decode.Pipeline.required "aparatosid" Json.Decode.string
        |> Json.Decode.Pipeline.required "aparatosname" Json.Decode.string
        |> Json.Decode.Pipeline.required "cronometroid" Json.Decode.string
        |> Json.Decode.Pipeline.required "cronometroname" Json.Decode.string
        |> Json.Decode.Pipeline.required "domasamblea" Json.Decode.bool
        |> Json.Decode.Pipeline.required "domasambleamensage" Json.Decode.string
        |> Json.Decode.Pipeline.required "fechadomingo" Json.Decode.int
        |> Json.Decode.Pipeline.required "dompresidenteid" Json.Decode.string
        |> Json.Decode.Pipeline.required "dompresidentename" Json.Decode.string
        |> Json.Decode.Pipeline.required "domdiscursante" Json.Decode.string
        |> Json.Decode.Pipeline.required "domhaydiscursante" Json.Decode.bool
        |> Json.Decode.Pipeline.required "domcancion1" Json.Decode.int
        |> Json.Decode.Pipeline.required "domcancion1id" Json.Decode.string
        |> Json.Decode.Pipeline.required "domcancion1name" Json.Decode.string
        |> Json.Decode.Pipeline.required "domcancion1tema" Json.Decode.string
        |> Json.Decode.Pipeline.required "domcancion1versiculo" Json.Decode.string
        |> Json.Decode.Pipeline.required "domcancion2" Json.Decode.int
        |> Json.Decode.Pipeline.required "domcancion2id" Json.Decode.string
        |> Json.Decode.Pipeline.required "domcancion2name" Json.Decode.string
        |> Json.Decode.Pipeline.required "domcancion2tema" Json.Decode.string
        |> Json.Decode.Pipeline.required "domcancion2versiculo" Json.Decode.string
        |> Json.Decode.Pipeline.required "elcversiculos" Json.Decode.string
        |> Json.Decode.Pipeline.required "elcnarradorid" Json.Decode.string
        |> Json.Decode.Pipeline.required "elcnarradorname" Json.Decode.string
        |> Json.Decode.Pipeline.required "elcpersonajesynombres" Json.Decode.string
        |> Json.Decode.Pipeline.required "elcelcpersonajes" (Json.Decode.list Json.Decode.string)
        |> Json.Decode.Pipeline.required "elcelcpersonajeslectids" (Json.Decode.list Json.Decode.string)


encodeSemanas : List Semana -> Json.Encode.Value
encodeSemanas records =
    Json.Encode.list encodeSemana records


encodeSemana : Semana -> Json.Encode.Value
encodeSemana record =
    Json.Encode.object
        [ ( "id", Json.Encode.string <| record.id )
        , ( "creado", Json.Encode.int <| record.creado )
        , ( "modificado", Json.Encode.int <| record.modificado )
        , ( "starthour", Json.Encode.int <| record.starthour )
        , ( "startminute", Json.Encode.int <| record.startminute )
        , ( "sabasamblea", Json.Encode.bool <| record.sabasamblea )
        , ( "sabasambleamensage", Json.Encode.string <| record.sabasambleamensage )
        , ( "fechasabado", Json.Encode.int <| record.fechasabado )
        , ( "presidenteid", Json.Encode.string <| record.presidenteid )
        , ( "presidentename", Json.Encode.string <| record.presidentename )
        , ( "cancion1", Json.Encode.int <| record.cancion1 )
        , ( "cancion1id", Json.Encode.string <| record.cancion1id )
        , ( "cancion1name", Json.Encode.string <| record.cancion1name )
        , ( "cancion1tema", Json.Encode.string <| record.cancion1tema )
        , ( "cancion1versiculo", Json.Encode.string <| record.cancion1versiculo )
        , ( "oracion1id", Json.Encode.string <| record.oracion1id )
        , ( "oracion1name", Json.Encode.string <| record.oracion1name )
        , ( "tb1titulo", Json.Encode.string <| record.tb1titulo )
        , ( "tb1oradorid", Json.Encode.string <| record.tb1oradorid )
        , ( "tb1oradorname", Json.Encode.string <| record.tb1oradorname )
        , ( "tbperlasoradorid", Json.Encode.string <| record.tbperlasoradorid )
        , ( "tbperlasoradorname", Json.Encode.string <| record.tbperlasoradorname )
        , ( "consejolector", Json.Encode.int <| record.consejolector )
        , ( "tblectorid", Json.Encode.string <| record.tblectorid )
        , ( "tblectorname", Json.Encode.string <| record.tblectorname )
        , ( "lecturaversiculos", Json.Encode.string <| record.lecturaversiculos )
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
        , ( "smm1esid", Json.Encode.string <| record.smm1esid )
        , ( "smm1esname", Json.Encode.string <| record.smm1esname )
        , ( "smm1ayuid", Json.Encode.string <| record.smm1ayuid )
        , ( "smm1ayuname", Json.Encode.string <| record.smm1ayuname )
        , ( "smm2esid", Json.Encode.string <| record.smm2esid )
        , ( "smm2esname", Json.Encode.string <| record.smm2esname )
        , ( "smm2ayuid", Json.Encode.string <| record.smm2ayuid )
        , ( "smm2ayuname", Json.Encode.string <| record.smm2ayuname )
        , ( "smm3esid", Json.Encode.string <| record.smm3esid )
        , ( "smm3esname", Json.Encode.string <| record.smm3esname )
        , ( "smm3ayuid", Json.Encode.string <| record.smm3ayuid )
        , ( "smm3ayuname", Json.Encode.string <| record.smm3ayuname )
        , ( "smm4esid", Json.Encode.string <| record.smm4esid )
        , ( "smm4esname", Json.Encode.string <| record.smm4esname )
        , ( "smm4ayuid", Json.Encode.string <| record.smm4ayuid )
        , ( "smm4ayuname", Json.Encode.string <| record.smm4ayuname )
        , ( "presentacionesmesid", Json.Encode.string <| record.presentacionesmesid )
        , ( "presentacionesmesname", Json.Encode.string <| record.presentacionesmesname )
        , ( "cancion2", Json.Encode.int <| record.cancion2 )
        , ( "cancion2id", Json.Encode.string <| record.cancion2id )
        , ( "cancion2name", Json.Encode.string <| record.cancion2name )
        , ( "cancion2tema", Json.Encode.string <| record.cancion2tema )
        , ( "cancion2versiculo", Json.Encode.string <| record.cancion2versiculo )
        , ( "nvctitulo1", Json.Encode.string <| record.nvctitulo1 )
        , ( "nvcmins1", Json.Encode.int <| record.nvcmins1 )
        , ( "nvcorador1id", Json.Encode.string <| record.nvcorador1id )
        , ( "nvcorador1name", Json.Encode.string <| record.nvcorador1name )
        , ( "nvcanciano1", Json.Encode.bool <| record.nvcanciano1 )
        , ( "nvctitulo2", Json.Encode.string <| record.nvctitulo2 )
        , ( "nvcmins2", Json.Encode.int <| record.nvcmins2 )
        , ( "nvcorador2id", Json.Encode.string <| record.nvcorador2id )
        , ( "nvcorador2name", Json.Encode.string <| record.nvcorador2name )
        , ( "nvcanciano2", Json.Encode.bool <| record.nvcanciano2 )
        , ( "nvcestudiooradorid", Json.Encode.string <| record.nvcestudiooradorid )
        , ( "nvcestudiooradorname", Json.Encode.string <| record.nvcestudiooradorname )
        , ( "nvcestudiolectorid", Json.Encode.string <| record.nvcestudiolectorid )
        , ( "nvcestudiolectorname", Json.Encode.string <| record.nvcestudiolectorname )
        , ( "cancion3", Json.Encode.int <| record.cancion3 )
        , ( "cancion3id", Json.Encode.string <| record.cancion3id )
        , ( "cancion3name", Json.Encode.string <| record.cancion3name )
        , ( "cancion3tema", Json.Encode.string <| record.cancion3tema )
        , ( "cancion3versiculo", Json.Encode.string <| record.cancion3versiculo )
        , ( "oracion2id", Json.Encode.string <| record.oracion2id )
        , ( "oracion2name", Json.Encode.string <| record.oracion2name )
        , ( "camaraid", Json.Encode.string <| record.camaraid )
        , ( "camaraname", Json.Encode.string <| record.camaraname )
        , ( "aparatosid", Json.Encode.string <| record.aparatosid )
        , ( "aparatosname", Json.Encode.string <| record.aparatosname )
        , ( "cronometroid", Json.Encode.string <| record.cronometroid )
        , ( "cronometroname", Json.Encode.string <| record.cronometroname )
        , ( "domasamblea", Json.Encode.bool <| record.domasamblea )
        , ( "domasambleamensage", Json.Encode.string <| record.domasambleamensage )
        , ( "fechadomingo", Json.Encode.int <| record.fechadomingo )
        , ( "dompresidenteid", Json.Encode.string <| record.dompresidenteid )
        , ( "dompresidentename", Json.Encode.string <| record.dompresidentename )
        , ( "domdiscursante", Json.Encode.string <| record.domdiscursante )
        , ( "domhaydiscursante", Json.Encode.bool <| record.domhaydiscursante )
        , ( "domcancion1", Json.Encode.int <| record.domcancion1 )
        , ( "domcancion1id", Json.Encode.string <| record.domcancion1id )
        , ( "domcancion1name", Json.Encode.string <| record.domcancion1name )
        , ( "domcancion1tema", Json.Encode.string <| record.domcancion1tema )
        , ( "domcancion1versiculo", Json.Encode.string <| record.domcancion1versiculo )
        , ( "domcancion2", Json.Encode.int <| record.domcancion2 )
        , ( "domcancion2id", Json.Encode.string <| record.domcancion2id )
        , ( "domcancion2name", Json.Encode.string <| record.domcancion2name )
        , ( "domcancion2tema", Json.Encode.string <| record.domcancion2tema )
        , ( "domcancion2versiculo", Json.Encode.string <| record.domcancion2versiculo )
        , ( "elcversiculos", Json.Encode.string <| record.elcversiculos )
        , ( "elcnarradorid", Json.Encode.string <| record.elcnarradorid )
        , ( "elcnarradorname", Json.Encode.string <| record.elcnarradorname )
        , ( "elcpersonajesynombres", Json.Encode.string <| record.elcpersonajesynombres )
        , ( "elcelcpersonajes", Json.Encode.list (\y -> Json.Encode.string y) record.elcelcpersonajes )
        , ( "elcelcpersonajeslectids", Json.Encode.list (\y -> Json.Encode.string y) record.elcelcpersonajeslectids )
        ]
