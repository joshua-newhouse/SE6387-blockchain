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
export ErrMessage='eval LogErr "$(echo -e "$(basename $0)/${FUNCNAME[0]}/$LINENO")"'

function LogWarn() {
    Log "${1}" "${*:2}" "WARNING" '\033[1;33m'
}
export -f LogWarn
export WarnMessage='eval LogWarn "$(echo -e "$(basename $0)/${FUNCNAME[0]}/$LINENO")"'

function LogInfo() {
    Log "${1}" "${*:2}" "INFO" '\033[1;34m'
}
export -f LogInfo
export InfoMessage='eval LogInfo "$(echo -e "$(basename $0)/${FUNCNAME[0]}/$LINENO")"'

function LogSuccess() {
    Log "${1}" "${*:2}" "SUCCESS" '\033[1;32m'
}
export -f LogSuccess
export SuccessMessage='eval LogSuccess "$(echo -e "$(basename $0)/${FUNCNAME[0]}/$LINENO")"'

function LogFailure() {
    Log "${1}" "${*:2}" "FAILURE" '\033[1;91m'
}
export -f LogFailure
export FailureMessage='eval LogFailure "$(echo -e "$(basename $0)/${FUNCNAME[0]}/$LINENO")"'
