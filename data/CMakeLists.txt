include(MMseqsResourceCompiler)

set(COMPILED_RESOURCES
        easymsa.sh
        main_foldmason.js
        vendor_foldmason.js.zst
        )

set(GENERATED_OUTPUT_HEADERS "")
FOREACH(INPUT_FILE ${COMPILED_RESOURCES})
    compile_resource(${INPUT_FILE} OUTPUT_FILE)
    list(APPEND GENERATED_OUTPUT_HEADERS "${OUTPUT_FILE}")
ENDFOREACH()

add_custom_target(foldmason-generated ALL DEPENDS ${GENERATED_OUTPUT_HEADERS})
