cmake_minimum_required(VERSION 3.15 FATAL_ERROR)
# keep old policy for setting implicit link libraries
# zlib causes issues in static builds otherwise
cmake_policy(SET CMP0060 OLD)
project(foldseek C CXX)
set(CMAKE_MODULE_PATH ${CMAKE_MODULE_PATH} "${CMAKE_CURRENT_SOURCE_DIR}/lib/foldseek/lib/mmseqs/cmake")

if(FORCE_STATIC_DEPS)
    if(ENABLE_CUDA)
        set(CMAKE_FIND_LIBRARY_SUFFIXES .a .so CACHE INTERNAL "" FORCE)
        set(CMAKE_EXE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} -static-libgcc -static-libstdc++")
    else()
        set(CMAKE_FIND_LIBRARY_SUFFIXES .a CACHE INTERNAL "" FORCE)
        set(CMAKE_LINK_SEARCH_START_STATIC ON CACHE INTERNAL "" FORCE)
        set(CMAKE_EXE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} -static -static-libgcc -static-libstdc++")
    endif()
    set(BUILD_SHARED_LIBS OFF CACHE INTERNAL "" FORCE)
endif()

if(NOT XCODE AND NOT MSVC AND NOT CMAKE_BUILD_TYPE)
    set(CMAKE_BUILD_TYPE Release CACHE STRING "Build type" FORCE)
    set_property(CACHE CMAKE_BUILD_TYPE PROPERTY STRINGS "Debug" "Release" "MinSizeRel" "RelWithDebInfo")
endif()

set(FOLDSEEK_FRAMEWORK_ONLY 1 CACHE INTERNAL "" FORCE)
if(NOT ENABLE_PROSTT5)
    # force disable ProstT5 if its not manually specified by the user
    set(ENABLE_PROSTT5 0 CACHE INTERNAL "" FORCE)
endif()
add_subdirectory(lib/foldseek EXCLUDE_FROM_ALL)

add_subdirectory(data)
add_subdirectory(src)
