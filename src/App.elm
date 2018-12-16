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
    div [ class "container" ]
        [ div [ attribute "id" "links" ] []
        , input [ type_ "file", attribute "id" "selectFiles", attribute "value" "Import" ] []
        , br [] []
        , textarea [ attribute "id" "result" ] []
        , div [ attribute "id" "example-table" ] []
        , button [ attribute "id" "import" ] [ text "Import" ]
        , button [ attribute "id" "download-json" ] [ text "Download JSON" ]
        , div []
            [ img [ src "/logo.svg" ] []
            , h1 [] [ text "Your Elm App is working!!!!11" ]
            ]
        , h1 []
            [ img [ src "images/logo.png" ] []
            , text "Elm Webpack Starter, featuring hot-loading"
            ]
        , p [] [ text "Click on the button below to increment the state." ]
        , div []
            [ button
                [ class "btn btn-primary"
                , onClick (FillSemana "this text")
                ]
                [ text "+ 1" ]
            , text "A"
            ]
        , p [] [ text "Then make a change to the source code and see how the state is retained after you recompile." ]
        , p []
            [ text "And now don't forget to add a star to the Github repo "
            , a [ href "https://github.com/simonh1000/elm-webpack-starter" ] [ text "elm-webpack-starter" ]
            ]
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
