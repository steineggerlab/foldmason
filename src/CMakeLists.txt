include_directories(commons)
add_subdirectory(strucclustutils)
add_subdirectory(commons)
add_subdirectory(version)
add_subdirectory(workflow)

add_executable(foldmason
        ${commons_source_files}
        ${strucclustutils_source_files}
        ${workflow_source_files}
        LocalCommandDeclarations.h
        foldmason.cpp)

mmseqs_setup_derived_target(foldmason foldseek-framework)
add_dependencies(foldmason foldmason-generated local-generated)
target_include_directories(foldmason PUBLIC ${PROJECT_BINARY_DIR}/generated)
target_include_directories(foldseek-framework PUBLIC ${PROJECT_BINARY_DIR}/lib/foldseek/generated)
target_link_libraries(foldmason version)
target_link_libraries(foldseek-framework version)
target_link_libraries(mmseqs-framework version)

install(TARGETS foldmason DESTINATION bin)
