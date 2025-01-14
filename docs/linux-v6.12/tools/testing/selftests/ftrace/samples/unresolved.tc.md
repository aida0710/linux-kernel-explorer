---
sidebar_position: 3
---
# unresolved.tc

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/ftrace/samples/unresolved.tc`

### コンテンツ

```tc
#!/bin/sh
# description: unresolved-case example
trap exit_unresolved INT
kill -INT $PID

```
