module LlenarSemana exposing
    ( anteriores
    , aparatos
    , apoyo
    , camara
    , choosefirst
    , cronometro
    , discursos
    , dompresidente
    , estudiantes
    , filtermismosexoofamiliarsexoopuesto
    , filterpubs
    , filterpubssolodisponibles
    , getIdName
    , getcancion
    , getlastweekid
    , getlastweekidwithin
    , getlastweeks
    , getlastweeksids
    , idApoyos
    , idAyudantes
    , idDiscursos
    , idDiscursoscomentarios
    , idLectores
    , idNoPuedeApoyos
    , idOraciones
    , lectores
    , lectorestudiocongregacion
    , llenarcanciones
    , llenarsemana
    , llenarsemanas
    , nvc1anciano
    , nvc2anciano
    , nvcestudioorador
    , nvcorador1
    , nvcorador2
    , oracion1
    , oracion2
    , presidente
    , presidenteestudiantes
    , pubsnotinidlistorvideo
    , recombine
    , removeVideo
    , removeVideoIfGreaterEqualThan
    , removeprevioussemanas
    , removeprincipiantes
    , removepublicadoresmatching
    , setasignments
    , setayudante
    , setpresidentepartevideo
    , setpublicador
    , setsmm1
    , setsmm2
    , setsmm3
    , smm1
    , smm2
    , smm3
    , smmdiscurso
    , tb1orador
    , tblectorbiblia
    , tbperlasorador
    , updatesemantofill
    )

import List.Extra as ListExtra
import Types.AppTypes exposing (..)
import Types.Cancion exposing (..)
import Types.Publicador exposing (..)
import Types.Semana exposing (..)

 

-- Main flow


llenarsemanas model =
    List.foldl
        (\sem modelaccum ->
            { modelaccum | semanatofill = sem }
                |> llenarsemana
                |> (\modellenado -> { modellenado | semanasllenados = modellenado.semanasllenados ++ [ modellenado.semanatofill ] })
        )
        model
        model.semanastofill


llenarsemana : Model -> Model
llenarsemana model =
    if not model.semanatofill.sabasamblea then
        model
            |> discursos
            |> estudiantes
            |> lectores
            |> apoyo
            |> llenarcanciones

    else
        model


llenarcanciones : Model -> Model
llenarcanciones model =
    let
        scp1 =
            getcancion model.canciones model.publicadores model.semanatofill.cancion1

        scp2 =
            getcancion model.canciones model.publicadores model.semanatofill.cancion2

        scp3 =
            getcancion model.canciones model.publicadores model.semanatofill.cancion3

        dcp1 =
            getcancion model.canciones model.publicadores model.semanatofill.domcancion1

        dcp2 =
            getcancion model.canciones model.publicadores model.semanatofill.domcancion2

        semanasetter =
            \semana ->
                { semana
                    | cancion1id = scp1.id
                    , cancion1name = scp1.nombre
                    , cancion1tema = scp1.tema
                    , cancion1versiculo = scp1.versiculo
                    , cancion2id = scp2.id
                    , cancion2name = scp2.nombre
                    , cancion2tema = scp2.tema
                    , cancion2versiculo = scp2.versiculo
                    , cancion3id = scp3.id
                    , cancion3name = scp3.nombre
                    , cancion3tema = scp3.tema
                    , cancion3versiculo = scp3.versiculo
                    , domcancion1id = dcp1.id
                    , domcancion1name = dcp1.nombre
                    , domcancion1tema = dcp1.tema
                    , domcancion1versiculo = dcp1.versiculo
                    , domcancion2id = dcp2.id
                    , domcancion2name = dcp2.nombre
                    , domcancion2tema = dcp2.tema
                    , domcancion2versiculo = dcp2.versiculo
                }
    in
    updatesemantofill semanasetter model


discursos : Model -> Model
discursos model =
    model
        |> nvc1anciano
        |> nvc2anciano
        |> presidente
        |> nvcestudioorador
        |> nvcorador1
        |> nvcorador2
        |> tbperlasorador
        |> tb1orador


estudiantes : Model -> Model
estudiantes model =
    model
        |> tblectorbiblia
        |> smm1
        |> smm2
        |> smm3
        |> smm4
        |> setpresidentepartevideo


setpresidentepartevideo model =
    let
        semanatofill =
            model.semanatofill
                |> (\sf ->
                        if sf.smmesvideo1 then
                            { sf
                                | smm1esname = sf.presidentename
                                , smm1ayuid = ""
                                , smm1ayuname = ""
                            }

                        else
                            sf
                   )
                |> (\sf ->
                        if sf.smmesvideo2 then
                            { sf
                                | smm2esname = sf.presidentename
                                , smm2ayuid = ""
                                , smm2ayuname = ""
                            }

                        else
                            sf
                   )
                |> (\sf ->
                        if sf.smmesvideo3 then
                            { sf
                                | smm3esid = ""
                                , smm3esname = sf.presidentename
                                , smm3ayuid = ""
                                , smm3ayuname = ""
                            }

                        else
                            sf
                   )
    in
    { model | semanatofill = semanatofill }


lectores : Model -> Model
lectores model =
    model
        |> lectorestudiocongregacion


apoyo : Model -> Model
apoyo model =
    model
        |> cronometro
        |> aparatos
        |> camara
        |> oracion1
        |> oracion2
        |> dompresidente



-- How main flow is achieved


lectorestudiocongregacion : Model -> Model
lectorestudiocongregacion model =
    setpublicador
        "lectorestudiocongregacion"
        2
        (List.concat [ idDiscursos, idLectores ])
        .nvcestudiolectorid
        .lectorestudiocongregacion
        (\( semana, id, name ) ->
            { semana
                | nvcestudiolectorid = id
                , nvcestudiolectorname = name
            }
        )
        model


aparatos : Model -> Model
aparatos model =
    setpublicador
        "aparatos"
        2
        (idApoyos ++ idNoPuedeApoyos ++ idLectores ++ idDiscursoscomentarios)
        .aparatosid
        .aparatos
        (\( semana, id, name ) ->
            { semana
                | aparatosid = id
                , aparatosname = name
            }
        )
        model


camara : Model -> Model
camara model =
    setpublicador
        "camara"
        2
        (idApoyos ++ idNoPuedeApoyos ++ idLectores ++ idDiscursoscomentarios)
        .camaraid
        .camara
        (\( semana, id, name ) ->
            { semana
                | camaraid = id
                , camaraname = name
            }
        )
        model


cronometro : Model -> Model
cronometro model =
    setpublicador
        "cronometro"
        2
        (idApoyos ++ idNoPuedeApoyos)
        .cronometroid
        .cronometro
        (\( semana, id, name ) ->
            { semana
                | cronometroid = id
                , cronometroname = name
            }
        )
        model


oracion1 : Model -> Model
oracion1 model =
    setpublicador
        "oracion1"
        2
        idOraciones
        .oracion1id
        .oracion
        (\( semana, id, name ) ->
            { semana
                | oracion1id = id
                , oracion1name = name
            }
        )
        model


oracion2 : Model -> Model
oracion2 model =
    setpublicador
        "oracion2"
        2
        idOraciones
        .oracion2id
        .oracion
        (\( semana, id, name ) ->
            { semana
                | oracion2id = id
                , oracion2name = name
            }
        )
        model


dompresidente : Model -> Model
dompresidente model =
    setpublicador
        "dompresidente"
        2
        []
        .dompresidenteid
        .presidentedomingo
        (\( semana, id, name ) ->
            { semana
                | dompresidenteid = id
                , dompresidentename = name
            }
        )
        model


smmdiscurso : Model -> Model
smmdiscurso model =
    setpublicador
        "smmdiscurso"
        2
        idDiscursos
        .smm3esid
        .smmdiscurso
        (\( semana, id, name ) ->
            { semana
                | smm3esid = id
                , smm3esname = name
            }
        )
        model


setayudante getters semanaid pubfilter semanasetter discursantegetter model =
    if semanaid model.semanatofill == "" then
        let
            discursanteid =
                discursantegetter model.semanatofill

            discursante =
                List.filter (\pub -> pub.id == discursanteid) model.publicadores
                    |> List.head

            esprincipiante =
                case discursante of
                    Nothing ->
                        False

                    Just disc ->
                        disc.principiante

            esvideo =
                case discursante of
                    Nothing ->
                        False

                    Just disc ->
                        disc.esvideo

            idsemanapasada =
                anteriores model
                    |> getlastweekid semanaid
        in
        if not esvideo then
            model.publicadores
                |> filtermismosexoofamiliarsexoopuesto discursante
                |> filterpubs (\pub -> pubfilter pub)
                |> filterpubssolodisponibles model.semanatofill.fechasabado
                |> List.sortBy (\pub -> pub.name)
                |> removepublicadoresmatching "setayudante" getters model.semanatofill
                |> removeprincipiantes esprincipiante
                |> recombine idsemanapasada
                |> removeVideoIfGreaterEqualThan 2
                |> choosefirst
                |> setasignments semanasetter model

        else
            model

    else
        model


anteriores :
    { a
        | semanasanteriores : appendable
        , semanasllenados : appendable
    }
    -> appendable
anteriores model =
    model.semanasanteriores ++ model.semanasllenados


removeprincipiantes : Bool -> List { a | principiante : Bool } -> List { a | principiante : Bool }
removeprincipiantes esprincipiante publicadores =
    if esprincipiante then
        List.filter (\pub -> not pub.principiante) publicadores

    else
        publicadores


smm1 : Model -> Model
smm1 model =
    model
        |> setsmm1
            idDiscursos
            .smm1esid
            .smm1publicador
            (\( semana, id, name ) ->
                { semana
                    | smm1esid = id
                    , smm1esname = name
                }
            )
        |> setayudante (List.concat [ idDiscursos, idAyudantes ]) .smm1ayuid .ayudante (\( semana, id, name ) -> { semana | smm1ayuid = id, smm1ayuname = name }) .smm1esid


smm2 : Model -> Model
smm2 model =
    model
        |> setsmm2
            idDiscursos
            .smm2esid
            .smm1publicador
            (\( semana, id, name ) ->
                { semana
                    | smm2esid = id
                    , smm2esname = name
                }
            )
        |> setayudante (List.concat [ idDiscursos, idAyudantes ]) .smm2ayuid .ayudante (\( semana, id, name ) -> { semana | smm2ayuid = id, smm2ayuname = name }) .smm2esid


smm3 : Model -> Model
smm3 model =
    if model.semanatofill.smmtieneayudante3 then
        model
            |> setsmm3
                (List.concat [ idDiscursos, idAyudantes ])
                .smm3esid
                .smm3publicador
                (\( semana, id, name ) ->
                    { semana
                        | smm3esid = id
                        , smm3esname = name
                    }
                )
            |> setayudante (List.concat [ idDiscursos, idAyudantes ]) .smm3ayuid .ayudante (\( semana, id, name ) -> { semana | smm3ayuid = id, smm3ayuname = name }) .smm3esid

    else
        model
            |> smmdiscurso


smm4 : Model -> Model
smm4 model =
    if model.semanatofill.smmtieneayudante4 then
        model
            |> setsmm4
                (List.concat [ idDiscursos, idAyudantes ])
                .smm4esid
                .smm4publicador
                (\( semana, id, name ) ->
                    { semana
                        | smm4esid = id
                        , smm4esname = name
                    }
                )
            |> setayudante (List.concat [ idDiscursos, idAyudantes ]) .smm4ayuid .ayudante (\( semana, id, name ) -> { semana | smm4ayuid = id, smm4ayuname = name }) .smm4esid

    else
        model
            |> smmdiscurso


setsmm1 :
    List (Semana -> String)
    -> (Semana -> String)
    -> (Publicador -> Bool)
    -> (( Semana, String, String ) -> Semana)
    -> Model
    -> Model
setsmm1 getters semanaid pubfilter semanasetter model =
    if semanaid model.semanatofill == "" then
        let
            idsmm1semanapasada =
                anteriores model
                    |> getlastweekidwithin .smm1esid model.publicadores

            idsmm2semanapasada =
                anteriores model
                    |> getlastweekidwithin .smm2esid model.publicadores

            -- |> Debug.log "setsmm12 idsmm1semanapasada"
            idsmm3semanapasada =
                anteriores model
                    |> getlastweekidwithin .smm3esid model.publicadores

            -- |> Debug.log "setsmm12 idksmm3semanapasada"
        in
        model.publicadores
            |> List.sortBy (\pub -> pub.name)
            |> recombine idsmm1semanapasada
            |> filterpubs (\pub -> .smm1publicador pub)
            |> filterpubssolodisponibles model.semanatofill.fechasabado
            -- |> Debug.log "setsmm12 recombined"
            |> List.filter (\pub -> pub.id /= idsmm1semanapasada)
            |> List.filter (\pub -> pub.id /= idsmm2semanapasada)
            |> List.filter (\pub -> pub.id /= idsmm3semanapasada)
            -- |> Debug.log "setsmm12 removepreviousweek"
            |> removepublicadoresmatching "setsmm1" getters model.semanatofill
            -- |> Debug.log "setsmm12 removepublicadoresmatching"
            |> removeVideoIfGreaterEqualThan 2
            -- |> Debug.log "setsmm12 removeVideoIfGreaterEqualThan 2"
            |> choosefirst
            -- |> Debug.log "setsmm12 choosefirst"
            |> setasignments semanasetter model

    else
        model


setsmm2 :
    List (Semana -> String)
    -> (Semana -> String)
    -> (Publicador -> Bool)
    -> (( Semana, String, String ) -> Semana)
    -> Model
    -> Model
setsmm2 getters semanaid pubfilter semanasetter model =
    if semanaid model.semanatofill == "" then
        let
            idsmm1semanapasada =
                anteriores model
                    |> getlastweekidwithin .smm1esid model.publicadores

            idsmm2semanapasada =
                anteriores model
                    |> getlastweekidwithin .smm2esid model.publicadores

            -- |> Debug.log "setsmm2 idsmm2semanapasada"
            idsmm3semanapasada =
                anteriores model
                    |> getlastweekidwithin .smm3esid model.publicadores

            -- |> Debug.log "setsmm2 idksmm3semanapasada"
        in
        model.publicadores
            |> List.sortBy (\pub -> pub.name)
            |> recombine idsmm2semanapasada
            |> filterpubs (\pub -> .smm1publicador pub)
            |> filterpubssolodisponibles model.semanatofill.fechasabado
            -- |> Debug.log "setsmm2 recombined"
            |> List.filter (\pub -> pub.id /= idsmm1semanapasada)
            |> List.filter (\pub -> pub.id /= idsmm2semanapasada)
            |> List.filter (\pub -> pub.id /= idsmm3semanapasada)
            -- |> Debug.log "setsmm2 removepreviousweek"
            |> List.filter (\pub -> pub.id /= model.semanatofill.smm1esid)
            |> List.filter (\pub -> pub.id /= model.semanatofill.smm1ayuid)
            |> removepublicadoresmatching "setsmm2" getters model.semanatofill
            -- |> Debug.log "setsmm2 removepublicadoresmatching"
            |> removeVideoIfGreaterEqualThan 2
            -- |> Debug.log "setsmm2 removeVideoIfGreaterEqualThan 2"
            |> choosefirst
            -- |> Debug.log "setsmm2 choosefirst"
            |> setasignments semanasetter model

    else
        model


setsmm3 getters semanaid pubfilter semanasetter model =
    if semanaid model.semanatofill == "" then
        let
            idsmm1semanapasada =
                anteriores model
                    |> getlastweekidwithin .smm1esid model.publicadores

            idsmm2semanapasada =
                anteriores model
                    |> getlastweekidwithin .smm2esid model.publicadores

            idsmm3semanapasada =
                anteriores model
                    |> getlastweekidwithin .smm3esid model.publicadores
        in
        model.publicadores
            |> List.sortBy (\pub -> pub.name)
            |> recombine idsmm3semanapasada
            |> filterpubs (\pub -> pubfilter pub)
            |> filterpubssolodisponibles model.semanatofill.fechasabado
            |> List.filter (\pub -> pub.id /= idsmm1semanapasada)
            |> List.filter (\pub -> pub.id /= idsmm2semanapasada)
            |> List.filter (\pub -> pub.id /= idsmm3semanapasada)
            |> List.filter (\pub -> pub.id /= model.semanatofill.smm1esid)
            |> List.filter (\pub -> pub.id /= model.semanatofill.smm1ayuid)
            |> List.filter (\pub -> pub.id /= model.semanatofill.smm2esid)
            |> List.filter (\pub -> pub.id /= model.semanatofill.smm2ayuid)
            |> removepublicadoresmatching "setsmm3" getters model.semanatofill
            |> removeVideoIfGreaterEqualThan 2
            |> choosefirst
            |> setasignments semanasetter model

    else
        model


setsmm4 getters semanaid pubfilter semanasetter model =
    if semanaid model.semanatofill == "" then
        let
            idsmm1semanapasada =
                anteriores model
                    |> getlastweekidwithin .smm1esid model.publicadores

            idsmm2semanapasada =
                anteriores model
                    |> getlastweekidwithin .smm2esid model.publicadores

            idsmm4semanapasada =
                anteriores model
                    |> getlastweekidwithin .smm4esid model.publicadores
        in
        model.publicadores
            |> List.sortBy (\pub -> pub.name)
            |> recombine idsmm4semanapasada
            |> filterpubs (\pub -> pubfilter pub)
            |> filterpubssolodisponibles model.semanatofill.fechasabado
            |> List.filter (\pub -> pub.id /= idsmm1semanapasada)
            |> List.filter (\pub -> pub.id /= idsmm2semanapasada)
            |> List.filter (\pub -> pub.id /= idsmm4semanapasada)
            |> List.filter (\pub -> pub.id /= model.semanatofill.smm1esid)
            |> List.filter (\pub -> pub.id /= model.semanatofill.smm1ayuid)
            |> List.filter (\pub -> pub.id /= model.semanatofill.smm2esid)
            |> List.filter (\pub -> pub.id /= model.semanatofill.smm2ayuid)
            |> removepublicadoresmatching "setsmm4" getters model.semanatofill
            |> removeVideoIfGreaterEqualThan 2
            |> choosefirst
            |> setasignments semanasetter model

    else
        model


tblectorbiblia : Model -> Model
tblectorbiblia model =
    setpublicador
        "tblectorbiblia"
        1
        idDiscursos
        .tblectorid
        .lecturabiblia
        (\( semana, id, name ) ->
            { semana
                | tblectorid = id
                , tblectorname = name
            }
        )
        model


tb1orador : Model -> Model
tb1orador model =
    setpublicador
        "tb1orador"
        2
        idDiscursos
        .tb1oradorid
        .tb1orador
        (\( semana, id, name ) ->
            { semana
                | tb1oradorid =
                    id
                , tb1oradorname = name
            }
        )
        model


tbperlasorador : Model -> Model
tbperlasorador model =
    setpublicador
        "tbperlasorador"
        2
        idDiscursos
        .tbperlasoradorid
        .perlas
        (\( semana, id, name ) ->
            { semana
                | tbperlasoradorid = id
                , tbperlasoradorname = name
            }
        )
        model


setpublicador callee maxweeks getters semanaid pubfilter semanasetter model =
    if semanaid model.semanatofill == "" then
        let
            idsemanapasada =
                anteriores model
                    -- |> Debug.log (callee ++ " semanas anteriores")
                    |> getlastweekid semanaid

            -- |> Debug.log (callee ++ " getlastweekid")
        in
        model.publicadores
            |> filterpubs (\pub -> pubfilter pub)
            |> List.sortBy (\pub -> pub.name)
            -- |> Debug.log (callee ++ " pubs")
            |> recombine idsemanapasada
            |> filterpubssolodisponibles model.semanatofill.fechasabado
            -- |> Debug.log (callee ++ " recombine")
            |> removepublicadoresmatching callee getters model.semanatofill
            -- |> Debug.log (callee ++ " removepublicadoresmatching")
            |> removeVideoIfGreaterEqualThan 2
            -- |> Debug.log (callee ++ " removeVideoIfGreaterEqualThan")
            |> choosefirst
            -- |> Debug.log (callee ++ " choosefirst")
            |> setasignments semanasetter model

    else
        model


removeprevioussemanas callee maxweeks semanaid model publicadores =
    publicadores
        |> getlastweeks maxweeks
        -- |> Debug.log (callee ++ " lastweeks")
        |> getlastweeksids semanaid (anteriores model)
        -- |> Debug.log (callee ++ " getlastweeksids")
        |> pubsnotinidlistorvideo publicadores


nvcorador1 : Model -> Model
nvcorador1 model =
    if model.semanatofill.nvcorador1id == "" then
        let
            --  List of nvcorador alfaorder,
            --  Remove already on other talks except video
            --  Split recombine on last weeks,
            --  Remove last weeks nvcorador2 if greater than 1,
            --   choosefirst after Video if greater than 1
            idsemanapasadanvc1 =
                anteriores model
                    |> getlastweekid
                        .nvcorador1id

            idsemanapasadanvc2 =
                anteriores model
                    |> getlastweekid
                        .nvcorador2id

            recombined =
                model.publicadores
                    |> filterpubs (\pub -> pub.nvc)
                    |> List.sortBy (\pub -> pub.name)
                    |> removepublicadoresmatching "nvcorador1" idDiscursos model.semanatofill
                    |> recombine idsemanapasadanvc1
                    |> filterpubssolodisponibles model.semanatofill.fechasabado

            pubs =
                if List.length recombined > 1 then
                    pubsnotinidlistorvideo recombined [ idsemanapasadanvc2 ]

                else
                    recombined

            semanasetter =
                \( semana, id, name ) ->
                    { semana
                        | nvcorador1id = id
                        , nvcorador1name = name
                    }
        in
        pubs
            |> removeVideoIfGreaterEqualThan 2
            |> choosefirst
            |> setasignments semanasetter model

    else
        model


nvcorador2 : Model -> Model
nvcorador2 model =
    if model.semanatofill.nvcorador2id == "" && model.semanatofill.nvcmins2 > 0 then
        let
            callee =
                "nvcorador2"

            --  List of nvcorador alfaorder,
            --  Remove already on other talks except video
            --  Split recombine on last weeks,
            --  Remove last weeks nvcorador2 if greater than 1,
            --   choosefirst after Video if greater than 1
            idsemanapasadanvc1 =
                anteriores model
                    |> getlastweekid
                        .nvcorador1id

            -- |> Debug.log (callee ++ "idsemanapasadanvc1")
            idsemanapasadanvc2 =
                anteriores model
                    |> getlastweekid
                        .nvcorador2id

            -- |> Debug.log (callee ++ " idsemanapasadanvc2")
            recombined =
                model.publicadores
                    |> filterpubs (\pub -> pub.nvc)
                    |> List.sortBy (\pub -> pub.name)
                    -- |> Debug.log (callee ++ " filtered pubs")
                    |> removepublicadoresmatching "nvcorador2" idDiscursos model.semanatofill
                    -- |> Debug.log (callee ++ " removepublicadoresmatching")
                    |> recombine idsemanapasadanvc2
                    |> filterpubssolodisponibles model.semanatofill.fechasabado

            -- |> Debug.log (callee ++ " recombined")
            pubs =
                if List.length recombined > 1 then
                    pubsnotinidlistorvideo
                        recombined
                        [ idsemanapasadanvc1 ]

                else
                    recombined

            -- |> Debug.log (callee ++ " pubs")
            semanasetter =
                \( semana, id, name ) ->
                    { semana
                        | nvcorador2id =
                            id
                        , nvcorador2name = name
                    }
        in
        pubs
            |> removeVideoIfGreaterEqualThan 2
            |> choosefirst
            -- |> Debug.log (callee ++ " chosen")
            |> setasignments semanasetter model

    else
        model


presidente : Model -> Model
presidente model =
    presidenteestudiantes model


presidenteestudiantes : Model -> Model
presidenteestudiantes model =
    let
        --   List of presidentes alfaorder,
        --   Split recombine on last weeks,
        --   Remove already on other talks except video
        --   Remove last weeks if greater than 1,
        --   choosefirst
        idsemanapasada =
            anteriores model
                |> getlastweekid
                    .presidenteid

        chosen =
            model.publicadores
                |> filterpubs (\pub -> pub.presidentesabado)
                |> List.sortBy (\pub -> pub.name)
                |> recombine idsemanapasada
                |> filterpubssolodisponibles model.semanatofill.fechasabado
                |> removepublicadoresmatching "presidenteestudiantes" idDiscursos model.semanatofill
                |> choosefirst

        semanasetter1 =
            \( semana, id, name ) ->
                { semana
                    | presidenteid = id
                    , presidentename = name
                }

        semanasetter2 =
            \( semana, id, name ) ->
                { semana
                    | tbperlasoradorid = id
                    , tbperlasoradorname = name
                }

        model1 =
            chosen
                |> setasignments
                    semanasetter1
                    model

        model2 =
            chosen
                |> setasignments
                    semanasetter2
                    model1
    in
    model2


nvcestudioorador : Model -> Model
nvcestudioorador model =
    let
        publicadores =
            model.publicadores
                |> filterpubs (\pub -> pub.estudiocongregacion)
                |> filterpubssolodisponibles model.semanatofill.fechasabado
                |> List.sortBy (\pub -> pub.name)

        idsemanapasada =
            anteriores model
                |> getlastweekid .nvcestudiooradorid

        removedothertalks =
            publicadores
                |> recombine idsemanapasada
                |> removepublicadoresmatching "nvcestudioorador" idDiscursos model.semanatofill

        -- List of estudiocongregacion alfaorder,
        -- Split recombine on last weeks,
        -- Remove already on other talks,
        -- Remove nvcestudioorador last week,
        -- Remove Video if greater than 1,
        -- if at least one choosefirst
        -- Set nvcestudioorador
        semanasetter =
            \( semana, id, name ) ->
                { semana
                    | nvcestudiooradorid = id
                    , nvcestudiooradorname = name
                }
    in
    publicadores
        |> getlastweeks 1
        |> getlastweeksids .nvcestudiooradorid (anteriores model)
        |> pubsnotinidlistorvideo removedothertalks
        |> removeVideoIfGreaterEqualThan 2
        |> choosefirst
        |> setasignments semanasetter model


getlastweeks : Int -> List a -> Int
getlastweeks maxval publicadores =
    let
        lastweeks =
            (List.length publicadores - 1)
                |> min maxval
    in
    if lastweeks < 1 then
        1

    else
        lastweeks


pubsnotinidlistorvideo :
    List { b | esvideo : Bool, id : a }
    -> List a
    -> List { b | esvideo : Bool, id : a }
pubsnotinidlistorvideo publicadores ids =
    List.filter
        (\pub -> (not <| List.member pub.id ids) || pub.esvideo)
        publicadores


removepublicadoresmatching :
    String
    -> List (a -> String)
    -> a
    -> List { b | esvideo : Bool, id : String }
    -> List { b | esvideo : Bool, id : String }
removepublicadoresmatching callee getters semana publicadores =
    getters
        |> List.map (\getter -> getter semana)
        |> List.filter (\id -> id /= "")
        -- |> Debug.log (callee ++ " ids")
        |> pubsnotinidlistorvideo publicadores



-- |> Debug.log (callee ++ " pubsnotinidlistorvideo")


getlastweekid : (a -> String) -> List a -> String
getlastweekid getter semanas =
    semanas
        |> List.map getter
        |> List.filter (\id -> id /= "")
        |> List.reverse
        |> List.head
        |> (\id ->
                case id of
                    Nothing ->
                        ""

                    Just identification ->
                        identification
           )


getlastweekidwithin : (a -> String) -> List Publicador -> List a -> String
getlastweekidwithin getter pubs semanas =
    semanas
        |> List.map getter
        |> List.filter (\id -> id /= "")
        |> List.filter (\id -> List.member id (List.map (\pub -> pub.id) pubs))
        |> List.reverse
        |> List.head
        |> (\id ->
                case id of
                    Nothing ->
                        ""

                    Just identification ->
                        identification
           )


getlastweeksids : (a -> comparable) -> List a -> Int -> List comparable
getlastweeksids getter semanas lastweeks =
    semanas
        |> List.reverse
        |> List.take lastweeks
        |> List.reverse
        |> List.map getter
        |> ListExtra.unique


nvc1anciano : Model -> Model
nvc1anciano model =
    -- List of nvcestudioorador alfaorder,
    -- Remove all except in Anciano list
    -- Remove Video if greater than 1,
    -- choosefirst
    --  Set nvcorador1
    if model.semanatofill.nvcanciano1 then
        let
            semanasetter =
                \( semana, id, name ) ->
                    { semana
                        | nvcorador1id = id
                        , nvcorador1name = name
                    }
        in
        model.publicadores
            |> filterpubs (\pub -> pub.nvc && pub.anciano)
            |> filterpubssolodisponibles model.semanatofill.fechasabado
            |> List.sortBy (\pub -> pub.name)
            |> removeVideoIfGreaterEqualThan 2
            |> choosefirst
            |> setasignments semanasetter model

    else
        model


removeVideoIfGreaterEqualThan :
    Int
    -> List { a | esvideo : Bool, name : comparable }
    -> List { a | esvideo : Bool, name : comparable }
removeVideoIfGreaterEqualThan min publicadores =
    if List.length publicadores >= min then
        removeVideo publicadores

    else
        publicadores


removeVideo : List { a | esvideo : Bool, name : comparable } -> List { a | esvideo : Bool, name : comparable }
removeVideo publicadores =
    filterpubs (\pub -> not pub.esvideo) publicadores


nvc2anciano : Model -> Model
nvc2anciano model =
    if
        model.semanatofill.nvcanciano2
            && model.semanatofill.nvcmins2
            > 0
    then
        let
            semanasetter =
                \( semana, id, name ) ->
                    { semana
                        | nvcorador2id =
                            id
                        , nvcorador2name = name
                    }
        in
        model.publicadores
            |> filterpubs (\pub -> pub.nvc && pub.anciano)
            |> filterpubssolodisponibles model.semanatofill.fechasabado
            |> List.sortBy (\pub -> pub.name)
            |> removeVideoIfGreaterEqualThan 2
            |> choosefirst
            |> setasignments semanasetter model

    else
        model



-- ID Types getters


idLectores : List ({ b | nvcestudiolectorid : a } -> a)
idLectores =
    [ .nvcestudiolectorid
    ]


idOraciones : List ({ b | oracion1id : a, oracion2id : a } -> a)
idOraciones =
    [ .oracion1id
    , .oracion2id
    ]


idDiscursos :
    List
        ({ b
            | nvcestudiooradorid : a
            , nvcorador1id : a
            , nvcorador2id : a
            , presentacionesmesid : a
            , presidenteid : a
            , smm3esid : a
            , smm1esid : a
            , smm2esid : a
            , tb1oradorid : a
            , tblectorid : a
            , tbperlasoradorid : a
         }
         -> a
        )
idDiscursos =
    [ .presidenteid
    , .tb1oradorid
    , .tbperlasoradorid
    , .tblectorid
    , .smm1esid
    , .smm2esid
    , .smm3esid
    , .presentacionesmesid
    , .nvcorador1id
    , .nvcorador2id
    , .nvcestudiooradorid
    ]


idDiscursoscomentarios : List ({ b | nvcestudiooradorid : a, nvcorador1id : a, nvcorador2id : a, presidenteid : a, tbperlasoradorid : a } -> a)
idDiscursoscomentarios =
    [ .presidenteid
    , .tbperlasoradorid
    , .nvcorador1id
    , .nvcorador2id
    , .nvcestudiooradorid
    ]


idAyudantes : List ({ b | smm3ayuid : a, smm1ayuid : a, smm2ayuid : a } -> a)
idAyudantes =
    [ .smm1ayuid
    , .smm2ayuid
    , .smm3ayuid
    ]


idApoyos : List ({ b | aparatosid : a, camaraid : a, cronometroid : a } -> a)
idApoyos =
    [ .aparatosid
    , .camaraid
    , .cronometroid
    , .cronometroid
    ]


idNoPuedeApoyos : List ({ b | nvcestudiooradorid : a, presidenteid : a } -> a)
idNoPuedeApoyos =
    [ .presidenteid
    , .nvcestudiooradorid
    ]



-- Helpers


setasignments :
    (( Semana, String, String ) -> Semana)
    -> Model
    -> Maybe Publicador
    -> Model
setasignments semanasetter model chosen =
    let
        ( id, name ) =
            getIdName chosen

        semana =
            semanasetter ( model.semanatofill, id, name )
    in
    { model | semanatofill = semana }


recombine :
    a
    -> List { b | id : a }
    -> List { b | id : a }
recombine idsemanapasada oradores =
    let
        -- _ =
        --     Debug.log "recombine idsemanapasada" idsemanapasada
        index =
            -- Debug.log "recombine index" <|
            ListExtra.findIndex
                (\pub -> pub.id == idsemanapasada)
                oradores

        ( toend, tostart ) =
            -- Debug.log "recombine toend tostart" <|
            case index of
                Nothing ->
                    ( oradores, [] )

                Just ind ->
                    ListExtra.splitAt (ind + 1) oradores
    in
    List.concat [ tostart, toend ]



-- |> Debug.log "recombined"


choosefirst : List a -> Maybe a
choosefirst publicadores =
    List.head publicadores


getIdName :
    Maybe { a | id : String, name : String }
    -> ( String, String )
getIdName chosen =
    case chosen of
        Nothing ->
            ( "", "" )

        Just pub ->
            ( pub.id, pub.name )



-- showpubs :
--     List { a | id : String, name : String }
--     -> String
-- showpubs publicadores =
--     publicadores
--         |> List.map (\pub -> pub.id ++ ",  " ++ pub.name)


filterpubs :
    ({ a | name : comparable } -> Bool)
    -> List { a | name : comparable }
    -> List { a | name : comparable }
filterpubs filter publicadores =
    publicadores
        |> List.filter filter


filtermismosexoofamiliarsexoopuesto : Maybe Publicador -> List Publicador -> List Publicador
filtermismosexoofamiliarsexoopuesto publicador publicadores =
    case publicador of
        Nothing ->
            []

        Just justpub ->
            publicadores
                |> List.filter (\pub -> pub.varon == justpub.varon || (pub.varon /= justpub.varon && List.member pub.id justpub.familiaressexoopuesto))


filterpubssolodisponibles : comparable -> List { a | fechanodisponiblefin : Maybe comparable, fechanodisponibleinicio : Maybe comparable } -> List { a | fechanodisponiblefin : Maybe comparable, fechanodisponibleinicio : Maybe comparable }
filterpubssolodisponibles fechasabado publicadores =
    publicadores
        |> List.filter
            (\pub ->
                case pub.fechanodisponibleinicio of
                    Nothing ->
                        True

                    Just fechainicio ->
                        case pub.fechanodisponiblefin of
                            Nothing ->
                                True

                            Just fechafin ->
                                fechasabado >= fechainicio && fechasabado >= fechafin
            )


updatesemantofill :
    (a -> a)
    -> { c | semanatofill : a }
    -> { c | semanatofill : a }
updatesemantofill semanasetter model =
    let
        semana =
            semanasetter model.semanatofill
    in
    { model | semanatofill = semana }


getcancion :
    List Cancion
    -> List Publicador
    -> Int
    -> CancionPublicador
getcancion canciones publicadores num =
    let
        maybeCancion =
            List.filter (\cancion -> cancion.num == num) canciones
                |> List.head

        ( id1, tema1, versiculo1 ) =
            case maybeCancion of
                Nothing ->
                    ( "", "", "" )

                Just cancion ->
                    ( cancion.idasignado, cancion.tema, cancion.versiculo )

        publicador =
            List.filter (\pub -> pub.id == id1) publicadores
                |> List.head

        nombre1 =
            case publicador of
                Nothing ->
                    ""

                Just val ->
                    val.name
    in
    { id = id1
    , nombre = nombre1
    , tema = tema1
    , versiculo = versiculo1
    }
