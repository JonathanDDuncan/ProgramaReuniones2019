module App exposing (Msg(..), createBackup, init, subscriptions, update, view)

import Debug exposing (..)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Json.Decode exposing (Decoder)
import LlenarSemana exposing (..)
import Ports exposing (..)
import SemanaTemplConv exposing (..)
import Types.AppTypes exposing (..)
import Types.Backup exposing (..)
import Types.Cancion exposing (..)
import Types.Publicador exposing (..)
import Types.Semana exposing (..)


init : ( Model, Cmd Msg )
init =
    ( { semanatofill = Types.Semana.init
      , semanastofill = []
      , semanasllenados = []
      , semanasanteriores = []
      , publicadores = []
      , canciones = []
      , ultimaActualizacion = 0
      }
    , Cmd.none
    )



-- UPDATE


type Msg
    = FillSemana String
    | FillSemanas String
    | LoadPublicadores String
    | LoadCanciones String
    | LoadSemanasAnteriores String
    | Programasemanalrestore Backup


update : Msg -> Model -> ( Model, Cmd Msg )
update message model =
    case message of
        FillSemana str ->
            let
                semana =
                    Json.Decode.decodeString Types.Semana.decodeSemana str

                modelwithsemanatofill =
                    case semana of
                        Err err ->
                            let
                                _ =
                                    Debug.log "FillSemana err" err
                            in
                            model

                        Ok res ->
                            { model | semanatofill = res }

                modelllenado =
                    llenarsemana modelwithsemanatofill
            in
            ( modelllenado, fillSemanaCallBack modelllenado.semanatofill )

        FillSemanas str ->
            let
                semanas =
                    Json.Decode.decodeString Types.Semana.decodeSemanas str

                modelwithsemanas =
                    case semanas of
                        Err err ->
                            let
                                _ =
                                    Debug.log "FillSemanas err" err
                            in
                            model

                        Ok res ->
                            { model | semanastofill = res }

                newmodel =
                    llenarsemanas modelwithsemanas

                semanastempl =
                    List.map (\sem -> semanaToSemanaTempl sem) newmodel.semanasllenados
            in
            ( newmodel
            , Cmd.batch
                [ fillSemanasCallBack newmodel.semanasllenados
                , fillSemanasTemplCallBack semanastempl
                , programasemanalbackupCallBack <| createBackup newmodel semanastempl
                ]
            )

        LoadSemanasAnteriores str ->
            let
                semanasAnteriores =
                    Json.Decode.decodeString Types.Semana.decodeSemanas str

                modelwithSemanasAnteriores =
                    case semanasAnteriores of
                        Err err ->
                            let
                                _ =
                                    Debug.log "LoadSemanasAnteriores error" err
                            in
                            model

                        Ok semanas ->
                            { model | semanasanteriores = semanas }
            in
            ( modelwithSemanasAnteriores
            , Cmd.none
            )

        LoadPublicadores str ->
            let
                publicadores =
                    Json.Decode.decodeString Types.Publicador.decodePublicadores str

                modelwithPublicadores =
                    case publicadores of
                        Err err ->
                            let
                                _ =
                                    Debug.log "publicadores err" err
                            in
                            model

                        Ok pubs ->
                            { model | publicadores = pubs }
            in
            ( modelwithPublicadores
            , Cmd.none
            )

        LoadCanciones str ->
            let
                canciones =
                    Json.Decode.decodeString Types.Cancion.decodeCanciones str

                modelwithCanciones =
                    case canciones of
                        Err err ->
                            let
                                _ =
                                    Debug.log "canciones err" err
                            in
                            model

                        Ok canciones1 ->
                            { model | canciones = canciones1 }
            in
            ( modelwithCanciones
            , Cmd.none
            )

        Programasemanalrestore backup ->
            let
                newmodel =
                    Debug.log "restore"
                        { model
                            | publicadores = backup.publicadores
                            , canciones = backup.canciones
                            , ultimaActualizacion = backup.ultimaActualizacion
                            , semanasllenados = []
                            , semanasanteriores = List.append backup.semanasanteriores backup.semanasanteriores
                        }
            in
            ( newmodel
            , Cmd.none
            )


createBackup : { f | canciones : a, publicadores : b, semanasanteriores : c, semanasllenados : d, ultimaActualizacion : e } -> g -> { canciones : a, publicadores : b, semanasanteriores : c, semanasllenados : d, semanastemplates : g, ultimaActualizacion : e }
createBackup newmodel semanastempl =
    { publicadores = newmodel.publicadores
    , canciones = newmodel.canciones
    , ultimaActualizacion = newmodel.ultimaActualizacion
    , semanasllenados = newmodel.semanasllenados
    , semanasanteriores = newmodel.semanasanteriores
    , semanastemplates = semanastempl
    }



-- VIEW


view : Model -> Html Msg
view model =
    div [ class "ui container" ]
        [ h1 [ class "ui header" ] [ text "Semanas para llenar" ]
        , input [ class "ui button", type_ "file", attribute "id" "selectFiles", attribute "value" "Import" ] []
        , br [] []
        , div [ attribute "id" "example-table" ] []
        , button [ class "ui secondary button", attribute "id" "download-json" ] [ text "Download Semanas para llenar JSON" ]
        , br [] []
        , button [class "ui button", attribute "id" "process" ] [ text "Process" ]
        , div [  attribute "id" "links" ] []
        ]


subscriptions : model -> Sub Msg
subscriptions model =
    Sub.batch
        [ Ports.fillSemana FillSemana
        , Ports.fillSemanas FillSemanas
        , Ports.loadPublicadores LoadPublicadores
        , Ports.loadCanciones LoadCanciones
        , Ports.loadSemanasAnteriores LoadSemanasAnteriores
        , Ports.programasemanalrestore Programasemanalrestore
        ]
