---
sidebar_position: 1
---
# basic1.tc

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/ftrace/test.d/00basic/basic1.tc`

### コンテンツ

```tc
#!/bin/sh
# description: Basic trace file check
test -f README -a -f trace -a -f tracing_on -a -f trace_pipe

```
