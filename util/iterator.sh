function ForEachElement() {
    local thisArray="${1}[@]"
    local action="${2}"; shift 2
    local actionArgs="$*"

    thisArray=("${!thisArray}")

    for element in "${thisArray[@]}"; do
        echo "Performing ${action} on ${element} with ${actionArgs}"

        $action "${element}" ${actionArgs}
        [[ $? -ne 0 ]] && echo "Failed element: ${element}" && return 1
    done

    return 0
}
