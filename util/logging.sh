NO_COLOR='\033[0m'

function Log() {
    local lineID="${1}"
    local msg="${2}"
    local type="${3}"
    local color="${4}"

    echo -e "${color}$(date +%F\ %T) [${type}] ${lineID}" "${msg}" "${NO_COLOR}"
}

function LogErr() {
    Log "${1}" "${*:2}" "ERROR" '\033[1;31m'
}
export -f LogErr
ErrMessage='eval LogErr "$(echo -e "$(basename $0)/${FUNCNAME[0]}/$LINENO")"'

function LogWarn() {
    Log "${1}" "${*:2}" "WARNING" '\033[1;33m'
}
export -f LogWarn
WarnMessage='eval LogWarn "$(echo -e "$(basename $0)/${FUNCNAME[0]}/$LINENO")"'

function LogInfo() {
    Log "${1}" "${*:2}" "INFO" '\033[1;34m'
}
export -f LogInfo
InfoMessage='eval LogInfo "$(echo -e "$(basename $0)/${FUNCNAME[0]}/$LINENO")"'
