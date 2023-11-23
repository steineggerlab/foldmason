cmake_minimum_required(VERSION 3.15 FATAL_ERROR)
# keep old policy for setting implicit link libraries
# zlib causes issues in static builds otherwise
cmake_policy(SET CMP0060 OLD)
project(foldseek C CXX)
set(CMAKE_MODULE_PATH ${CMAKE_MODULE_PATH} "${CMAKE_CURRENT_SOURCE_DIR}/lib/foldseek/lib/mmseqs/cmake")

if (NOT CMAKE_BUILD_TYPE)
    set(CMAKE_BUILD_TYPE Release)
endif ()

set(FOLDSEEK_FRAMEWORK_ONLY 1 CACHE INTERNAL "" FORCE)
add_subdirectory(lib/foldseek EXCLUDE_FROM_ALL)

add_subdirectory(data)
add_subdirectory(src)
