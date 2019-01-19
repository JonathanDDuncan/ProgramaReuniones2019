port module PortsGenerate exposing (fillSemanaGenerate)

import Ports exposing (..)


fillSemanaGenerate =
    { outgoing = Ports.fillSemanas
    , incoming = Ports.fillSemanasCallBack
    }
