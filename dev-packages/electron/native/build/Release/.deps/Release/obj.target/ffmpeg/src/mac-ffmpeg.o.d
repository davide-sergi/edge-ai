cmd_Release/obj.target/ffmpeg/src/mac-ffmpeg.o := cc '-DNODE_GYP_MODULE_NAME=ffmpeg' '-DUSING_UV_SHARED=1' '-DUSING_V8_SHARED=1' '-DV8_DEPRECATION_WARNINGS=1' '-D_DARWIN_USE_64_BIT_INODE=1' '-D_LARGEFILE_SOURCE' '-D_FILE_OFFSET_BITS=64' '-DNAPI_VERSION=2' '-DBUILDING_NODE_EXTENSION' -I/Users/sergi/.node-gyp/10.16.0/include/node -I/Users/sergi/.node-gyp/10.16.0/src -I/Users/sergi/.node-gyp/10.16.0/deps/openssl/config -I/Users/sergi/.node-gyp/10.16.0/deps/openssl/openssl/include -I/Users/sergi/.node-gyp/10.16.0/deps/uv/include -I/Users/sergi/.node-gyp/10.16.0/deps/zlib -I/Users/sergi/.node-gyp/10.16.0/deps/v8/include  -Os -gdwarf-2 -mmacosx-version-min=10.7 -arch x86_64 -Wall -Wendif-labels -W -Wno-unused-parameter -fno-strict-aliasing -MMD -MF ./Release/.deps/Release/obj.target/ffmpeg/src/mac-ffmpeg.o.d.raw   -c -o Release/obj.target/ffmpeg/src/mac-ffmpeg.o ../src/mac-ffmpeg.c
Release/obj.target/ffmpeg/src/mac-ffmpeg.o: ../src/mac-ffmpeg.c \
  ../src/./linux-ffmpeg.c ../src/ffmpeg.h
../src/mac-ffmpeg.c:
../src/./linux-ffmpeg.c:
../src/ffmpeg.h:
