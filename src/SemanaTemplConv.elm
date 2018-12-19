module SemanaTemplConv exposing (gethour, semanaToSemanaTempl, toStringOrEmpty)

import Date exposing (..)
import DateFormat exposing (..)
import DateFormat.Language exposing (..)
import Time exposing (..)
import Types.Semana exposing (..)
import Types.SemanaTempl exposing (..)


type alias TimeOfDay =
    { hour : Int
    , minutes : Int
    }


getDate : Int -> String
getDate fecha =
    DateFormat.formatWithLanguage DateFormat.Language.spanish
        [ dayOfMonthNumber
        , text " "
        , monthNameFull
        , text ", "
        , yearNumber
        ]
        utc
        (millisToPosix fecha)
        |> String.toLower


semanaToSemanaTempl : Semana -> SemanaTempl
semanaToSemanaTempl semana =
    let
        meetingstartTime =
            { hour = semana.starthour, minutes = semana.startminute }

        semanatempl =
            { resfecha = getDate semana.fechasabado
            , sabasamblea = semana.sabasamblea
            , cancion1 = semana.cancion1
            , cancion2 = semana.cancion2
            , domcancion1 = semana.domcancion1
            , domcancion2 = semana.domcancion2
            , cancion3 = semana.cancion3
            , tb1titulo = semana.tb1titulo
            , nvctitulo1 = semana.nvctitulo1
            , nvcmins1 = semana.nvcmins1
            , nvc1anciano = semana.nvcanciano1
            , nvctitulo2 = semana.nvctitulo2
            , nvcmins2 = semana.nvcmins2
            , nvc2anciano = semana.nvcanciano2
            , smmleccionmaestros = semana.smmleccionmaestros
            , smmtema1 = semana.smmtema1
            , smmtema2 = semana.smmtema2
            , smmtema3 = semana.smmtema3
            , smmtema4 = semana.smmtema4
            , smmmin1 = semana.smmmin1
            , smmmin2 = semana.smmmin2
            , smmmin3 = semana.smmmin3
            , smmmin4 = semana.smmmin4
            , smmconsejo1 = semana.smmconsejo1
            , smmconsejo2 = semana.smmconsejo2
            , smmconsejo3 = semana.smmconsejo3
            , smmconsejo4 = semana.smmconsejo4
            , smmesvideo1 = semana.smmesvideo1
            , smmesvideo2 = semana.smmesvideo2
            , smmesvideo3 = semana.smmesvideo3
            , smmesvideo4 = semana.smmesvideo4
            , smmtieneayudante1 = semana.smmtieneayudante1
            , smmtieneayudante2 = semana.smmtieneayudante2
            , smmtieneayudante3 = semana.smmtieneayudante3
            , smmtieneayudante4 = semana.smmtieneayudante4
            , domasamblea = semana.domasamblea
            , fechadomingo = getDate semana.fechadomingo
            , domhaydiscursante = semana.domhaydiscursante
            , domdiscursante = semana.domdiscursante
            , sabasambleamensage = semana.sabasambleamensage
            , domasambleamensage = semana.domasambleamensage
            , temacancion1 = semana.cancion1tema ++ " " ++ semana.cancion1versiculo
            , temacancion2 = semana.cancion2tema ++ " " ++ semana.cancion2versiculo
            , temacancion3 = semana.cancion3tema ++ " " ++ semana.cancion3versiculo
            , domtemacancion1 = semana.domcancion1tema ++ " " ++ semana.domcancion1versiculo
            , domtemacancion2 = semana.domcancion2tema ++ " " ++ semana.domcancion2versiculo
            , respcancion1 = semana.cancion1name
            , respcancion2 = semana.cancion2name
            , respcancion3 = semana.cancion3name
            , domrespcancion1 = semana.domcancion1name
            , domrespcancion2 = semana.domcancion2name
            , nvcorador1 = semana.nvcorador1name
            , nvcorador2 = semana.nvcorador2name
            , nvcestudioorador = semana.nvcestudiooradorname
            , presidente = semana.presidentename
            , presentacionesmes = semana.presentacionesmesname
            , tbperlasorador = semana.tbperlasoradorname
            , tb1orador = semana.tb1oradorname
            , tblector = semana.tblectorname
            , consejolector = toStringOrEmpty semana.consejolector
            , smmprimeraes = semana.smm1esname
            , smmprimeraayu = semana.smm1ayuname
            , smmrevisitaes = semana.smm2esname
            , smmrevisitaayu = semana.smm2ayuname
            , smmcbes = semana.smm3esname
            , smmcbayu = semana.smm3ayuname
            , nvcestudiolector = semana.nvcestudiolectorname
            , aparatos = semana.aparatosname
            , camara = semana.camaraname
            , cronometro = semana.cronometroname
            , nvc3h1 = gethour meetingstartTime <| 50 + semana.nvcmins1
            , oracion1 = semana.oracion1name
            , oracion2 = semana.oracion2name
            , dompresidente = semana.dompresidentename
            , ini1h1 = gethour meetingstartTime 0
            , ini2h1 = gethour meetingstartTime 5
            , tb1h1 = gethour meetingstartTime 8
            , tb2h1 = gethour meetingstartTime 18
            , tb3h1 = gethour meetingstartTime 26
            , smm1h1 = gethour meetingstartTime 30
            , smm2h1 = gethour meetingstartTime (30 + semana.smmmin1)
            , smm3h1 = gethour meetingstartTime (30 + semana.smmmin1 + semana.smmmin2)
            , smm4h1 = gethour meetingstartTime (30 + semana.smmmin1 + semana.smmmin2 + semana.smmmin3)
            , nvc1h1 = gethour meetingstartTime 45
            , nvc2h1 = gethour meetingstartTime 50
            , nvc4h1 = gethour meetingstartTime 65
            , nvc5h1 = gethour meetingstartTime 95
            , nvc6h1 = gethour meetingstartTime 100
            , nvc6h2 = gethour meetingstartTime 105
            }
    in
    semanatempl


toStringOrEmpty : Int -> String
toStringOrEmpty num =
    if num == 0 then
        ""

    else
        String.fromInt num


gethour start addmins =
    let
        time1 =
            addMinutes addmins start

        hourtemp =
            time1.hour

        hour1 =
            (if hourtemp > 12 then
                hourtemp - 12

             else
                hourtemp
            )
                |> String.fromInt

        minutes1 =
            time1.minutes
                |> String.fromInt
                |> String.padLeft 2 '0'
    in
    hour1 ++ ":" ++ minutes1


addMinutes minutes time =
    let
        totalminutes =
            time.minutes + minutes

        extrahours =
            totalminutes // 60

        newhour =
            time.hour + extrahours

        minutesleft =
            totalminutes - (extrahours * 60)
    in
    { hour = newhour, minutes = minutesleft }
