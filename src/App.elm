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
    | Clear String


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
                            , semanasllenados = []
                            , semanasanteriores = List.append backup.semanasanteriores backup.semanasanteriores
                        }
            in
            ( newmodel
            , Cmd.none
            )

        Clear _ ->
            ( { model
                | publicadores = []
                , canciones = []
                , semanasllenados = []
                , semanasanteriores = []
              }
            , Cmd.none
            )


createBackup : { f | canciones : a, publicadores : b, semanasanteriores : c, semanasllenados : d } -> g -> { canciones : a, publicadores : b, semanasanteriores : c, semanasllenados : d, semanastemplates : g }
createBackup newmodel semanastempl =
    { publicadores = newmodel.publicadores
    , canciones = newmodel.canciones
    , semanasllenados = newmodel.semanasllenados
    , semanasanteriores = newmodel.semanasanteriores
    , semanastemplates = semanastempl
    }



-- VIEW


view : Model -> Html Msg
view model =
    div [ class "ui container" ]
        [ div [ class "ui tabular menu" ]
            [ div [ class "item", attribute "data-tab" "tab-cargar" ]
                [ text "Cargar " ]
            , div [ class "item", attribute "data-tab" "tab-llenar" ]
                [ text "Para Llenar" ]
            , div [ class "item", attribute "data-tab" "tab-publicadores" ]
                [ text "Publicadores" ]
            , div [ class "item", attribute "data-tab" "tab-canciones" ]
                [ text "Canciones" ]
            , div [ class "item", attribute "data-tab" "tab-anterior" ]
                [ text "Datos Anteriores " ]
            , div [ class "item", attribute "data-tab" "tab-crear" ]
                [ text "Crear " ]
            ]
        , div [ class "ui tab", attribute "data-tab" "tab-llenar" ]
            tabllenar
        , div [ class "ui tab", attribute "data-tab" "tab-publicadores" ]
            tabpublicadores
        , div [ class "ui tab", attribute "data-tab" "tab-canciones" ]
            tabcanciones
        , div [ class "ui tab", attribute "data-tab" "tab-anterior" ]
            tabanteriores
        , div [ class "ui tab", attribute "data-tab" "tab-cargar" ]
            tabcargar
        , div [ class "ui tab", attribute "data-tab" "tab-crear" ]
            tabcrear
        ]


tabpublicadores =
    [ h1 [ class "ui header" ] [ text "Publicadores" ]
    , div [ attribute "id" "table-publicadores" ] []
    , addrow "addrowpublicadores"
    ]


tabcanciones =
    [ h1 [ class "ui header" ] [ text "Canciones" ]
    , div [ attribute "id" "table-canciones" ] []
    , addrow "addrowcanciones"
    ]


tabanteriores =
    [ h1 [ class "ui header" ] [ text "Semanas anteriores" ]
    , div [ attribute "id" "table-anteriores" ] []
    , addrow "addrowanteriores"
    ]


tabllenar =
    [ h1 [ class "ui header" ] [ text "Semanas para llenar" ]
    , br [] []
    , div [ attribute "id" "example-table" ] []
    , addrow "addrowllenar"
    , button [ class "ui secondary button", attribute "id" "download-json" ] [ text "Download Semanas para llenar JSON" ]
    ]


addrow idname =
    div [ class "ui grid" ]
        [ div [ class "row" ]
            [ div [ class "right floated two wide column" ]
                [ a [ id idname ] [ node "i" [ class "fas fa-plus-circle fa-w-16 fa-3x" ] [] ]
                ]
            ]
        ]


tabcargar =
    [ h1 [ class "ui header" ] [ text "Semanas para llenar" ]
    , input [ class "ui button", type_ "file", attribute "id" "selectFiles", attribute "value" "Cargar semanas para llenar" ] []
    , br [] []
    , h1 [ class "ui header" ] [ text "Copia de seguridad" ]
    , input [ class "ui button", type_ "file", attribute "id" "cargarcopiaseguridad", attribute "value" "Cargar Copia de Seguridad" ] []
    ]


tabcrear =
    [ h1 [ class "ui header" ] [ text "Crear Programa" ]
    , button [ class "ui button", attribute "id" "process" ] [ text "Crear" ]
    , br [] []
    , div [ attribute "id" "links" ] []
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
        , Ports.clear Clear
        ]
